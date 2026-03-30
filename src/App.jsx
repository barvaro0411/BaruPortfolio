import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import MetricsSection from './components/MetricsSection';
import ServicesSection from './components/ServicesSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#' + id);
    }
  };

  return (
    <div className="bg-[#FFF5F6] text-slate-800 font-sans selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      {/* Skip to content — accesibilidad */}
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>

      <Navbar scrollTo={scrollTo} />

      <main id="main-content">
        <HeroSection scrollTo={scrollTo} />
        <AboutSection />
        <PortfolioSection />
        <MetricsSection />
        <ServicesSection scrollTo={scrollTo} />
      </main>

      <FooterSection />
    </div>
  );
}
