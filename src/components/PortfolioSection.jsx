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
        <h2 className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-4">02. Mi Portafolio</h2>
        <h3 id="portfolio-heading" className="text-4xl md:text-6xl font-extrabold text-slate-900">
          Marcas que confiaron <span className="text-gradient">en mi visión.</span>
        </h3>
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
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
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
              <h4 className="text-white text-2xl font-extrabold mb-2 leading-tight">{item.client}</h4>
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
        className="text-center"
      >
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Colaboraciones Reales</p>
        <div className="flex flex-wrap justify-center gap-4">
          {BRANDS.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 flex flex-col items-center hover:border-pink-200 hover:shadow-sm transition-all"
            >
              <span className="font-bold text-slate-800 text-sm">{b.name}</span>
              <span className="text-orange-400 text-xs font-medium mt-1">{b.tag}</span>
              <span className="text-slate-400 text-xs mt-0.5">{b.type}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
