import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Hero1Image from '../assets/Hero_1.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('quienes-somos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero-section" style={{
      backgroundImage: `url(${Hero1Image})`
    }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-titulo font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nuestro barrio,<br />
          <span className="text-yellow-200">nuestras historias</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl mb-8 font-cuerpo font-light max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Un proyecto creativo para descubrir La Oroya desde nuestras voces
        </motion.p>
        
        <motion.blockquote 
          className="text-base md:text-lg lg:text-xl max-w-5xl mx-auto italic font-cuerpo leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-2xl text-yellow-200">"</span>
          Queremos reconstruir la memoria viva de La Oroya a través de las voces, 
          los ojos y las experiencias de sus propios habitantes.
          <span className="text-2xl text-yellow-200">"</span>
        </motion.blockquote>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm font-cuerpo">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-yellow-200 font-semibold">📸</span> Fotovoz
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-yellow-200 font-semibold">🗺</span> Cartografía social
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-yellow-200 font-semibold">🎭</span> Teatro comunitario
            </div>
          </div>
        </motion.div>
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
