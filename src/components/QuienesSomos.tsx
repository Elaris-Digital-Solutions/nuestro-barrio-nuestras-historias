import { motion } from 'framer-motion';
import { Users, BookOpen, Heart, Sparkles } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="section section-white">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ¿Quiénes somos?
      </motion.h2>
      
      <div className="section-content">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-lg leading-relaxed">
              "Nuestro barrio, nuestras historias" es un proyecto interdisciplinario que combina 
              psicología comunitaria, comunicación para el desarrollo y ciencia ambiental, con el 
              propósito de documentar, reflexionar y compartir las memorias colectivas de La Oroya 
              desde la mirada de sus propios habitantes.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Este proyecto forma parte de una tesis de maestría en Psicología Comunitaria de la 
              Pontificia Universidad Católica del Perú (PUCP), en alianza con el Centro de 
              Investigación para la Rehabilitación Ambiental y Minería Responsable (CICLOMIN), 
              un programa de la Universidad Peruana Cayetano Heredia (UPCH).
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed">
              Buscamos escuchar y visibilizar las voces locales, especialmente de niños, niñas y 
              adolescentes, a través de metodologías participativas como la fotovoz, el teatro 
              comunitario, la cartografía social y los mapas del cuerpo.
            </p>
            <p className="text-lg leading-relaxed">
              Creemos que la memoria no es una suma de recuerdos individuales, sino el producto 
              de una reflexión colectiva e intergeneracional donde el arte y el diálogo se 
              convierten en herramientas para desarrollar la historia viva de La Oroya.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Users, label: 'Comunidad', color: 'var(--azul-principal)' },
            { icon: BookOpen, label: 'Investigación', color: 'var(--azul-principal)' },
            { icon: Heart, label: 'Participación', color: 'var(--azul-principal)' },
            { icon: Sparkles, label: 'Creatividad', color: 'var(--azul-principal)' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center p-6 bg-[hsl(var(--muted))] rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <item.icon size={40} style={{ color: `hsl(${item.color})` }} className="mb-3" />
              <span className="text-sm font-semibold text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
