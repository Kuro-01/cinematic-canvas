import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cinematic editing workspace"
          width={1920}
          height={1080}
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="cinematic-overlay absolute inset-0" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8"
      >
        <span className="font-display text-2xl tracking-[0.2em] text-foreground">
          REEL
        </span>
        <div className="hidden md:flex items-center gap-10">
          {["Portfólio", "Sobre", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center -mt-20">
        <div className="text-center px-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mb-8 h-px w-20 bg-muted-foreground/50 origin-center"
          />
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.85] tracking-[0.05em] text-foreground"
          >
            CADA FRAME
            <br />
            <span className="text-gradient">CONTA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 font-body text-sm md:text-base tracking-[0.15em] text-muted-foreground max-w-md mx-auto"
          >
            Edição cinematográfica que transforma visão em impacto
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-12"
          >
            <a href="#portfólio">
              <button className="btn-cinematic">
                <span>Ver Trabalhos</span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
