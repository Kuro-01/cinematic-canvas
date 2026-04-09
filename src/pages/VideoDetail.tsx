import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Eye, ThumbsUp, Tag } from "lucide-react";
import { getVideoBySlug, getSuggestedVideos } from "@/lib/videoData";

const VideoDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const video = getVideoBySlug(slug || "");
  const suggested = getSuggestedVideos(slug || "");

  if (!video) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">VÍDEO NÃO ENCONTRADO</h1>
          <Link to="/" className="btn-primary-glow inline-block">VOLTAR</Link>
        </div>
      </div>
    );
  }

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

      {/* Fullscreen Video Player */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full aspect-video max-h-[80vh]"
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </motion.section>

      {/* Video Info */}
      <section className="px-6 md:px-16 lg:px-20 py-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.05em] text-foreground font-bold leading-tight">
            {video.title}
          </h1>

          <div className="flex items-center gap-6 mt-4 text-muted-foreground">
            {video.views && (
              <span className="flex items-center gap-1.5 text-sm">
                <Eye className="w-4 h-4" /> {video.views} views
              </span>
            )}
            {video.likes && (
              <span className="flex items-center gap-1.5 text-sm">
                <ThumbsUp className="w-4 h-4" /> {video.likes} likes
              </span>
            )}
          </div>

          <p className="mt-6 font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
            {video.description}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            <Tag className="w-3 h-3 text-primary/60" />
            {video.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-sm bg-primary/10 text-primary/80 border border-primary/15">
                {tag}
              </span>
            ))}
          </div>

          {/* Behind the Edit */}
          {video.behindTheEdit && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 glass-card rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h3 className="font-display text-lg tracking-[0.1em] text-foreground font-semibold">
                  BEHIND THE EDIT
                </h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {video.behindTheEdit}
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Suggested Videos */}
      <section className="px-6 md:px-16 lg:px-20 py-12 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-xl md:text-2xl tracking-[0.1em] text-foreground font-bold mb-8">
            VEJA <span className="text-gradient">TAMBÉM</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {suggested.map((vid, i) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/video/${vid.slug}`} className="group block">
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
                      <h3 className="font-body text-[11px] font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {vid.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer link */}
      <div className="px-6 md:px-16 py-8 border-t border-border flex justify-center">
        <Link to="/" className="font-display text-lg tracking-[0.3em] text-foreground neon-text font-bold hover:text-primary transition-colors">
          HANS
        </Link>
      </div>
    </main>
  );
};

export default VideoDetail;
