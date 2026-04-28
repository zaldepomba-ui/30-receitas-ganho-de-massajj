import { motion } from "framer-motion";
import { Sunrise, Zap, Coins, Cookie, ClipboardList } from "lucide-react";

const modules = [
  { icon: Sunrise, title: "Cafés da Manhã Hipercalóricos", desc: "Comece o dia com refeições de 500+ calorias que te mantêm abastecido até o almoço. Aveia turbinada, panquecas proteicas e power bowls." },
  { icon: Zap, title: "Refeições Pós-Treino", desc: "Receitas de absorção rápida para maximizar a recuperação. Prontas em menos de 10 minutos quando você mais precisa." },
  { icon: Coins, title: "Comidas Baratas para Bulking", desc: "Refeições econômicas que entregam calorias pesadas. Ganhe massa sem estourar o orçamento." },
  { icon: Cookie, title: "Lanches & Receitas Rápidas", desc: "Barras proteicas, bolinhas energéticas e lanchinhos rápidos para manter seus macros em dia entre as refeições." },
  { icon: ClipboardList, title: "Bônus: Guia de Meal Prep", desc: "Um planejamento semanal completo para tirar as dúvidas. Prepare uma vez, coma a semana toda — consistência ficou fácil." },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            5 módulos completos. 30 receitas comprovadas. Zero enrolação.
          </p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <mod.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground leading-tight">{mod.title}</h3>
                <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
