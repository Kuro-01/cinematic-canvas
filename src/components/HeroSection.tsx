import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "PROJETOS", href: "#portfolio" },
  { label: "SHOWREEL", href: "/showreel", isRoute: true },
  { label: "CONTATO", href: "#contato", highlight: true },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/zUwvMSWfiXo?autoplay=1&mute=1&loop=1&playlist=zUwvMSWfiXo&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transform: "scale(1.2)" }}
          allow="autoplay; encrypted-media"
          loading="lazy"
        />
        <div className="hero-overlay absolute inset-0 z-[1]" />
        <div className="scanline absolute inset-0 z-[2] pointer-events-none" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-[1] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] z-[1] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 flex items-center justify-between px-6 md:px-16 pt-8"
      >
        <Link to="/" className="font-display text-lg tracking-[0.3em] text-foreground neon-text font-bold">
          HANS
        </Link>
        <div className="flex items-center glass rounded-full px-2 py-1.5 gap-1">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-[10px] md:text-xs tracking-[0.15em] uppercase px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
                  item.highlight
                    ? "bg-primary/20 text-primary neon-text"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`font-body text-[10px] md:text-xs tracking-[0.15em] uppercase px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
                  item.highlight
                    ? "bg-primary/20 text-primary neon-text"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="font-body text-[10px] md:text-xs tracking-[0.5em] uppercase text-primary/80 block mb-4">
            // CINEMATIC VIDEO EDITOR
          </span>
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-[0.05em] font-black">
            <span className="text-gradient">HANS</span>
          </h1>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-6 max-w-md mx-auto leading-relaxed">
            Transformando gameplay em experiências cinematográficas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#portfolio" className="btn-primary-glow flex items-center gap-2">
            <Play className="w-4 h-4" />
            VER PROJETOS
          </a>
          <a href="#contato" className="btn-cinematic">
            <span>CONTATO</span>
          </a>
        </motion.div>

        {/* HUD decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.4em] uppercase text-muted-foreground/60">
            SCROLL
          </span>
          <ChevronDown className="w-4 h-4 text-primary/60 animate-float" />
        </motion.div>
      </div>

      {/* Side HUD elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 bg-primary/30 rounded-full" style={{ height: `${20 + Math.random() * 30}px` }} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-end gap-2"
      >
        <span className="font-body text-[8px] tracking-[0.3em] text-muted-foreground/40">REC</span>
        <div className="w-2 h-2 rounded-full bg-destructive/60 animate-pulse-glow" />
        <span className="font-body text-[8px] tracking-[0.3em] text-muted-foreground/30 mt-2">4K · 60FPS</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
