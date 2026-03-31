import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../data/content';

const PACKAGES = [
  {
    name: 'Test & Learn',
    description: 'Perfecto para marcas que quieren probar contenido orgánico.',
    items: [
      '2 Videos (9:16 TikTok/Reels)',
      '2 Hooks alternativos por video',
      'Derechos de uso x 3 meses',
      'Entrega en 7 días hábiles',
    ],
    price: '$350',
    featured: false,
  },
  {
    name: 'Escalamiento Ads',
    description: 'Para marcas listas para invertir fuerte en pauta publicitaria.',
    items: [
      '5 Videos UGC Dinámicos',
      'Pruebas A/B Integradas',
      '5 Fotos Lifestyle Clean Aesthetic',
      'Uso de imagen y voz',
      'Derechos de uso extendido',
    ],
    price: '$850',
    featured: true,
  },
];

const ServicesSection = ({ scrollTo }) => (
  <section
    id="servicios"
    className="min-h-screen flex items-center py-32 px-6 relative bg-white"
    aria-labelledby="services-heading"
  >
    <div className="max-w-[1400px] mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">04. Inversión</p>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Paquetes <span className="text-gradient">UGC</span>
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-lg mx-auto">
            Contenido que no parece publicidad, sino una recomendación de tu mejor amiga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              className={
                pkg.featured
                  ? 'bg-gradient-brand p-1 rounded-[2.5rem] shadow-xl shadow-pink-500/20 hover:-translate-y-2 transition-transform duration-300'
                  : 'bg-[#FFF5F6] p-10 rounded-[2.5rem] shadow-sm border border-orange-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all flex flex-col h-full'
              }
            >
              <div className={pkg.featured ? 'bg-white p-10 rounded-[2.4rem] h-full flex flex-col relative overflow-hidden' : 'flex flex-col h-full'}>
                {pkg.featured && (
                  <div className="absolute top-6 right-6 bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    ⭐ Top Seller
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 mb-8 font-light">{pkg.description}</p>
                <ul className="space-y-4 mb-10 flex-grow" aria-label={`Incluido en ${pkg.name}`}>
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className={`w-2 h-2 rounded-full ${pkg.featured ? 'bg-pink-500' : 'bg-orange-400'} flex-shrink-0`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 pt-6 flex justify-between items-center">
                  <span className={`text-4xl font-extrabold ${pkg.featured ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500' : 'text-slate-900'}`}>
                    {pkg.price} <span className="text-base font-normal text-slate-400">USD</span>
                  </span>
                  {pkg.featured ? (
                    <a
                      href="#contacto"
                      onClick={(e) => { e.preventDefault(); scrollTo('contacto'); }}
                      className="bg-pink-50 text-pink-600 px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-pink-100 transition-colors"
                    >
                      Solicitar
                    </a>
                  ) : (
                    <a
                      href="#contacto"
                      onClick={(e) => { e.preventDefault(); scrollTo('contacto'); }}
                      className="text-orange-500 font-bold uppercase tracking-wider text-sm hover:text-orange-600 flex items-center gap-1"
                    >
                      Lo quiero <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-4 text-center">* Precios referenciales, pueden variar según requerimiento.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
