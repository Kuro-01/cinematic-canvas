import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 100, suffix: "+", label: "Projetos Entregues" },
  { number: 10, suffix: "M+", label: "Visualizações" },
  { number: 1, suffix: "+", label: "Anos de Experiência" },
  { number: 98, suffix: "%", label: "Clientes Satisfeitos" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref} className="stat-number text-foreground">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          Resultados
        </span>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.05em] text-foreground mt-4">
          NÚMEROS
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-center md:text-left"
          >
            <AnimatedNumber target={stat.number} suffix={stat.suffix} />
            <div className="mt-3 h-px w-12 bg-muted-foreground/30 mx-auto md:mx-0" />
            <p className="mt-3 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Clients strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-24 pt-16 border-t border-border"
      >
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-center mb-12">
          Marcas que confiam no meu trabalho
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {["NIKE", "SONY", "RED BULL", "NETFLIX", "ADIDAS"].map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="font-display text-xl md:text-2xl tracking-[0.2em] text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-500"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
