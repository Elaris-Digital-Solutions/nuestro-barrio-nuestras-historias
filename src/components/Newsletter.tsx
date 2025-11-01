import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsletterIcon from "@/assets/newsletter-icon.jpg";

const Newsletter = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Mantente <span className="text-primary">Conectado</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Suscríbete a nuestro boletín y recibe las últimas historias, eventos y noticias de nuestra comunidad directamente en tu correo.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Nombre"
                  className="h-12"
                />
                <Input
                  type="text"
                  placeholder="Apellidos"
                  className="h-12"
                />
              </div>
              <Input
                type="email"
                placeholder="Correo Electrónico"
                className="h-12"
              />
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Suscribirme
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={newsletterIcon}
              alt="Únete a nuestra comunidad"
              className="w-64 h-64 object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
