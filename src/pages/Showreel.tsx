import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/lib/videoData";

const Showreel = () => {
  const featured = getFeaturedProjects();
  // Use the most popular video as the showreel
  const showreelId = featured[2]?.youtubeId || featured[0]?.youtubeId;

  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <div className="film-grain" />

      {/* Back nav */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="glass rounded-full px-4 py-2 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-body text-xs tracking-[0.15em] uppercase">Voltar</span>
        </Link>
      </motion.div>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* Ambient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-primary/80 block mb-4">
            // COMPILAÇÃO
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.08em] font-black">
            <span className="text-gradient">SHOWREEL</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            Os melhores momentos das minhas edições reunidos em um só lugar.
          </p>
        </motion.div>

        {/* Main video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-5xl"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden neon-border">
            <iframe
              src={`https://www.youtube.com/embed/${showreelId}?rel=0&modestbranding=1`}
              title="Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

        {/* Featured clips below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 w-full max-w-5xl"
        >
          <h2 className="font-display text-xl tracking-[0.1em] text-foreground font-bold mb-6">
            PROJETOS <span className="text-gradient">DESTAQUE</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featured.map((vid, i) => (
              <Link key={vid.id} to={`/video/${vid.slug}`} className="group block">
                <div className="glass-card rounded-lg overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                      alt={vid.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="video-card-overlay group-hover:bg-background/60">
                      <Play className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-body text-xs font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {vid.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Showreel;
