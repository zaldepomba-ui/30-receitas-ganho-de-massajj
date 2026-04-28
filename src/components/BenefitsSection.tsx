import { motion } from "framer-motion";
import { Clock, Dumbbell, ChefHat, CalendarCheck, Target } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Rápido & Fácil", desc: "Todas as receitas ficam prontas em 15 minutos ou menos. Perfeito pra sua rotina corrida." },
  { icon: Dumbbell, title: "Feito para Ganhar Massa", desc: "Cada refeição é otimizada em macros para crescimento e recuperação muscular." },
  { icon: ChefHat, title: "Zero Habilidade na Cozinha", desc: "Ingredientes simples, passo a passo claro. Se você sabe ferver água, consegue fazer." },
  { icon: CalendarCheck, title: "Encaixa em Qualquer Rotina", desc: "Estudantes, trabalhadores, marombeiros — essas receitas funcionam pra todo mundo." },
  { icon: Target, title: "Bata Seus Macros", desc: "Alcance suas metas diárias de calorias e proteína sem precisar ficar contando obsessivamente." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            Por Que Funciona
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">
            Sem dietas complicadas. Sem suplementos caros. Apenas comida de verdade que constrói músculo de verdade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors shadow-card group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors bg-primary-foreground">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
