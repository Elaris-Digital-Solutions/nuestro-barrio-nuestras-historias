import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "El Proyecto", href: "#proyecto" },
    { name: "Historias", href: "#historias" },
    { name: "Participa", href: "#participa" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contacto@nuestrobarrio.org", label: "Email" },
  ];

  return (
    <footer className="bg-brown text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="Nuestro Barrio, Nuestras Historias" className="h-16 w-auto" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Rescatando, preservando y compartiendo las historias que hacen única a nuestra comunidad.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Email: contacto@nuestrobarrio.org</p>
              <p>Teléfono: +123 456 7890</p>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Nuestro Barrio, Nuestras Historias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
