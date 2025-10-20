import { motion } from 'framer-motion';
import { Download, BookOpen, FileText, Video } from 'lucide-react';

const resourceTypes = [
  { icon: BookOpen, title: 'Guías metodológicas', color: 'var(--azul-principal)' },
  { icon: FileText, title: 'Plantillas y formatos', color: 'var(--azul-principal)' },
  { icon: Video, title: 'Material audiovisual', color: 'var(--azul-principal)' },
  { icon: Download, title: 'Documentos descargables', color: 'var(--azul-principal)' }
];

const Recursos = () => {
  return (
    <section id="recursos" className="section section-white">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Recursos libres
      </motion.h2>
      
      <div className="section-content">
        <motion.p 
          className="text-center max-w-3xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aquí compartiremos materiales abiertos para que docentes, investigadores y comunidades 
          puedan replicar o inspirarse en nuestras experiencias.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceTypes.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="p-6 bg-[hsl(var(--muted))] rounded-xl text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <resource.icon 
                  size={48} 
                  style={{ color: `hsl(${resource.color})` }}
                  className="mx-auto mb-4"
                />
              </motion.div>
              <h3 className="font-bold text-lg">{resource.title}</h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="p-12 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg text-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Download size={56} className="mx-auto mb-4" />
          </motion.div>
          <p className="text-2xl font-bold mb-2">Recursos disponibles próximamente</p>
          <p className="opacity-90">Todos los materiales serán de acceso libre y gratuito</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Recursos;
