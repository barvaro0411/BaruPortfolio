import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Instagram from './icons/Instagram';
import { CREATOR, fadeUp, staggerContainer } from '../data/content';

const HeroSection = ({ scrollTo }) => (
  <section
    id="portada"
    className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden"
    aria-labelledby="hero-heading"
  >
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-center z-10 max-w-4xl mx-auto mt-20"
    >
      <motion.div variants={fadeUp} className="inline-block mb-6 px-4 py-2 bg-white/60 backdrop-blur-sm border border-pink-200 rounded-full">
        <span className="text-sm font-bold tracking-widest text-pink-500 uppercase flex items-center gap-2">
          <Sparkles className="w-4 h-4" aria-hidden="true" /> {CREATOR.tagline}
        </span>
      </motion.div>

      <motion.h1 id="hero-heading" variants={fadeUp} className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-[0.9] tracking-tight mb-8">
        <span className="text-slate-900 block">Hola, soy</span>
        <span className="text-gradient block pb-2">Bárbara.</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mb-6">
        Fonos grandes, problemas chiquitos ✨. Creo contenido estético, real y que convierte para marcas que buscan destacar.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-full px-5 py-2 flex items-center gap-2 shadow-sm">
          <span className="text-orange-500 font-extrabold">{CREATOR.stats.tiktokFollowers}</span>
          <span className="text-slate-500 text-sm font-medium">TikTok</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-full px-5 py-2 flex items-center gap-2 shadow-sm">
          <span className="text-pink-500 font-extrabold">{CREATOR.stats.igFollowers}</span>
          <span className="text-slate-500 text-sm font-medium">Instagram</span>
        </div>
        <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-full px-5 py-2 flex items-center gap-2 shadow-sm">
          <span className="text-orange-500 font-extrabold">{CREATOR.stats.tiktokLikes}</span>
          <span className="text-slate-500 text-sm font-medium">Likes TikTok</span>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => scrollTo('trabajo')}
          className="bg-gradient-brand text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-pink-500/40 transition-all hover:-translate-y-1 flex items-center gap-2"
        >
          Ver mi trabajo <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
        </button>
        <a
          href={CREATOR.linktree}
          target="_blank"
          rel="noreferrer"
          className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-pink-300 hover:text-pink-600 transition-all flex items-center gap-2 shadow-sm"
        >
          <Instagram className="w-5 h-5" /> Mis Redes
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
