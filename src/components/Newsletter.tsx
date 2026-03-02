import { motion } from "framer-motion";
import { Truck, Headphones, ShieldCheck, RotateCcw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const features = [
  { icon: Truck, label: "Free Shipping", desc: "On orders over $500" },
  { icon: Headphones, label: "24/7 Support", desc: "Expert assistance" },
  { icon: ShieldCheck, label: "Secure Checkout", desc: "SSL encrypted" },
  { icon: RotateCcw, label: "Easy Returns", desc: "30-day guarantee" },
];

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!", { description: "You'll receive our latest updates." });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-bronze mb-3">Stay Connected</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Join the Circle</h2>
          <p className="font-sans text-muted-foreground max-w-md mx-auto">
            Be the first to discover new collections, exclusive releases, and the stories behind our timepieces.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-20"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-3 bg-muted border border-border rounded-sm font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-bronze focus:border-bronze transition-all"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-sapphire text-foreground font-sans font-medium text-sm tracking-wider uppercase rounded-sm hover:bg-sapphire/90 transition-colors"
          >
            Subscribe
          </button>
        </motion.form>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-lg bg-card/50 border border-border/50"
            >
              <f.icon className="h-6 w-6 mx-auto mb-3 text-rose-gold" />
              <h4 className="font-sans font-semibold text-foreground text-sm mb-1">{f.label}</h4>
              <p className="font-sans text-xs text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
