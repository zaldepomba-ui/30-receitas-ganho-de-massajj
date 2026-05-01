import { existsSync, mkdirSync, statSync, unlinkSync } from "node:fs";
import { dirname, extname, relative } from "node:path";
import { spawnSync } from "node:child_process";
import ffmpeg from "ffmpeg-static";
import sharp from "sharp";

const imageAssets = [
  "public/pao.jpeg",
  "public/cereal.jpeg",
  "public/marmita.jpeg",
  "public/icone1.png",
  "public/icone2.png",
  "public/icone3.png",
  "public/lovable-uploads/e218d8b3-6344-4e47-900c-a477726e1b40.png",
  "public/lovable-uploads/52587f27-8369-43bb-a64a-caa335b4b510.png",
  "public/lovable-uploads/9a7843cc-993c-456f-bfaf-c14c4af0d4d4.png",
];

const videoAssets = [
  {
    src: "source-assets/videos/video33.hero.mp4",
    mp4: "public/video33.hero.optimized.mp4",
    webm: "public/video33.hero.webm",
    poster: "public/video33.hero-poster",
    mp4Crf: "22",
    webmCrf: "31",
  },
  {
    src: "source-assets/videos/video-explicativo.mp4",
    mp4: "public/video-explicativo.optimized.mp4",
    webm: "public/video-explicativo.webm",
    poster: "public/video-explicativo-poster",
    mp4Crf: "23",
    webmCrf: "31",
  },
];

const formatBytes = (bytes) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(bytes / 1024) + " KB";

const withModernExtension = (file, extension) =>
  file.slice(0, -extname(file).length) + extension;

const ensureParent = (file) => mkdirSync(dirname(file), { recursive: true });

async function assertDimensionsMatch(source, generated) {
  const [sourceMeta, generatedMeta] = await Promise.all([
    sharp(source).metadata(),
    sharp(generated).metadata(),
  ]);

  if (
    sourceMeta.width !== generatedMeta.width ||
    sourceMeta.height !== generatedMeta.height
  ) {
    throw new Error(
      `${generated} changed dimensions: ${generatedMeta.width}x${generatedMeta.height} instead of ${sourceMeta.width}x${sourceMeta.height}`,
    );
  }
}

function runFfmpeg(args) {
  const result = spawnSync(ffmpeg, ["-hide_banner", "-y", ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout);
  }
}

function getVideoDimensions(file) {
  const result = spawnSync(ffmpeg, ["-hide_banner", "-i", file], {
    encoding: "utf8",
  });
  const output = `${result.stdout}\n${result.stderr}`;
  const match = output.match(/Video:.*?(\d{2,5})x(\d{2,5})/);

  if (!match) {
    throw new Error(`Could not read video dimensions for ${file}`);
  }

  return { width: Number(match[1]), height: Number(match[2]) };
}

function assertVideoDimensionsMatch(source, generated) {
  const a = getVideoDimensions(source);
  const b = getVideoDimensions(generated);

  if (a.width !== b.width || a.height !== b.height) {
    throw new Error(
      `${generated} changed dimensions: ${b.width}x${b.height} instead of ${a.width}x${a.height}`,
    );
  }
}

async function optimizeImages() {
  for (const src of imageAssets) {
    const avif = withModernExtension(src, ".avif");
    const webp = withModernExtension(src, ".webp");

    await sharp(src)
      .avif({ quality: 62, effort: 8, chromaSubsampling: "4:4:4" })
      .toFile(avif);
    await sharp(src)
      .webp({ quality: 84, effort: 6, smartSubsample: true })
      .toFile(webp);

    await assertDimensionsMatch(src, avif);
    await assertDimensionsMatch(src, webp);

    console.log(
      `image ${relative(process.cwd(), src)}: ${formatBytes(statSync(src).size)} -> avif ${formatBytes(statSync(avif).size)}, webp ${formatBytes(statSync(webp).size)}`,
    );
  }
}

async function createPosters(asset) {
  const jpg = `${asset.poster}.jpg`;
  const webp = `${asset.poster}.webp`;
  const avif = `${asset.poster}.avif`;

  ensureParent(jpg);
  runFfmpeg([
    "-ss",
    "0.2",
    "-i",
    asset.src,
    "-frames:v",
    "1",
    "-q:v",
    "2",
    jpg,
  ]);

  await sharp(jpg)
    .webp({ quality: 86, effort: 6, smartSubsample: true })
    .toFile(webp);
  await sharp(jpg)
    .avif({ quality: 64, effort: 8, chromaSubsampling: "4:4:4" })
    .toFile(avif);

  await assertDimensionsMatch(jpg, webp);
  await assertDimensionsMatch(jpg, avif);
  unlinkSync(jpg);
}

async function optimizeVideos() {
  for (const asset of videoAssets) {
    runFfmpeg([
      "-i",
      asset.src,
      "-map",
      "0:v:0",
      "-an",
      "-c:v",
      "libx264",
      "-preset",
      "slow",
      "-crf",
      asset.mp4Crf,
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      asset.mp4,
    ]);

    runFfmpeg([
      "-i",
      asset.src,
      "-map",
      "0:v:0",
      "-an",
      "-c:v",
      "libvpx-vp9",
      "-b:v",
      "0",
      "-crf",
      asset.webmCrf,
      "-row-mt",
      "1",
      "-deadline",
      "good",
      "-cpu-used",
      "3",
      asset.webm,
    ]);

    assertVideoDimensionsMatch(asset.src, asset.mp4);
    assertVideoDimensionsMatch(asset.src, asset.webm);
    await createPosters(asset);

    console.log(
      `video ${relative(process.cwd(), asset.src)}: ${formatBytes(statSync(asset.src).size)} -> mp4 ${formatBytes(statSync(asset.mp4).size)}, webm ${formatBytes(statSync(asset.webm).size)}`,
    );
  }
}

await optimizeImages();

if (existsSync(ffmpeg)) {
  await optimizeVideos();
} else {
  throw new Error("ffmpeg-static binary was not found.");
}
