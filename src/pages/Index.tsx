import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Purpose from "@/components/Purpose";
import Pillars from "@/components/Pillars";
import Stories from "@/components/Stories";
import Exposicion from "@/components/Exposicion";
import Collaborators from "@/components/Collaborators";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Index = () => {
  return (
    <motion.div className="min-h-screen" initial="hidden" animate="visible" variants={fadeIn()}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <motion.main variants={fadeIn()}>
        <Hero />
        <Purpose />
        <Pillars />
  <Stories />
  <Exposicion />
        <Collaborators />
        <Newsletter />
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default Index;
