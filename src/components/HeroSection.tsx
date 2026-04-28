const HeroSection = () => {
  return (
    <section className="bg-[#111111] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-left">
        <h1 className="font-display font-black leading-[0.95] tracking-tight flex flex-col">
          <span className="text-white text-[60px] md:text-[80px] lg:text-[110px] font-black">
            30
          </span>
          <span className="text-white text-[45px] md:text-[60px] lg:text-[85px] font-extrabold whitespace-nowrap">
            receitas para
          </span>
          <span className="text-[#FBBF24] text-[45px] md:text-[60px] lg:text-[85px] font-extrabold whitespace-nowrap">
            ganhar massa!
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
