import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold tracking-wide text-foreground">
          GRAND <span className="text-gradient-bronze">TIMEPIECES</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
          <a href="#collections" className="text-muted-foreground hover:text-foreground transition-colors">Collections</a>
          <a href="#best-sellers" className="text-muted-foreground hover:text-foreground transition-colors">Best Sellers</a>
          <a href="#story" className="text-muted-foreground hover:text-foreground transition-colors">Our Story</a>
          <a href="#new-arrivals" className="text-muted-foreground hover:text-foreground transition-colors">New Arrivals</a>
        </nav>

        <div className="flex items-center gap-3">
          <CartDrawer />
          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4 font-sans text-sm">
              <a href="#collections" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Collections</a>
              <a href="#best-sellers" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Best Sellers</a>
              <a href="#story" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Our Story</a>
              <a href="#new-arrivals" onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">New Arrivals</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
