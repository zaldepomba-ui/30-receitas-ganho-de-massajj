import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Lucas M.", role: "Estudante universitário & iniciante na academia", text: "Ganhei 3kg em 2 meses só seguindo essas receitas!!! Nunca imaginei que comer para ganhar massa pudesse ser tão fácil e barato mano", rating: 5 },
  { name: "Sarah T.", role: "Profissional ocupada", text: "um guia de receitas que não exige diploma de chef. Faço o meal prep no domingo e fico tranquila a semana toda, Mudou meu jogo", rating: 5 },
  { name: "marco A.", role: "Praticante intermediário", text: "Estava travado no mesmo peso fazia meses. Essas receitas me ajudaram a quebrar o platô kkkk, agr to batendo meus macros todos os dias", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            Resultados Reais
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Pessoas como você já estão vendo mudanças.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card border border-border rounded-xl p-6 shadow-card"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
