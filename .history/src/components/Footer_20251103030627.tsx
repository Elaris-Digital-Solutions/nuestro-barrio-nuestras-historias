import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";

const Footer = () => {
  const navigation = [
    { name: "Nosotros", href: "#quienes-somos" },
    { name: "Proyecto", href: "#conoce-el-proyecto" },
    { name: "Historias", href: "#historias" },
    { name: "Fotografías", href: "#exposicion" },
    { name: "Aliados", href: "#aliados" },
    { name: "Equipo", href: "#equipo" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/daniela.bussalleu?igsh=cXptdDJ5OGZoZmhs", label: "Instagram académico" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/daniela-bussalleu", label: "LinkedIn" },
    { icon: Phone, href: "tel:+51902749147", label: "Teléfono" },
    { icon: Mail, href: "mailto:daniela.bussalleu@upch.pe", label: "Email" },
  ];

  return (
    <motion.footer
      className="bg-brown text-primary-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8" variants={staggerChildren(0.18)}>
          {/* Logo and Description */}
          <motion.div className="space-y-4 text-center sm:text-left" variants={fadeInUp(0.1)}>
            <motion.img
              src="/assets/CICLOMIN.png"
              alt="Nuestro Barrio, Nuestra Historia"
              className="h-16 sm:h-20 lg:h-24 w-auto mx-auto sm:mx-0"
              whileHover={{ rotate: 2 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
            <motion.p
              className="text-primary-foreground/80 text-sm leading-relaxed"
              variants={fadeInUp(0.2)}
            >
              Rescatando, preservando y compartiendo las historias que hacen única a nuestra comunidad.
            </motion.p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp(0.15)} className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <motion.ul className="space-y-2" variants={staggerChildren(0.08)}>
              {navigation.map((item) => (
                <motion.li key={item.name} variants={fadeInUp(0.1)}>
                  <motion.a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm touch-manipulation inline-block py-1"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp(0.2)} className="text-center sm:text-left lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a
                href="mailto:daniela.bussalleu@upch.pe"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors justify-center sm:justify-start touch-manipulation py-1"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-all sm:break-normal">daniela.bussalleu@upch.pe</span>
              </a>
              <a
                href="tel:+51902749147"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors justify-center sm:justify-start touch-manipulation py-1"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+51 902 749 147</span>
              </a>
              <a
                href="https://www.instagram.com/daniela.bussalleu?igsh=cXptdDJ5OGZoZmhs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors justify-center sm:justify-start touch-manipulation py-1"
              >
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <span>@daniela.bussalleu</span>
              </a>
              <div className="flex gap-3 sm:gap-4 mt-4 justify-center sm:justify-start">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center touch-manipulation"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 sm:pt-8 border-t border-primary-foreground/20 text-center text-xs sm:text-sm text-primary-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <p>&copy; {new Date().getFullYear()} Nuestro Barrio, Nuestra Historia. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
