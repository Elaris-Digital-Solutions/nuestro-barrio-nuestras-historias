const collaborators = [
  { name: "Biblioteca Municipal", logo: "📚" },
  { name: "Centro Comunitario", logo: "🏛️" },
  { name: "Escuela del Barrio", logo: "🎓" },
  { name: "Asociación de Vecinos", logo: "🤝" },
  { name: "Colectivo Cultural", logo: "🎨" },
  { name: "Huerta Comunitaria", logo: "🌱" },
];

const Collaborators = () => {
  return (
    <section id="participa" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Vecinos que <span className="text-primary">Suman</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizaciones y colectivos que apoyan y colaboran con nuestro proyecto
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {collaborators.map((collaborator, index) => (
            <div
              key={collaborator.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {collaborator.logo}
              </div>
              <p className="text-sm text-center text-muted-foreground font-medium">
                {collaborator.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
