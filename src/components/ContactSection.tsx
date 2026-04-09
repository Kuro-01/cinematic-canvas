import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/80">
              Vamos Conversar
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-[0.08em] text-foreground font-bold">
            CONTATO
          </h2>
          <p className="mt-4 font-body text-sm text-muted-foreground max-w-md leading-relaxed">
            Tem um projeto em mente? Vamos criar algo incrível juntos.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
          action="https://formsubmit.co/im.hns991@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
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
                  focused === field.name ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                required
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
            <button type="submit" className="btn-primary-glow flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Enviar Mensagem</span>
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
