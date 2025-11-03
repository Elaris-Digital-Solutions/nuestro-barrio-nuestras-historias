import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerChildren, viewportSettings } from "@/lib/motion";

const collaborators = [
  { name: "Biblioteca Municipal", logo: "📚" },
  { name: "Centro Comunitario", logo: "🏛️" },
  { name: "Escuela del Barrio", logo: "🎓" },
  { name: "Asociación de Vecinos", logo: "🤝" },
  { name: "Colectivo Cultural", logo: "🎨" },
  { name: "Huerta Comunitaria", logo: "🌱" },
];

const Collaborators = () => {
  return (
    <motion.section
      id="participa"
      className="py-20 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={staggerChildren(0.15)}>
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4" variants={fadeInUp(0.1)}>
            Vecinos que <span className="text-primary">Suman</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeInUp(0.2)}>
            Organizaciones y colectivos que apoyan y colaboran con nuestro proyecto
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center" variants={staggerChildren(0.1)}>
          {collaborators.map((collaborator) => (
            <motion.div
              key={collaborator.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-muted/50 transition-all duration-300 group"
              variants={scaleIn()}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className="text-6xl mb-3"
                whileHover={{ rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.6 }}
              >
                {collaborator.logo}
              </motion.div>
              <p className="text-sm text-center text-muted-foreground font-medium">
                {collaborator.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Collaborators;
