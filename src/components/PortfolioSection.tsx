import { motion } from "framer-motion";

const longFormatVideos = [
  { id: "zUwvMSWfiXo", title: "NEM O HOTFIX DA RIOT FOI SUFICIENTE PARA A NOVA SHYVANA" },
  { id: "EhugG-LIqX4", title: "TIVE QUE JOGAR DE GNAR" },
  { id: "Ap1p1CH8L0M", title: "Vezes que STREAMERS BRASILEIROS apareceram na TV" },
  { id: "Y1ppJ-vxZTY", title: "MELHORES MOMENTOS DA STREAM #1 - HAUZ" },
];

const shortFormatVideos = [
  { id: "dZlWOmh6jt0", title: "Ficou MUITO feliz" },
  { id: "8iGb5apmK-w", title: "Chorou SEM PARAR" },
  { id: "JzavZxu540Y", title: "STOMPAR 90% DOS JOGOS DE SUPORTE" },
];

const VideoEmbed = ({
  videoId,
  title,
  aspect,
  index,
}: {
  videoId: string;
  title: string;
  aspect: "landscape" | "portrait";
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.23, 1, 0.32, 1],
    }}
    className="group"
  >
    <div
      className={`relative overflow-hidden rounded-sm ${
        aspect === "landscape" ? "aspect-video" : "aspect-[9/16]"
      }`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  </motion.div>
);

const PortfolioSection = () => {
  return (
    <section id="portfólio" className="section-padding">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mb-16 md:mb-24"
      >
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          Portfólio Selecionado
        </span>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.05em] text-foreground mt-4">
          TRABALHOS
        </h2>
      </motion.div>

      {/* LONG FORMAT */}
      <div id="longformat" className="mb-16 md:mb-24">
        <h3 className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground mb-8">
          LONG FORMAT
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {longFormatVideos.map((video, index) => (
            <VideoEmbed
              key={video.id}
              videoId={video.id}
              title={video.title}
              aspect="landscape"
              index={index}
            />
          ))}
        </div>
      </div>

      {/* SHORT FORMAT */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground mb-8">
          SHORT FORMAT
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {shortFormatVideos.map((video, index) => (
            <VideoEmbed
              key={video.id}
              videoId={video.id}
              title={video.title}
              aspect="portrait"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
