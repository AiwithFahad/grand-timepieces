import { motion } from "framer-motion";
import craftImage from "@/assets/brand-craftsmanship.jpg";

export const BrandStory = () => {
  return (
    <section id="story" className="py-24 bg-gradient-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img src={craftImage} alt="Master watchmaker at work" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-0.5 bg-bronze mb-6" />
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-bronze mb-4">Our Heritage</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafted by<br />Masters
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Every Grand Timepiece is the culmination of centuries-old horological tradition, 
              married with cutting-edge engineering. Our master watchmakers dedicate hundreds of 
              hours to each movement, ensuring every gear, spring, and jewel meets the exacting 
              standards that define true luxury.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              From the initial sketch to the final quality inspection, every step in our process 
              reflects an unwavering commitment to perfection. This is not just watchmaking — 
              this is the art of time itself.
            </p>
            <a
              href="#collections"
              className="inline-flex items-center px-8 py-3 border border-bronze text-bronze font-sans font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-bronze hover:text-primary-foreground transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
