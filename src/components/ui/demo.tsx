"use client";

import { Carousel } from "@/components/ui/carousel";

const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explorar componente",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Urban Dreams",
    button: "Explorar componente",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Neon Nights",
    button: "Explorar componente",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Desert Whispers",
    button: "Explorar componente",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export function CarouselDemo() {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
