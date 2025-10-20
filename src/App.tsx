import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Proyecto from "./components/Proyecto";
import Exposicion from "./components/Exposicion";
import Blog from "./components/Blog";
import Recursos from "./components/Recursos";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <QuienesSomos />
        <Proyecto />
        <Exposicion />
        <Blog />
        <Recursos />
        <Footer />
      </main>
    </div>
  );
};

export default App;
