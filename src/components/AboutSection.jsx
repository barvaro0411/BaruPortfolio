import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Camera, Star, Heart } from 'lucide-react';
import { CREATOR, fadeUp, staggerContainer } from '../data/content';

const AboutSection = () => (
  <section
    id="presentacion"
    className="min-h-screen flex items-center py-20 px-6 relative"
    aria-labelledby="about-heading"
  >
    <div className="max-w-[1400px] mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={fadeUp} className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
          <div className="absolute inset-0 bg-gradient-brand rounded-[2.5rem] rotate-3 opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-brand rounded-[2.5rem] -rotate-3 opacity-20" aria-hidden="true" />
          <img
            src="/images/img1.jpeg"
            alt="Bárbara Obreque, creadora de contenido UGC"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl relative z-10"
          />
          <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg z-20 border border-orange-100 hidden md:block" aria-hidden="true">
            <Heart className="w-7 h-7 text-orange-500 fill-orange-100" />
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">01. Sobre Mí</p>
          <h2 id="about-heading" className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Mucho más que <br /><span className="text-gradient">solo videos bonitos.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            {CREATOR.bio}
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-100 rounded-2xl p-5 mb-8">
            <p className="text-sm font-bold text-pink-600 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" aria-hidden="true" /> Diferenciador clave
            </p>
            <p className="text-slate-700 font-medium">
              Mi contenido se siente <strong>100% orgánico y real</strong>. Al centrarme en el storytelling y la estética visual (Clean Aesthetic), logro que la publicidad se perciba como la recomendación de una amiga de confianza, multiplicando la tasa de conversión.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4" role="list" aria-label="Estadísticas principales">
            {[
              { icon: TrendingUp, value: CREATOR.stats.tiktokLikes, label: 'Likes TikTok', color: 'orange', border: 'orange-100', hoverBorder: 'orange-300' },
              { icon: Camera, value: CREATOR.stats.topView, label: 'Top Video', color: 'pink', border: 'pink-100', hoverBorder: 'pink-300' },
              { icon: Star, value: CREATOR.stats.engagement, label: 'Ratio Likes/Seg.', color: 'orange', border: 'orange-100', hoverBorder: 'orange-300' },
              { icon: Sparkles, value: CREATOR.stats.totalRedes, label: 'Comunidad Total', color: 'pink', border: 'pink-100', hoverBorder: 'pink-300' },
            ].map((stat) => (
              <div
                key={stat.label}
                role="listitem"
                className={`bg-white p-6 rounded-3xl shadow-sm border border-${stat.border} hover:shadow-md hover:border-${stat.hoverBorder} transition-all group`}
              >
                <stat.icon className={`w-7 h-7 text-${stat.color}-500 mb-3 group-hover:scale-110 transition-transform`} aria-hidden="true" />
                <p className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
