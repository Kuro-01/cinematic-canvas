import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/paulo.aoj/" },
  { label: "X", href: "https://x.com/hannslol1" },
  { label: "YouTube", href: "https://www.youtube.com/@iam.hans9" },
];

const FooterSection = () => {
  return (
    <footer className="relative px-6 md:px-12 lg:px-20 py-12 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <Link to="/" className="font-display text-lg tracking-[0.3em] text-foreground neon-text font-bold">
          HANS
        </Link>
        <div className="flex items-center gap-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
            >
              {social.label}
            </a>
          ))}
        </div>
        <span className="font-body text-[10px] tracking-[0.2em] text-muted-foreground/50">
          © 2026 — Todos os direitos reservados
        </span>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
