import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-primary-foreground mb-4 flex items-center gap-2">
            Equipo <Heart size={20} className="text-primary-foreground" />
          </h3>
          <p className="leading-relaxed opacity-90">
            Proyecto liderado por la Lic. Daniela Bussalleu Salcedo (Universidad de Lima), 
            con la asesoría de Maribel Goncálves de Freitas, PhD (Pontificia Universidad 
            Católica del Perú), Raúl Loayza-Muro y Bram Leo Willems, PhD (Universidad Peruana 
            Cayetano Heredia), y la colaboración de Activos Mineros S.A.C.
          </p>
          <p className="mt-4 leading-relaxed opacity-90">
            El proyecto cuenta también con la participación de jóvenes voluntarios y 
            estudiantes locales comprometidos con la reconstrucción de la memoria colectiva 
            de La Oroya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-primary-foreground mb-4">Contacto</h3>
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:daniela.bussalleu@upch.pe" 
              className="hover:underline transition-colors"
            >
              daniela.bussalleu@upch.pe
            </a>
          </motion.div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm opacity-80">
              © 2025 Nuestro barrio, nuestras historias
            </p>
            <p className="text-sm opacity-80 mt-1">
              CICLOMIN - UPCH | PUCP
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;