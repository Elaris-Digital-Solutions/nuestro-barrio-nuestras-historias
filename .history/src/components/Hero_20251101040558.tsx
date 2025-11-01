import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('quienes-somos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero-section" style={{
      backgroundImage: '/assets/Hero_1.jpg',
    }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nuestro barrio, nuestras historias
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Un proyecto creativo para descubrir La Oroya desde nuestras voces
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          "Queremos reconstruir la memoria viva de La Oroya a través de las voces, 
          los ojos y las experiencias de sus propios habitantes."
        </motion.p>
      </div>
      
      <motion.div 
        className="scroll-indicator cursor-pointer"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ChevronDown size={40} className="text-white/80 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
