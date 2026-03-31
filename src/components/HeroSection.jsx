import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Instagram from './icons/Instagram';
import { CREATOR, fadeUp, staggerContainer } from '../data/content';

const ScrollRevealText = ({ text }) => {
  const { scrollY } = useScroll();
  const words = text.split(" ");
  
  return (
    <p className="text-xl md:text-3xl font-extrabold max-w-4xl mx-auto mb-10 leading-snug flex flex-wrap justify-center gap-x-[0.35rem] gap-y-1 drop-shadow-sm">
      {words.map((word, i) => {
        // Multiplier to space out the animation of each word as user scrolls
        const startScroll = i * 20; 
        const endScroll = startScroll + 20;
        const opacity = useTransform(scrollY, [startScroll, endScroll], [0.25, 1]);
        const color = useTransform(scrollY, [startScroll, endScroll], ["#94a3b8", "#ffffff"]);
        return (
          <motion.span key={i} style={{ opacity, color }}>{word}</motion.span>
        )
      })}
    </p>
  );
};

const HeroSection = ({ scrollTo }) => (
  <section
    id="portada"
    className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden bg-slate-950"
    aria-labelledby="hero-heading"
  >
    {/* Sizzle Reel Background */}
    <video
      src="/videos/secret_ad.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-60 select-none pointer-events-none z-0"
    />
    
    {/* Dark Glass Overlay */}
    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[4px] z-0" aria-hidden="true" />
    
    {/* Gradients para contraste luminoso */}
    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none z-0" aria-hidden="true" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-[100px] pointer-events-none z-0" aria-hidden="true" />

    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-center z-10 max-w-4xl mx-auto mt-20 relative"
    >
      <motion.div variants={fadeUp} className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
        <span className="text-xs md:text-sm font-bold tracking-widest text-pink-300 uppercase flex items-center gap-2 shadow-sm">
          <Sparkles className="w-4 h-4 text-orange-400" aria-hidden="true" /> {CREATOR.tagline}
        </span>
      </motion.div>

      <motion.h1 id="hero-heading" variants={fadeUp} className="text-6xl md:text-8xl lg:text-[9.5rem] font-extrabold leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
        <span className="text-white block">Hola, soy</span>
        <span className="text-gradient block pb-2 drop-shadow-2xl">Bárbara.</span>
        <span className="sr-only"> — Creadora UGC en Chile, especialista en Lifestyle y Beauty content</span>
      </motion.h1>

      <motion.div variants={fadeUp} className="z-20 relative">
        <ScrollRevealText text="Fonos grandes, problemas chiquitos ✨. Creo contenido estético, real y que convierte para marcas que buscan destacar." />
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-full px-5 py-2 flex items-center gap-2 shadow-xl text-white">
          <span className="text-orange-400 font-extrabold">{CREATOR.stats.tiktokFollowers}</span>
          <span className="text-slate-300 text-sm font-medium">TikTok</span>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-full px-5 py-2 flex items-center gap-2 shadow-xl text-white">
          <span className="text-pink-400 font-extrabold">{CREATOR.stats.igFollowers}</span>
          <span className="text-slate-300 text-sm font-medium">Instagram</span>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-full px-5 py-2 flex items-center gap-2 shadow-xl text-white">
          <span className="text-orange-400 font-extrabold">{CREATOR.stats.tiktokLikes}</span>
          <span className="text-slate-300 text-sm font-medium">Likes TikTok</span>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
        <a
          href="#trabajo"
          onClick={(e) => { e.preventDefault(); scrollTo('trabajo'); }}
          className="bg-gradient-brand text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 transition-all hover:-translate-y-1 flex items-center gap-2"
        >
          Ver mi trabajo <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
        </a>
        <a
          href={CREATOR.linktree}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 text-white backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2 shadow-xl"
        >
          <Instagram className="w-5 h-5 opacity-90" /> Mis Redes
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
