import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <span className="font-display text-xl tracking-[0.2em] text-foreground">
          HANS
        </span>
        <div className="flex items-center gap-8">
          {["Instagram", "Vimeo", "YouTube"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              {social}
            </a>
          ))}
        </div>
        <span className="font-body text-[10px] tracking-[0.2em] text-muted-foreground">
          © 2026 — Todos os direitos reservados
        </span>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
