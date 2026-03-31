import { motion } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { src: portfolio1, title: "Bastidores", category: "Comercial", aspect: "landscape" },
  { src: portfolio2, title: "Horizonte", category: "Automotive", aspect: "landscape" },
  { src: portfolio3, title: "Palco Vivo", category: "Music Video", aspect: "landscape" },
  { src: portfolio4, title: "Luzes Urbanas", category: "Fashion Film", aspect: "landscape" },
  { src: portfolio5, title: "Névoa", category: "Documentary", aspect: "landscape" },
  { src: portfolio6, title: "Eternidade", category: "Wedding Film", aspect: "landscape" },
];

const PortfolioCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="portfolio-card group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Hover overlay with info */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-500 flex items-end p-6 md:p-8">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              {project.category}
            </span>
            <h3 className="font-display text-2xl md:text-3xl tracking-[0.1em] text-foreground mt-1">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <PortfolioCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
