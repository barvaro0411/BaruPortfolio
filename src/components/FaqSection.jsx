import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { fadeUp, staggerContainer } from '../data/content';

const FAQ_ITEMS = [
  {
    question: '¿Qué es el contenido UGC?',
    answer:
      'El contenido UGC (User Generated Content) es material audiovisual creado por personas reales para marcas. Se diferencia de la publicidad tradicional porque luce orgánico y auténtico, como la recomendación de una amiga de confianza, lo que genera mayor engagement y conversión.',
  },
  {
    question: '¿Cuánto cuesta contratar una creadora UGC en Chile?',
    answer:
      'Los precios varían según el alcance del proyecto. BARÜ ofrece paquetes desde $350 USD (Test & Learn: 2 videos con hooks alternativos) hasta $850 USD (Escalamiento Ads: 5 videos + fotos lifestyle + pruebas A/B). Los precios son referenciales y pueden ajustarse según requerimientos específicos.',
  },
  {
    question: '¿Qué incluye una colaboración UGC con BARÜ?',
    answer:
      'Dependiendo del paquete, incluye videos en formato 9:16 optimizados para TikTok e Instagram Reels, hooks alternativos para pruebas A/B, fotos lifestyle con estética Clean Aesthetic, derechos de uso de imagen y voz, y entrega en un plazo definido.',
  },
  {
    question: '¿Cuánto tiempo toma recibir el contenido?',
    answer:
      'El paquete Test & Learn tiene un plazo de entrega de 7 días hábiles. Para proyectos más grandes como Escalamiento Ads, el plazo se define según la complejidad y cantidad de contenido requerido.',
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className="border border-slate-100 rounded-2xl overflow-hidden hover:border-pink-200 transition-colors">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-6 text-left gap-4"
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-bold text-slate-900">{item.question}</h3>
      <ChevronDown
        className={`w-5 h-5 text-pink-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        aria-hidden="true"
      />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <p className="px-6 pb-6 text-slate-600 leading-relaxed">{item.answer}</p>
    </motion.div>
  </div>
);

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-[#FFF5F6] relative"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-4">
              05. Preguntas Frecuentes
            </p>
            <h2
              id="faq-heading"
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
            >
              ¿Tienes <span className="text-gradient">dudas?</span>
            </h2>
            <p className="text-slate-500 mt-4 text-lg max-w-lg mx-auto">
              Aquí respondo las consultas más comunes sobre mi trabajo como creadora UGC.
            </p>
          </div>

          <motion.div variants={fadeUp} className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
