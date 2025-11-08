import { motion } from "framer-motion";
import ImageCarousel from "@/components/ImageCarousel";
import { fadeIn, fadeInUp, scaleIn, staggerChildren, viewportSettings } from "@/lib/motion";

const slides = [
  {
    image: "/assets/Nosotros1.png",
    caption: "Nos reunimos para imaginar juntas el barrio que soñamos",
  },
  {
    image: "/assets/Nosotros2.jpg",
    caption: "Historias y memorias que siguen latiendo en La Oroya",
  },
];

const QuienesSomosSection = () => {
  return (
    <motion.section
      id="quienes-somos"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <motion.div className="grid md:grid-cols-2 gap-12 md:items-stretch" variants={staggerChildren(0.18)}>
          {/* Carrusel */}
          <motion.div className="order-2 md:order-1 h-full" variants={scaleIn(0.1)}>
            <ImageCarousel
              slides={slides}
              className="w-full h-full min-h-[22rem] md:min-h-0 rounded-3xl overflow-hidden shadow-[var(--shadow-soft)]"
               showCaption={false}
            />
          </motion.div>

          {/* Contenido */}
          <motion.div className="order-1 md:order-2 space-y-6" variants={staggerChildren(0.12)}>
            <motion.h2 className="text-4xl sm:text-5xl font-bold text-foreground" variants={fadeInUp(0.15)}>
              ¿Quiénes <span className="text-primary">Somos?</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-justify"
              variants={fadeInUp(0.2)}
            >
              <>
                <strong><em>“Nuestro Barrio, Nuestra Historia”</em></strong> es un proyecto interdisciplinario que desarrolla <strong>soluciones metodológicas creativas y comunitarias</strong> para aportar a un <strong><em>urban planning</em></strong> <strong>sostenible</strong> en ciudades afectadas por <strong>contaminación ambiental</strong>. Creemos que los <strong>niños, niñas y adolescentes (NNA)</strong> poseen una <strong>mirada única del territorio</strong>, por lo que <strong>su voz es el eje y motor</strong> de nuestros procesos.
              </>
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-justify"
              variants={fadeInUp(0.3)}
            >
              Trabajamos desde un enfoque de <strong>memoria</strong>, <strong>ciudadanía ambiental</strong> y <strong>participación intergeneracional</strong>. Aunque los NNA son protagonistas, la presencia de <strong>familias</strong> y <strong>personas adultas de la comunidad</strong> complementa y fortalece la <strong>construcción colectiva de significados</strong>, ampliando la comprensión del <strong>entorno urbano</strong>.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-justify"
              variants={fadeInUp(0.4)}
            >
              Nuestro propósito es generar <strong>espacios</strong> donde la comunidad pueda <strong>narrar su historia</strong>, <strong>reconocer sus vínculos con el territorio</strong> y <strong>proponer caminos</strong> para un <strong>futuro más habitable</strong>. Buscamos que estas <strong>memorias</strong> dialoguen con <strong>instituciones y actores locales</strong>, contribuyendo a decisiones que promuevan <strong>ciudades más saludables, funcionales y humanas</strong>.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuienesSomosSection;
