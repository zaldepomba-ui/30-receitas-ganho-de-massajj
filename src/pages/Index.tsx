import { useEffect } from "react";
import { Play, CheckCircle2, Zap, BicepsFlexed, Drumstick, Salad, Gift, Lock, Timer, Brain, Star, ChevronDown } from "lucide-react";

const PremiumTimer = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="136" r="88" fill="currentColor" fillOpacity="0.15" />
    <circle cx="128" cy="136" r="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line x1="128" y1="88" x2="128" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line x1="128" y1="136" x2="160" y2="152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line x1="104" y1="24" x2="152" y2="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line x1="184.56" y1="65.44" x2="207.18" y2="42.82" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
);

const PremiumBrain = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128,88c0-30.93,25.07-56,56-56s56,25.07,56,56c0,20.89-11.45,39.06-28.53,48.64a8,8,0,0,1-3.66,1.25L184,140a24,24,0,0,0-24,24v60" fill="currentColor" fillOpacity="0.15" />
    <path d="M128,88c0-30.93-25.07-56-56-56S16,57.07,16,88c0,20.89,11.45,39.06,28.53,48.64a8,8,0,0,0,3.66,1.25L72,140a24,24,0,0,1,24,24v60" fill="currentColor" fillOpacity="0.15" />
    <path d="M128,88V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M128,88c0-30.93,25.07-56,56-56s56,25.07,56,56c0,20.89-11.45,39.06-28.53,48.64a8,8,0,0,1-3.66,1.25L184,140a24,24,0,0,0-24,24v60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M128,88c0-30.93-25.07-56-56-56S16,57.07,16,88c0,20.89,11.45,39.06,28.53,48.64a8,8,0,0,0,3.66,1.25L72,140a24,24,0,0,1,24,24v60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M64,88a24,24,0,1,1,24-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M192,88a24,24,0,1,0-24-24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line x1="88" y1="120" x2="168" y2="120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
);

const PremiumBiceps = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4 13A5 5 0 0 1 22 15c0 3.87-4 7-10 7-4.08 0-8.15-2-10-7-1.43-3.92 2.37-6.07 5-6 1.7.05 3.15 1.16 4 2.5" fill="currentColor" fillOpacity="0.15" />
    <path d="M12.4 13A5 5 0 0 1 22 15c0 3.87-4 7-10 7-4.08 0-8.15-2-10-7-1.43-3.92 2.37-6.07 5-6 1.7.05 3.15 1.16 4 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 17h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.16 9.48 22 5.09a1.59 1.59 0 0 0-2.34-2.17l-4.13 4.38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 7.27a3 3 0 0 0-4.04-4.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.22 8.16a3 3 0 0 0-4.23-4.03" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.59 15.54a4.98 4.98 0 0 1-2.59-4.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Also trigger staggered children if present
            const staggers = entry.target.querySelectorAll('.stagger-item');
            staggers.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('is-visible');
              }, idx * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-section, .stagger-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const content = btn.nextElementSibling as HTMLElement;
    const icon = btn.querySelector('.faq-icon') as HTMLElement;
    
    if (content.style.maxHeight) {
      content.style.maxHeight = "";
      icon.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] font-body text-main">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-16 px-6">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }} />
          ))}
        </div>

        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start gap-5 fade-in-section w-full max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading uppercase text-white leading-none">
              Ganhe Massa de Verdade <br className="hidden md:block"/>
              <span className="text-gold">Com a Comida Certa.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-subheading text-muted max-w-2xl mt-2">
              30 receitas práticas, ricas em proteína e feitas para quem treina sério.
            </p>
            
            <a href="#checkout" className="w-full md:w-auto text-center bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full font-sans font-bold text-gray-900 tracking-wide uppercase px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] mt-2">
              QUERO MINHAS 30 RECEITAS — R$22,80
            </a>
            
            <p className="text-base text-[#E0E0E0] opacity-80 font-medium">
              ✓ Acesso imediato &nbsp; ✓ Sem assinatura &nbsp; ✓ Funciona de verdade
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6 text-base font-subheading font-bold text-[#E0E0E0]">
              <span className="flex items-center gap-2"><Lock size={20} className="text-gold" /> Pagamento Seguro</span>
              <span className="flex items-center gap-2"><Zap size={20} className="text-gold" /> Acesso Imediato</span>
              <span className="flex items-center gap-2"><Star size={20} className="text-gold" /> +1.000 leitores</span>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center fade-in-section" style={{ transitionDelay: '0.2s' }}>
            <div className="relative w-full max-w-2xl -mt-12 lg:-mt-32">
              {/* Muscular Pigeon Hero Image */}
              <div className="relative group">
                <video 
                  src="/video33.hero.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-10 w-full h-auto border-none outline-none scale-100 lg:scale-110 transform origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* SECTION 2: VIDEO EMBED */}
      <section className="py-24 px-6 bg-[var(--bg-dark)] border-y border-[rgba(245,166,35,0.1)]">
        <div className="container mx-auto max-w-4xl flex flex-col items-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white mb-10 uppercase">
            Veja o que você vai <span className="text-gold">receber</span>
          </h2>
          
          <video 
            src="/video-explicativo.mp4" 
            controls 
            className="w-full aspect-video bg-black rounded-xl border border-gold gold-glow relative overflow-hidden mb-12"
          />

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center">
            <div className="flex items-center gap-3 text-lg font-subheading">
              <CheckCircle2 className="text-gold shrink-0" />
              <span className="text-white">Receitas Testadas</span>
            </div>
            <div className="flex items-center gap-3 text-lg font-subheading">
              <CheckCircle2 className="text-gold shrink-0" />
              <span className="text-white">Ingredientes Acessíveis</span>
            </div>
            <div className="flex items-center gap-3 text-lg font-subheading">
              <CheckCircle2 className="text-gold shrink-0" />
              <span className="text-white">Macros Calculados</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM / HOOK */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="container mx-auto max-w-[720px] fade-in-section">
          <div className="border-l-4 border-gold pl-8 py-2">
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-6 uppercase leading-tight">
              Você treina, come de qualquer jeito... <br className="hidden md:block"/>
              <span className="text-gold">e o resultado não vem.</span>
            </h2>
            <p className="text-lg text-muted mb-4 font-body">
              A maioria das pessoas falha no ganho de massa não por falta de esforço na academia, mas porque a dieta é fraca, repetitiva ou impossível de manter.
            </p>
            <p className="text-lg text-muted mb-6 font-body">
              Comer peito de frango seco todo dia não é o caminho. Você precisa de calorias de qualidade, proteínas na medida certa e, mais importante, de comida que dê vontade de comer.
            </p>
            <p className="text-xl text-gold font-subheading font-bold italic">
              A diferença está no prato.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT'S INSIDE */}
      <section className="py-24 px-6 bg-[var(--bg-dark)]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white mb-16 uppercase fade-in-section">
            O que está <span className="text-gold">dentro</span> do protocolo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Zap, title: "Café da Manhã Hipercalórico", desc: "Comece o dia com energia e calorias densas para o bulking." },
              { icon: BicepsFlexed, title: "Refeições Pós-Treino", desc: "O combustível exato para recuperar e crescer a musculatura." },
              { icon: Drumstick, title: "Comidas Saudáveis para Bulking", desc: "Almoços e jantares que enchem o prato sem sujar a dieta." },
              { icon: Salad, title: "Lanches & Receitas Rápidas", desc: "Soluções práticas para quando o tempo está apertado." },
              { icon: Gift, title: "Bônus: Guia de Meal Prep", desc: "Aprenda a preparar suas marmitas da semana em 2 horas." }
            ].map((mod, i) => (
              <div key={i} className={`bg-[var(--bg-tertiary)] border border-[rgba(245,166,35,0.2)] rounded-xl p-8 card-hover hover:border-gold hover:shadow-[0_0_24px_rgba(245,166,35,0.2)] relative overflow-hidden fade-in-section stagger-item opacity-0 translate-y-8 group ${i === 4 ? 'md:col-span-2 flex flex-col md:flex-row items-center md:text-left text-center gap-6' : ''}`} style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease, border-color 0.3s ease' }}>
                <mod.icon size={i === 4 ? 48 : 32} className={`text-gold shrink-0 ${i === 4 ? 'mb-0' : 'mb-6'}`} />
                <div>
                  <h3 className="text-xl font-heading text-white uppercase mb-3 tracking-wide">{mod.title}</h3>
                  <p className="text-muted font-body">{mod.desc}</p>
                </div>
                <div className="absolute -bottom-4 -right-4 text-9xl text-gold opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300 font-heading leading-none">0{i+1}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center fade-in-section">
            <div className="bg-[rgba(245,166,35,0.1)] border border-gold rounded-full px-6 py-3 font-subheading font-bold text-gold text-sm uppercase tracking-widest text-center">
              30 receitas completas. 5 módulos. Zero enrolação.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RECIPE PREVIEW */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white mb-16 uppercase fade-in-section">
            Uma amostra do que <span className="text-gold">tem dentro</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Pão Proteico de Gemas", img: "/pao.jpeg", badge: "19g P | 425 kcal" },
              { name: "Super Bowl Cereal", img: "/cereal.jpeg", badge: "32g P | 1.138 kcal" },
              { name: "Marmita de Elite", img: "/marmita.jpeg", badge: "75g P | 1.055 kcal" }
            ].map((recipe, i) => (
              <div key={i} className="flex flex-col gap-4 fade-in-section stagger-item opacity-0 translate-y-8" style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
                <div className="img-zoom-container w-full aspect-square rounded-2xl overflow-hidden relative shadow-lg">
                  <img src={recipe.img} alt={recipe.name} loading="lazy" className="img-zoom w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] to-transparent opacity-60"></div>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2 px-2 gap-3">
                  <h3 className="font-heading text-2xl text-white uppercase truncate">{recipe.name}</h3>
                  <div className="bg-gold text-[var(--bg-dark)] font-bold text-xs px-3 py-1 rounded-full font-subheading whitespace-nowrap flex-shrink-0">
                    {recipe.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY IT WORKS */}
      <section className="py-24 px-6 bg-[var(--bg-dark)]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white mb-16 uppercase fade-in-section">
            Por Que <span className="text-gold">Funciona</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { img: { src: "/icone1.png", alt: "Ícone 1" }, title: "Rápido & Fácil", desc: "Receitas prontas em até 15 minutos." },
              { img: { src: "/icone2.png", alt: "Ícone 2" }, title: "Feito Para Crescer", desc: "Não é dieta restritiva, é resultado sólido." },
              { img: { src: "/icone3.png", alt: "Ícone 3" }, title: "Zero Habilidade", desc: "Qualquer um consegue preparar." }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center fade-in-section stagger-item opacity-0 translate-y-8" style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
                <div className="w-20 h-20 rounded-2xl bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.3)] flex items-center justify-center mb-6 text-gold">
                  <img src={feat.img.src} alt={feat.img.alt} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-heading text-2xl text-white uppercase mb-3">{feat.title}</h3>
                <p className="text-muted font-body max-w-xs">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF */}
      <section className="py-24 px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white mb-16 uppercase fade-in-section">
            Resultados <span className="text-gold">Reais</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Finalmente um material que não me manda comer frango sem sal. As receitas de pós-treino salvaram minha dieta.", name: "Lucas M.", tag: "🇧🇷" },
              { text: "Eu não sabia cozinhar nada. O guia é direto ao ponto e as refeições hipercalóricas são fáceis de bater os macros.", name: "Rafael C.", tag: "🇧🇷" },
              { text: "Ganhei 4kg no primeiro mês ajustando a alimentação com essas receitas. O sabor muda tudo, você não desiste.", name: "João P.", tag: "🇧🇷" }
            ].map((review, i) => (
              <div key={i} className="bg-[var(--bg-tertiary)] p-8 rounded-xl border border-[rgba(255,255,255,0.05)] relative fade-in-section stagger-item opacity-0 translate-y-8" style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
                <div className="absolute top-4 right-6 text-8xl font-heading text-gold opacity-10">"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} className="fill-gold text-gold" />)}
                </div>
                <p className="text-muted italic font-body mb-6 relative z-10">"{review.text}"</p>
                <p className="font-subheading font-bold text-white uppercase text-sm">{review.name} {review.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA BLOCK */}
      <section id="checkout" className="py-32 px-6 bg-[var(--bg-dark)] relative flex justify-center items-center overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gold opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="bg-[var(--bg-tertiary)] border border-gold rounded-3xl p-8 md:p-12 max-w-[560px] w-full shadow-[0_0_60px_rgba(245,166,35,0.2)] text-center relative z-10 fade-in-section">
          <div className="inline-block bg-[#F5A623] text-[#0A0A0A] font-bold font-subheading text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            🔥 OFERTA ESPECIAL
          </div>
          
          <h2 className="text-4xl font-heading uppercase text-white mb-4 leading-none">Comece a Ganhar <br/>Massa Hoje</h2>
          <p className="text-muted font-body mb-8">30 receitas completas. Um guia simples. Resultados que você vai ver no espelho.</p>
          
          <div className="mb-8">
            <span className="text-xl text-muted line-through font-subheading font-medium">R$47,00</span>
            <div className="text-6xl font-heading text-white leading-none mt-1">R$ 22,80</div>
          </div>
          
          <a href="#" className="w-full block text-center bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full font-sans font-bold text-gray-900 tracking-wide uppercase py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] mb-6">
            QUERO ACESSAR AGORA
          </a>
          
          <p className="text-sm text-[#E0E0E0] mb-6 font-medium">
            ✓ Download Imediato &nbsp; ✓ Acesso Vitalício &nbsp; ✓ Garantia 7 Dias
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-muted font-subheading uppercase tracking-wider">
            <Lock size={14} className="text-gold" /> Compra 100% segura via Kiwify
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-24 px-6 bg-[var(--bg-dark)] border-t border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto max-w-3xl fade-in-section">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white mb-12 uppercase">
            Perguntas <span className="text-gold">Frequentes</span>
          </h2>
          
          <div className="flex flex-col gap-4">
            {[
              { q: "Como eu recebo o ebook?", a: "Imediatamente após a confirmação do pagamento, você receberá o acesso automático pela Kiwify no seu e-mail. Lá você terá um vídeo de boas-vindas e todo o processo automatizado de login (com seu e-mail e senha) para acessar a página exclusiva das receitas." },
              { q: "Preciso saber cozinhar?", a: "De forma alguma! As receitas foram pensadas para iniciantes, com instruções claras e ingredientes fáceis de achar." },
              { q: "Funciona para quem quer emagrecer?", a: "Este material é focado no ganho de massa (bulking). As receitas são mais calóricas, ideais para quem quer crescer." },
              { q: "Consigo ler no celular?", a: "Sim, o formato PDF é perfeitamente otimizado para leitura em qualquer smartphone, tablet ou computador." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não gostar das receitas, devolvemos 100% do seu dinheiro." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gold border-opacity-30">
                <button onClick={toggleFaq} className="w-full py-6 flex justify-between items-center text-left hover:text-gold transition-colors group">
                  <span className="font-subheading font-bold text-lg text-white group-hover:text-gold">{faq.q}</span>
                  <ChevronDown className="faq-icon text-gold transition-transform duration-300" />
                </button>
                <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <p className="pb-6 text-muted font-body leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="container mx-auto max-w-2xl fade-in-section">
          <h2 className="text-3xl md:text-4xl font-heading uppercase text-[var(--bg-dark)] mb-8">
            Pronto para mudar seu resultado?
          </h2>
          <a href="#checkout" className="inline-block border-2 border-[var(--bg-dark)] text-[var(--bg-dark)] font-subheading font-bold uppercase tracking-widest px-10 py-5 rounded-lg hover:bg-[var(--bg-dark)] hover:text-gold transition-colors">
            SIM, QUERO MINHAS RECEITAS
          </a>
        </div>
      </section>

      <footer className="bg-[var(--bg-dark)] py-8 px-6 text-center border-t border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto">
          <p className="text-sm text-muted mb-4 font-subheading font-medium">POMBAZ © {new Date().getFullYear()}. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-xs text-muted/60 mb-6 font-body">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          <div className="text-[10px] text-muted/30 uppercase tracking-widest font-subheading">
            Pagamentos processados por Kiwify
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
