import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
const logo = "/assets/logo.png";
import { fadeIn, fadeInUp, staggerChildren } from "@/lib/motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Nosotros", href: "#quienes-somos", route: "/#quienes-somos" },
    { name: "Proyecto", href: "#conoce-el-proyecto", route: "/#conoce-el-proyecto" },
    { name: "Historias", href: "#historias", route: "/historias" },
    { name: "Fotografías", href: "#exposicion", route: "/#exposicion" },
    { name: "Aliados", href: "#aliados", route: "/#aliados" },
    { name: "Equipo", href: "#equipo", route: "/#equipo" },
  ];

  const handleNavigation = (item: typeof navigation[0]) => {
    setIsMenuOpen(false);
    
    // Si estamos en la página principal y es un anchor link, usar scroll
    if (location.pathname === "/" && item.href.startsWith("#")) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si es la página de historias o necesitamos navegar
      if (item.name === "Historias") {
        navigate("/historias");
      } else {
        navigate("/");
        // Después de navegar a home, hacer scroll al elemento
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  const navItemMotion: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between h-16 sm:h-20"
          variants={fadeIn()}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer" 
            variants={fadeInUp(0.05)}
            onClick={() => navigate("/")}
          >
            <motion.img
              src={logo}
              alt="Nuestro Barrio, Nuestra Historia"
              className="h-10 sm:h-14 w-auto"
              whileHover={{ rotate: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={staggerChildren(0.1, 0.2)}
            initial="hidden"
            animate="visible"
          >
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                variants={navItemMotion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.div variants={fadeInUp(0.2)}>
              <Button variant="hero" size="lg">
                Únete
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-3 rounded-lg hover:bg-muted transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Alternar menú"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-6 space-y-2 border-t border-border bg-background/95 backdrop-blur-sm"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-6 py-4 text-foreground hover:bg-muted rounded-lg transition-colors touch-manipulation text-lg font-medium"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 * index }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                className="px-6 pt-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: 0.2 }}
              >
                <Button variant="hero" size="lg" className="w-full h-12 text-base touch-manipulation">
                  Únete
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
