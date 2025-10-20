import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

const Exposicion = () => {
  return (
    <section id="exposicion" className="section section-white">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Exposición fotográfica
      </motion.h2>
      
      <div className="section-content">
        <motion.p 
          className="text-center max-w-3xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          En esta sección se presentarán las fotografías y textos elaborados durante el proceso 
          de fotovoz, resultado del trabajo reflexivo y creativo de las/os participantes. 
          A través de estas imágenes y relatos, buscamos visibilizar las miradas, experiencias 
          y mensajes de la comunidad.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div 
              key={num}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: num * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img 
                src={`https://images.unsplash.com/photo-${1500000000000 + num * 1000000}?q=80&w=400&auto=format&fit=crop`}
                alt={`Fotografía ${num}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--azul-principal))] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.8 }}
              >
                <div className="text-white text-center">
                  <Image size={24} className="mx-auto mb-2" />
                  <p className="text-sm font-semibold">Ver historia</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exposicion;
