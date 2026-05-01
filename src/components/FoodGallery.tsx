import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";
const meals = [
  { src: "/lovable-uploads/e218d8b3-6344-4e47-900c-a477726e1b40.png", label: "macarrão com atum TURBINADO.", cal: "Calorias: 885 kcal  - Proteínas: 48 g\n\n" },
  { src: "/lovable-uploads/52587f27-8369-43bb-a64a-caa335b4b510.png", label: "bolo de caneca prático e proteico.", cal: "Calorias: 1.138 kcal  -   Proteínas: 32 g" },
  { src: "/lovable-uploads/9a7843cc-993c-456f-bfaf-c14c4af0d4d4.png", label: "Bowl base doce calórico e muito saudável!", cal: "Calorias: ~550 kcal - Proteínas: 20g" },
];

const FoodGallery = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl md:text-5xl text-foreground mb-12"
        >
          Uma Amostra do Que Tem <span className="text-gradient">Dentro</span>
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {meals.map((meal, i) => (
            <motion.div
              key={meal.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl overflow-hidden bg-card border border-border shadow-card group"
            >
              <div className="aspect-square overflow-hidden">
                <OptimizedImage
                  src={meal.src}
                  alt={meal.label}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl text-foreground">{meal.label}</h3>
                <p className="font-body text-sm text-primary font-semibold">{meal.cal}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGallery;
