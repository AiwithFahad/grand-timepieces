import { Link } from "react-router-dom";

const footerLinks = {
  "Quick Links": ["Collections", "Best Sellers", "New Arrivals", "Our Story"],
  "Customer Service": ["Shipping Info", "Returns", "FAQ", "Contact Us"],
};

export const Footer = () => {
  return (
    <footer className="py-16 bg-navy border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-xl font-bold tracking-wide text-foreground mb-4 block">
              GRAND <span className="text-gradient-bronze">TIMEPIECES</span>
            </Link>
            <p className="font-sans text-sm text-muted-foreground max-w-sm leading-relaxed">
              Exceptional timepieces crafted with unwavering dedication to precision, 
              elegance, and the timeless art of horology.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans font-semibold text-sm text-foreground mb-4 tracking-wide uppercase">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-sans text-sm text-muted-foreground hover:text-bronze transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/30 pt-8 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Grand Timepieces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
