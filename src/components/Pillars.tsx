import { Home, Mountain, MessageCircle, TreePine, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Home,
    title: "Comunidad",
    description: "Fortaleciendo los lazos entre vecinos y creando espacios de encuentro.",
    color: "text-terracotta",
  },
  {
    icon: Mountain,
    title: "Entorno",
    description: "Valorando y cuidando el espacio físico que compartimos día a día.",
    color: "text-beige",
  },
  {
    icon: MessageCircle,
    title: "Diálogo",
    description: "Fomentando la conversación abierta y el intercambio de experiencias.",
    color: "text-sky",
  },
  {
    icon: TreePine,
    title: "Naturaleza",
    description: "Respetando y preservando los espacios verdes de nuestro barrio.",
    color: "text-sage",
  },
  {
    icon: BookOpen,
    title: "Cultura",
    description: "Documentando y celebrando nuestras tradiciones y conocimientos.",
    color: "text-primary",
  },
];

const Pillars = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Pilares</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los valores fundamentales que guían nuestro trabajo y dan forma a nuestra comunidad
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4 text-center">
                <div className={`w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
