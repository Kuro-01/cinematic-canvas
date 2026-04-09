import { motion } from "framer-motion";
import { Play, Eye, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/lib/videoData";

const FeaturedSection = () => {
  const featured = getFeaturedProjects();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/80">
            Destaques
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-[0.08em] text-foreground font-bold">
          FEATURED <span className="text-gradient">PROJECTS</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <Link to={`/video/${video.slug}`} className="group block">
              <div className="glass-card rounded-lg overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="video-card-overlay group-hover:bg-background/60">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
                      <div className="w-14 h-14 rounded-full neon-border flex items-center justify-center bg-background/40">
                        <Play className="w-6 h-6 text-primary fill-primary" />
                      </div>
                    </div>
                  </div>
                  {/* HUD corners */}
                  <div className="hud-corner hud-corner-tl top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="hud-corner hud-corner-tr top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="hud-corner hud-corner-bl bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="hud-corner hud-corner-br bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-body text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-3 text-muted-foreground">
                    {video.views && (
                      <span className="flex items-center gap-1 text-[10px] tracking-wider">
                        <Eye className="w-3 h-3" /> {video.views}
                      </span>
                    )}
                    {video.likes && (
                      <span className="flex items-center gap-1 text-[10px] tracking-wider">
                        <ThumbsUp className="w-3 h-3" /> {video.likes}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {video.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-sm bg-primary/10 text-primary/70 border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
