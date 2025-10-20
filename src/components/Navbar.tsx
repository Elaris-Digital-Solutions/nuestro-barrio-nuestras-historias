/*
  Componente Navbar Refactorizado (v3):
  - Color de Fondo: La barra de navegación ahora transiciona al nuevo azul eléctrico (`#2563eb`) al hacer scroll.
  - Indicador de Sección Activa: Se mantiene el indicador de color blanco para un contraste óptimo.
  - Título: Se ha actualizado el título a "CICLOMIN" para reflejar la nueva identidad de marca.
*/
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  
  const { scrollY } = useScroll();
  // Updated to use the new electric blue color #2563eb (37, 99, 235)
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(37, 99, 235, 0)", "rgba(37, 99, 235, 0.9)"]);
  const navBackdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'quienes-somos', 'proyecto', 'exposicion', 'blog', 'recursos'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: '¿Quiénes somos?' },
    { id: 'proyecto', label: 'Conoce el proyecto' },
    { id: 'exposicion', label: 'Exposición fotográfica' },
    { id: 'blog', label: 'Blog' },
    { id: 'recursos', label: 'Recursos libres' }
  ];

  return (
    <motion.nav 
      style={{ 
        backgroundColor: navBackground,
        backdropFilter: navBackdropFilter 
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="text-xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('inicio')}
            whileHover={{ scale: 1.02 }}
          >
            CICLOMIN
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(item => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 text-sm font-medium text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    layoutId="active-underline"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
