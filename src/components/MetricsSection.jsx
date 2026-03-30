import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Instagram from './icons/Instagram';
import { CREATOR, TOP_VIDEOS, fadeUp, staggerContainer } from '../data/content';

const MetricsSection = () => (
  <section
    id="metricas"
    className="py-32 px-6 bg-[#FFF5F6] relative"
    aria-labelledby="metrics-heading"
  >
    <div className="max-w-[1400px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">03. Métricas & Alcance</h2>
          <h3 id="metrics-heading" className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Números que <span className="text-gradient">hablan solos.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* TikTok Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-orange-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center" aria-hidden="true">
                <Play className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-lg">TikTok</p>
                <p className="text-slate-400 text-sm">{CREATOR.tiktok}</p>
              </div>
            </div>
            <dl className="space-y-5">
              {[
                { label: 'Seguidores', value: CREATOR.stats.tiktokFollowers, color: 'text-slate-900' },
                { label: 'Likes Totales', value: CREATOR.stats.tiktokLikes, color: 'text-orange-500' },
                { label: 'Top Video', value: CREATOR.stats.topView, color: 'text-slate-900' },
                { label: 'Ratio Likes/Seg.', value: CREATOR.stats.engagement, color: 'text-pink-500' },
              ].map((stat, i, arr) => (
                <div key={stat.label} className={`flex justify-between items-center ${i < arr.length - 1 ? 'border-b border-slate-50 pb-4' : ''}`}>
                  <dt className="text-slate-500 font-medium">{stat.label}</dt>
                  <dd className={`font-extrabold ${stat.color} text-xl`}>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 bg-orange-50 rounded-2xl p-4">
              <p className="text-orange-600 text-sm font-bold">Categoría</p>
              <p className="text-slate-700 text-sm mt-1">Entretenimiento · Lifestyle · UGC</p>
            </div>
          </motion.div>

          {/* Instagram Card */}
          <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center" aria-hidden="true">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-lg">Instagram</p>
                <p className="text-slate-400 text-sm">{CREATOR.ig}</p>
              </div>
            </div>
            <dl className="space-y-5">
              {[
                { label: 'Seguidores', value: CREATOR.stats.igFollowers, color: 'text-slate-900' },
                { label: 'Récord Engagement', value: '140 Comentarios', color: 'text-pink-500' },
                { label: 'Collab Viral', value: 'Secret Ads', color: 'text-slate-900' },
                { label: 'Contenido', value: 'Lifestyle + UGC', color: 'text-orange-500' },
              ].map((stat, i, arr) => (
                <div key={stat.label} className={`flex justify-between items-center ${i < arr.length - 1 ? 'border-b border-slate-50 pb-4' : ''}`}>
                  <dt className="text-slate-500 font-medium">{stat.label}</dt>
                  <dd className={`font-extrabold ${stat.color} text-xl`}>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 bg-pink-50 rounded-2xl p-4">
              <p className="text-pink-600 text-sm font-bold">Categoría</p>
              <p className="text-slate-700 text-sm mt-1">Artista · BE KIND 💙</p>
            </div>
          </motion.div>
        </div>

        {/* Top Videos */}
        <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
          <h4 className="text-xl font-extrabold text-slate-900 mb-6 text-center">🔥 Top Videos Virales</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOP_VIDEOS.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 flex items-center gap-4 hover:border-pink-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-white font-extrabold text-lg">{v.views}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{v.label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default MetricsSection;
