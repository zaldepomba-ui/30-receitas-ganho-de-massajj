import type { ImgHTMLAttributes } from "react";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

const replaceExtension = (src: string, extension: string) =>
  src.replace(/\.(png|jpe?g)$/i, extension);

const OptimizedImage = ({ src, alt, ...props }: OptimizedImageProps) => (
  <picture>
    <source srcSet={replaceExtension(src, ".avif")} type="image/avif" />
    <source srcSet={replaceExtension(src, ".webp")} type="image/webp" />
    <img src={src} alt={alt} decoding="async" {...props} />
  </picture>
);

export default OptimizedImage;
