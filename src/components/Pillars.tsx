import { Home, Mountain, MessageCircle, TreePine, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerChildren, viewportSettings } from "@/lib/motion";

const pillars = [
  {
    icon: Home,
    title: "Comunidad",
    description: "Fortaleciendo los lazos entre vecinos y creando espacios de encuentro.",
    color: "text-terracotta",
  },
  {
    icon: Mountain,
    title: "Entorno",
    description: "Valorando y cuidando el espacio físico que compartimos día a día.",
    color: "text-beige",
  },
  {
    icon: MessageCircle,
    title: "Diálogo",
    description: "Fomentando la conversación abierta y el intercambio de experiencias.",
    color: "text-sky",
  },
  {
    icon: TreePine,
    title: "Naturaleza",
    description: "Respetando y preservando los espacios verdes de nuestro barrio.",
    color: "text-sage",
  },
  {
    icon: BookOpen,
    title: "Cultura",
    description: "Documentando y celebrando nuestras tradiciones y conocimientos.",
    color: "text-primary",
  },
];

const Pillars = () => {
  return (
    <motion.section
      className="py-20 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={staggerChildren(0.15)}>
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" variants={fadeInUp(0.1)}>
            Nuestros <span className="text-primary">Pilares</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeInUp(0.2)}>
            Los valores fundamentales que guían nuestro trabajo y dan forma a nuestra comunidad
          </motion.p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" variants={staggerChildren(0.1)}>
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} variants={scaleIn(index * 0.05)}>
              <Card className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2">
                <CardContent className="p-6 space-y-4 text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center"
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                  </motion.div>
                  <motion.h3 className="text-xl font-semibold text-foreground" variants={fadeInUp(0.1)}>
                    {pillar.title}
                  </motion.h3>
                  <motion.p className="text-muted-foreground text-sm leading-relaxed" variants={fadeInUp(0.15)}>
                    {pillar.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pillars;
