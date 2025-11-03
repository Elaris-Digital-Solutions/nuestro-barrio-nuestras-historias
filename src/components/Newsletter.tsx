import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsletterIcon from "@/assets/newsletter-icon.jpg";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerChildren, viewportSettings } from "@/lib/motion";

const Newsletter = () => {
  return (
    <motion.section
      className="py-20 bg-primary/5"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto" variants={staggerChildren(0.18)}>
          {/* Content */}
          <motion.div className="space-y-6" variants={staggerChildren(0.12)}>
            <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground" variants={fadeInUp(0.1)}>
              Mantente <span className="text-primary">Conectado</span>
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={fadeInUp(0.2)}>
              Suscríbete a nuestro boletín y recibe las últimas historias, eventos y noticias de nuestra comunidad directamente en tu correo.
            </motion.p>

            <motion.form className="space-y-4" variants={fadeInUp(0.25)}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="Nombre" className="h-12" />
                <Input type="text" placeholder="Apellidos" className="h-12" />
              </div>
              <Input type="email" placeholder="Correo Electrónico" className="h-12" />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Suscribirme
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Image */}
          <motion.div className="flex justify-center" variants={scaleIn(0.2)}>
            <motion.img
              src={newsletterIcon}
              alt="Únete a nuestra comunidad"
              className="w-64 h-64 object-contain opacity-80"
              animate={{ rotate: [0, -1.5, 1.5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
