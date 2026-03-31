import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO, BRANDS, fadeUp, staggerContainer } from '../data/content';

const PortfolioSection = () => (
  <section
    id="trabajo"
    className="py-32 px-6 bg-white relative"
    aria-labelledby="portfolio-heading"
  >
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center mb-20"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-4">02. Mi Portafolio</p>
        <h2 id="portfolio-heading" className="text-4xl md:text-6xl font-extrabold text-slate-900">
          Marcas que confiaron <span className="text-gradient">en mi visión.</span>
        </h2>
        <p className="text-slate-500 mt-6 text-lg max-w-xl mx-auto">
          Contenido real que ha generado millones de vistas y conexiones auténticas con audiencias.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto"
      >
        {PORTFOLIO.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            className="group relative rounded-[2rem] overflow-hidden shadow-lg aspect-[4/5] cursor-pointer"
            tabIndex={0}
            role="article"
            aria-label={`Proyecto: ${item.client} — ${item.views}`}
          >
            {item.video ? (
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={item.image}
                aria-label={`Video de contenido UGC para ${item.client}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              >
                <track kind="captions" srcLang="es" label="Español" />
              </video>
            ) : (
              <img
                src={item.image}
                alt={`Contenido UGC para ${item.client}`}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            )}
            <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 mix-blend-multiply group-hover:opacity-80 transition-opacity duration-500`} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" aria-hidden="true" />

            <div className="absolute top-6 left-6 z-20">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                {item.badge}
              </span>
            </div>

            {/* CTA hover — replaces empty play button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 z-10">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
              <h3 className="text-white text-2xl font-extrabold mb-2 leading-tight">{item.client}</h3>
              <div className="flex items-center gap-2">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">
                  {item.views}
                </div>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/70 text-xs">
                  {item.platform}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="text-center w-full"
      >
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Colaboraciones Reales</p>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-10">As Seen On</h3>
        
        {/* Fullwidth Marquee Container */}
        <div className="relative w-screen left-1/2 -ml-[50vw] overflow-hidden bg-slate-50/50 py-10 border-y border-slate-100">
          {/* Edges Gradients for Smoothness */}
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" aria-hidden="true" />
          
          <div className="animate-marquee gap-6 md:gap-8 items-center">
            {/* Seamless Double Group Loop */}
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-6 md:gap-8 items-center flex-shrink-0 pr-6 md:pr-8">
                {/* 4 sets of BRANDS to guarantee it overflows desktop screens safely */}
                {[...Array(4)].fill(BRANDS).flat().map((b, i) => (
                  <div
                    key={`${groupIndex}-${i}`}
                    className="bg-white border border-slate-200/60 shadow-sm rounded-3xl px-8 py-6 md:py-8 flex flex-col items-center justify-center min-w-[220px] md:min-w-[280px] hover:border-pink-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group select-none"
                  >
                    <span className="font-extrabold text-slate-800 text-lg md:text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all text-center leading-tight">
                      {b.name}
                    </span>
                    <span className="bg-orange-50 text-orange-600 font-bold text-[10px] md:text-xs mt-3 px-3 py-1 rounded-full uppercase tracking-wider">{b.tag}</span>
                    <span className="text-slate-500 text-xs md:text-sm mt-2 font-medium">{b.type}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
