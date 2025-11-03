import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerChildren, viewportSettings } from "@/lib/motion";

const Footer = () => {
  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "El Proyecto", href: "#proyecto" },
    { name: "Historias", href: "#historias" },
    { name: "Participa", href: "#participa" },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div className="grid md:grid-cols-3 gap-8 mb-8" variants={staggerChildren(0.18)}>
          {/* Logo and Description */}
          <motion.div className="space-y-4" variants={fadeInUp(0.1)}>
            <motion.img
              src="/assets/CICLOMIN.png"
              alt="Nuestro Barrio, Nuestra Historia"
              className="h-16 w-auto"
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
          <motion.div variants={fadeInUp(0.15)}>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <motion.ul className="space-y-2" variants={staggerChildren(0.08)}>
              {navigation.map((item) => (
                <motion.li key={item.name} variants={fadeInUp(0.1)}>
                  <motion.a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp(0.2)}>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Email: daniela.bussalleu@upch.pe</p>
              <p>Teléfono: +51 902 749 147</p>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70"
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
