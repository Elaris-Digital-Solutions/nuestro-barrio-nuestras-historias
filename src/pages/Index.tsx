import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Purpose from "@/components/Purpose";
import Pillars from "@/components/Pillars";
import Stories from "@/components/Stories";
import Collaborators from "@/components/Collaborators";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Purpose />
        <Pillars />
        <Stories />
        <Collaborators />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
