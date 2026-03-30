import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CREATOR } from '../data/content';

const NAV_ITEMS = [
  { id: 'presentacion', label: 'Presentación' },
  { id: 'trabajo', label: 'Trabajo' },
  { id: 'metricas', label: 'Métricas' },
  { id: 'servicios', label: 'Servicios' },
];

const Navbar = ({ scrollTo }) => {
  const { scrollYProgress } = useScroll();
  const scaleNav = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const opacityNav = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollTo(id);
  };

  // Close mobile menu on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={{ scale: scaleNav, opacity: opacityNav }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg shadow-pink-500/10 border border-pink-100 flex gap-6 items-center w-[90%] md:w-auto justify-between md:justify-center"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 tracking-wider cursor-pointer"
          onClick={() => handleNavClick('portada')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('portada')}
          aria-label="Ir al inicio"
        >
          {CREATOR.alias}.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:text-pink-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick('contacto')}
          className="hidden md:block bg-gradient-brand text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-0.5"
        >
          Contactar
        </button>

        {/* Mobile Hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden text-slate-700 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-[5%] w-[90%] z-40 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                role="menuitem"
                onClick={() => handleNavClick(item.id)}
                className="text-left font-semibold text-slate-700 hover:text-pink-500 text-lg py-2 border-b border-pink-50"
              >
                {item.label}
              </button>
            ))}
            <button
              role="menuitem"
              onClick={() => handleNavClick('contacto')}
              className="mt-4 bg-gradient-brand text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-center shadow-lg shadow-pink-500/30"
            >
              Contactar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
