import { motion } from "framer-motion";
import { ShieldCheck, Download, Infinity } from "lucide-react";

const CTASection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 text-center shadow-glow"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-bold uppercase tracking-wider mb-6">
            🔥 Oferta por Tempo Limitado
          </span>

          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-2">
            Comece a Ganhar Massa <span className="text-gradient">Hoje</span>
          </h2>

          <p className="font-body text-muted-foreground mb-8 text-lg">
            30 receitas comprovadas. Um guia simples. Resultados que você vai ver.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="font-body text-muted-foreground line-through text-2xl">R$37,90</span>
            <span className="font-display text-6xl text-gradient">R$22,80</span>
          </div>

          <a
            href="https://pay.kiwify.com.br/LOOMe8f"
            className="inline-block bg-gradient-warm text-primary-foreground font-body font-bold text-xl px-12 py-5 rounded-xl shadow-glow animate-pulse-glow hover:scale-105 transition-transform mb-8"
          >
            Quero Acesso Agora →
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-2"><Download className="w-4 h-4 text-primary" /> Download Imediato</span>
            <span className="flex items-center gap-2"><Infinity className="w-4 h-4 text-primary" /> Acesso Vitalício</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Garantia de 7 Dias</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
