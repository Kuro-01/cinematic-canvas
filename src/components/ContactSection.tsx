import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contato" className="section-padding border-t border-border">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
            Vamos Conversar
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.05em] text-foreground mt-4">
            CONTATO
          </h2>
          <p className="mt-6 font-body text-sm text-muted-foreground max-w-md leading-relaxed">
            Tem um projeto em mente? Vamos criar algo cinematográfico juntos.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { name: "nome", label: "Seu Nome", type: "text" },
            { name: "email", label: "Seu Email", type: "email" },
            { name: "projeto", label: "Sobre o Projeto", type: "text" },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="relative"
            >
              <label
                className={`font-body text-[10px] tracking-[0.3em] uppercase transition-colors duration-400 ${
                  focused === field.name ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                className="input-cinematic w-full mt-2 font-body text-sm"
                onFocus={() => setFocused(field.name)}
                onBlur={() => setFocused(null)}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <button type="submit" className="btn-cinematic">
              <span>Enviar Mensagem</span>
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
