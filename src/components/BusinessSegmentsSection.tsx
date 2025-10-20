/*
  Componente BusinessSegmentsSection Refactorizado:
  - UI/UX y Animación: Se ha estandarizado el sistema de animación para promover la cohesión y consistencia en toda la sección, y se han mejorado las micro-interacciones.
  - Consistencia de Animación: Se reemplazó la implementación de `motion.div` en las tarjetas por el componente reutilizable `Reveal`. Esto asegura que todos los elementos de la sección (títulos y tarjetas) compartan la misma lógica de animación de entrada, creando una experiencia más unificada.
  - Micro-interacciones Mejoradas: Se mantuvo el sutil efecto de elevación (`whileHover`) en las tarjetas para un feedback táctil. Adicionalmente, se añadió una animación de escala al botón principal de la tarjeta, proporcionando una respuesta visual más clara y satisfactoria a la interacción del usuario.
*/
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Factory } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const BusinessSegmentsSection = () => {
  const segments = [
    {
      id: "comercial",
      title: "Comercial",
      description: "Productos de sal premium para el consumidor final, con presentaciones innovadoras y calidad excepcional.",
      icon: Package,
      image: "/assets/retail-products.jpg",
      cta: "Ver productos comerciales",
    },
    {
      id: "industrial",
      title: "Industrial",
      description: "Soluciones industriales de sal para procesos manufactureros, con especificaciones técnicas precisas.",
      icon: Factory,
      image: "/assets/industrial-facility.jpg",
      cta: "Ver soluciones industriales",
    }
  ];

  return (
    <section id="segmentos" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Segmentos de Negocio
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Dos líneas de negocio especializadas para atender diferentes mercados
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <Reveal key={segment.id} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-br from-white to-gray-50">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        loading="lazy"
                        decoding="async"
                        src={segment.image} 
                        alt={segment.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent group-hover:from-primary/30 group-hover:via-primary/20 transition-all duration-500" />
                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 right-6">
                        <div className="w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500" />
                      </div>
                    </div>
                    
                    <CardContent className="p-8 flex flex-col">
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {segment.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg flex-grow">
                        {segment.description}
                      </p>
                      
                      <motion.div whileHover={{ scale: 1.03 }} className="transition-transform">
                        <Button 
                          variant="outline" 
                          className="group/btn w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <span className="flex items-center justify-center gap-2">
                            {segment.cta}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Reveal delay={0.4} width="100%">
            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cada segmento cuenta con procesos de producción especializados y control de calidad 
                adaptado a las necesidades específicas del mercado objetivo.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BusinessSegmentsSection;