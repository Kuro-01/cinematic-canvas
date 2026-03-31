import { motion } from "framer-motion";

const navItems = [
  { label: "VIDEOS LONGOS", href: "#longformat" },
  { label: "VIDEOS CURTOS", href: "#shortformat" },
  { label: "THUMBNAILS", href: "#thumbnails" },
  { label: "CONTATO", href: "#contato", highlight: true },
];

const featuredThumbnails = [
  { id: "zUwvMSWfiXo", title: "Nova Shyvana", views: "37K views", likes: "3.1K likes" },
  { id: "EhugG-LIqX4", title: "Gnar Fila de Mestres", views: "25K views", likes: "2.1K likes" },
  { id: "FM93OmrhEFI", title: "Joguei Duo com a Minha Ex", views: "80K views", likes: "9.8K likes" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 flex items-center justify-center px-6 md:px-16 pt-8"
      >
        <div className="flex items-center border border-border rounded-full px-2 py-1.5 w-full max-w-4xl justify-between">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-body text-[10px] md:text-xs tracking-[0.2em] uppercase px-4 md:px-8 py-2 transition-colors duration-300 ${
                item.highlight
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-6 md:px-16 pt-16 md:pt-24 pb-16">
        {/* Left side - Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-secondary"
          >
            // EDITOR DE VÍDEO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[0.02em] text-foreground mt-6"
          >
            HANS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 border-l-2 border-secondary pl-4"
          >
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
              Edição de vídeo e thumbnails.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#portfólio">
              <button className="px-8 py-3 bg-secondary text-secondary-foreground font-body text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-secondary/90 transition-colors">
                VER PORTFÓLIO
              </button>
            </a>
            <a href="#contato">
              <button className="btn-cinematic">
                <span>ENTRE EM CONTATO</span>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right side - Featured project thumbnails */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          {/* Main featured thumbnail */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute top-3 left-3 z-10 bg-secondary px-3 py-1 rounded-sm">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-secondary-foreground font-semibold">
                PROJETO EM DESTAQUE
              </span>
            </div>
            <img
              src={`https://img.youtube.com/vi/${featuredThumbnails[0].id}/maxresdefault.jpg`}
              alt={featuredThumbnails[0].title}
              className="w-full aspect-video object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <div className="flex items-center gap-4 text-muted-foreground font-body text-xs">
                <span className="flex items-center gap-1">👁 {featuredThumbnails[0].views}</span>
                <span className="flex items-center gap-1">👍 {featuredThumbnails[0].likes}</span>
              </div>
            </div>
          </div>

          {/* Stacked smaller thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute -bottom-6 -right-4 md:right-0 flex gap-2"
          >
            {featuredThumbnails.slice(1).map((thumb, i) => (
              <div
                key={thumb.id}
                className="w-32 md:w-40 rounded-md overflow-hidden border-2 border-background shadow-xl"
                style={{ transform: `rotate(${i === 0 ? -3 : 2}deg)` }}
              >
                <img
                  src={`https://img.youtube.com/vi/${thumb.id}/mqdefault.jpg`}
                  alt={thumb.title}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="bg-card p-1.5">
                  <span className="font-body text-[8px] text-muted-foreground">
                    {thumb.views}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
