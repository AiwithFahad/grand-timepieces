import { motion } from "framer-motion";
import collectionChrono from "@/assets/collection-chronograph.jpg";
import collectionDress from "@/assets/collection-dress.jpg";
import collectionDiver from "@/assets/collection-diver.jpg";
import collectionSmart from "@/assets/collection-smart.jpg";

const collections = [
  { name: "Chronographs", image: collectionChrono, description: "Precision timing instruments" },
  { name: "Dress Watches", image: collectionDress, description: "Refined elegance for every occasion" },
  { name: "Dive Watches", image: collectionDiver, description: "Engineered for the depths" },
  { name: "Smartwatches", image: collectionSmart, description: "Technology meets tradition" },
];

export const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-bronze mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Collections</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.p
                  className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-2"
                >
                  {col.description}
                </motion.p>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{col.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
