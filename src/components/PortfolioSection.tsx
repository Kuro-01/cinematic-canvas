import { motion } from "framer-motion";
import { Play, Eye, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { getLongFormatVideos, getShortFormatVideos } from "@/lib/videoData";

const VideoCard = ({
  video,
  index,
  aspect,
}: {
  video: { slug: string; youtubeId: string; title: string; views?: string; likes?: string; tags: string[] };
  index: number;
  aspect: "landscape" | "portrait";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
  >
    <Link to={`/video/${video.slug}`} className="group block">
      <div className="glass-card rounded-lg overflow-hidden">
        <div className={`relative overflow-hidden ${aspect === "landscape" ? "aspect-video" : "aspect-[9/16]"}`}>
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/${aspect === "landscape" ? "maxresdefault" : "hqdefault"}.jpg`}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="video-card-overlay group-hover:bg-background/60">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
              <div className="w-12 h-12 rounded-full neon-border flex items-center justify-center bg-background/40">
                <Play className="w-5 h-5 text-primary fill-primary" />
              </div>
            </div>
          </div>
          {/* Scan line effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-body text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {video.title}
          </h3>
          {video.views && (
            <div className="flex items-center gap-3 mt-2 text-muted-foreground">
              <span className="flex items-center gap-1 text-[9px] tracking-wider">
                <Eye className="w-3 h-3" /> {video.views}
              </span>
              {video.likes && (
                <span className="flex items-center gap-1 text-[9px] tracking-wider">
                  <ThumbsUp className="w-3 h-3" /> {video.likes}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  </motion.div>
);

const PortfolioSection = () => {
  const longVideos = getLongFormatVideos();
  const shortVideos = getShortFormatVideos();

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-primary/60 to-transparent" />
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/80">
            Portfólio Completo
          </span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-[0.08em] text-foreground font-bold">
          ALL <span className="text-gradient">PROJECTS</span>
        </h2>
      </motion.div>

      {/* Long Format */}
      <div className="mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-6 bg-primary rounded-full" />
          <h3 className="font-display text-lg md:text-xl tracking-[0.15em] text-foreground font-semibold">
            LONG FORMAT
          </h3>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {longVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} aspect="landscape" />
          ))}
        </div>
      </div>

      {/* Short Format */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-6 bg-secondary rounded-full" />
          <h3 className="font-display text-lg md:text-xl tracking-[0.15em] text-foreground font-semibold">
            SHORT FORMAT
          </h3>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {shortVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} aspect="portrait" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
