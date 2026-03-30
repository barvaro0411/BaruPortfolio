import { motion } from 'framer-motion';
import { Sparkles, Mail, Play } from 'lucide-react';
import Instagram from './icons/Instagram';
import { CREATOR, fadeUp, staggerContainer } from '../data/content';

const FooterSection = () => (
  <footer
    id="contacto"
    className="bg-slate-900 text-white py-32 px-6 relative overflow-hidden"
    aria-labelledby="contact-heading"
  >
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

    <div className="max-w-[1400px] mx-auto text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <motion.div variants={fadeUp} className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full">
          <span className="text-sm font-bold tracking-widest text-pink-400 uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4" aria-hidden="true" /> Agenda abierta para este mes
          </span>
        </motion.div>

        <motion.h2
          id="contact-heading"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold mb-8"
        >
          ¿Creamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">magia juntos?</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Escríbeme y diseñemos una estrategia visual que haga brillar a tu marca. Con{' '}
          <strong className="text-white">32.7K en TikTok</strong>,{' '}
          <strong className="text-white">2.2M de likes</strong> y un top video de{' '}
          <strong className="text-white">4.9M vistas</strong>, BARÜ convierte.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href={`mailto:${CREATOR.email}`}
          className="inline-flex items-center justify-center gap-3 bg-gradient-brand text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/40 transition-all hover:-translate-y-1 mb-20"
          aria-label={`Enviar email a ${CREATOR.email}`}
        >
          <Mail className="w-6 h-6" aria-hidden="true" /> {CREATOR.email}
        </motion.a>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-10">
          <div className="font-bold text-2xl tracking-wider mb-6 md:mb-0">
            {CREATOR.alias}.
          </div>
          <nav className="flex gap-6" aria-label="Redes sociales">
            <a
              href={CREATOR.tiktokLink}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 font-medium"
              aria-label={`TikTok de ${CREATOR.alias}`}
            >
              <Play className="w-4 h-4" fill="currentColor" aria-hidden="true" /> {CREATOR.tiktok}
            </a>
            <a
              href={CREATOR.igLink}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors flex items-center gap-2 font-medium"
              aria-label={`Instagram de ${CREATOR.alias}`}
            >
              <Instagram className="w-4 h-4" /> {CREATOR.ig}
            </a>
          </nav>
        </div>

        <p className="text-slate-600 text-xs mt-8">
          © {new Date().getFullYear()} {CREATOR.name}. Todos los derechos reservados.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default FooterSection;
