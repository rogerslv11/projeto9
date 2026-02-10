
import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock as ClockIcon,
  Menu,
  X,
  ChevronRight,
  Star,
  ArrowRight,
  Award,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import { SERVICES, TESTIMONIALS, COMPARISONS, DIFFERENTIATORS } from './constants';

const BeforeAfterSlider: React.FC<{ before: string; after: string; label: string }> = ({ before, after, label }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      ref={containerRef}
      className="relative aspect-video rounded-[2rem] overflow-hidden cursor-ew-resize border border-white/5 select-none group shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
      <div 
        className="absolute inset-0 w-full h-full grayscale-[0.8] brightness-[0.4] border-r-2 border-blue-500 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} className="absolute inset-0 w-full h-full object-cover" alt="Before" />
      </div>
      <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/5">Antes</div>
      <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-blue-600/80 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">Depois</div>
      <div className="absolute top-0 bottom-0 w-1 bg-blue-500 z-30 flex items-center justify-center -ml-0.5" style={{ left: `${sliderPos}%` }}>
        <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-neutral-900 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white/40 rounded-full" />
            <div className="w-1 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 inset-x-0 text-center z-20 pointer-events-none">
        <span className="text-white font-title font-bold uppercase tracking-[0.3em] text-xs drop-shadow-lg">{label}</span>
      </div>
    </motion.div>
  );
};

const SectionTitle: React.FC<{ subtitle: string; title: string; align?: 'left' | 'center' }> = ({ subtitle, title, align = 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-blue-500 font-title font-black tracking-[0.5em] uppercase text-[10px] mb-4 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-title font-black uppercase italic tracking-tighter leading-tight"
    >
      {title.split(' ').map((word, i) => (
        <span key={i} className={word.toLowerCase() === 'perfeição' || word.toLowerCase() === 'proteção' || word.toLowerCase() === 'transformação' ? 'text-blue-600' : ''}>
          {word}{' '}
        </span>
      ))}
    </motion.h2>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const heroRef = useRef(null);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <div className="min-h-screen text-neutral-100 selection:bg-blue-600/30">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 to-blue-400 z-[70] origin-left" style={{ scaleX }} />

      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-10'}`}>
        <div className="container mx-auto px-6">
          <div className={`flex justify-between items-center transition-all duration-700 rounded-3xl px-8 ${scrolled ? 'bg-black/60 backdrop-blur-2xl border border-white/5 py-3 shadow-2xl' : 'bg-transparent'}`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <span className="font-title font-black text-xl italic text-white">L</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-title text-xl font-black tracking-tighter uppercase leading-none">LuxeDrive</span>
                <span className="text-[9px] uppercase tracking-[0.5em] text-blue-500 font-bold">Detailing Elite</span>
              </div>
            </motion.div>

            <div className="hidden lg:flex gap-10 items-center">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  className="text-[11px] font-black text-neutral-400 hover:text-white transition-all uppercase tracking-[0.3em] relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full group-hover:left-0" />
                </motion.a>
              ))}
              <a href="#contato" className="bg-blue-600 px-8 py-3 rounded-xl text-[11px] font-black hover:bg-blue-500 transition-all uppercase tracking-widest shadow-xl shadow-blue-600/20 group flex items-center gap-3">
                Agendar Agora
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <button className="lg:hidden p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6 text-blue-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-neutral-900/95 backdrop-blur-2xl border-b border-white/5 mx-6 mt-4 rounded-3xl overflow-hidden"
            >
              <div className="p-10 flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase italic tracking-tighter hover:text-blue-500">
                    {link.name}
                  </a>
                ))}
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 py-5 rounded-2xl font-black uppercase tracking-widest">Solicitar Orçamento</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/40 to-neutral-950 z-10" />
          <div className="absolute inset-0 bg-neutral-950/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=90&w=2400" 
            className="w-full h-full object-cover object-center" 
            alt="Hero Car"
          />
        </motion.div>
        
        <div className="scanline"></div>

        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 mb-10 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Padrão de Qualidade Internacional</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10rem] font-title font-black leading-[0.8] mb-10 tracking-tighter uppercase italic"
            >
              Estética <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-700 text-glow">Superior</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-2xl text-neutral-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-tight"
            >
              Onde a engenharia e o detalhamento se encontram para criar acabamentos que desafiam o tempo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8"
            >
              <a href="#contato" className="px-12 py-6 bg-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-2 transition-all">
                Conhecer Planos
              </a>
              <a href="#portfolio" className="px-12 py-6 bg-white/5 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all backdrop-blur-md border border-white/5">
                Ver Transformações
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats - Refined Grid */}
      <section className="relative z-30 -mt-24 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Projetos Concluídos', val: '3.4k', icon: <Award /> },
              { label: 'Anos Experiência', val: '15+', icon: <Award /> },
              { label: 'Marcas Premium', val: '08', icon: <Award /> },
              { label: 'Satisfação Real', val: '100%', icon: <Award /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500 border border-white/5"
              >
                <div className="text-blue-500 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                   {/* Fix: Casting icon as React.ReactElement<any> to allow 'className' property in cloneElement */}
                   {React.cloneElement(stat.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-4xl font-title font-black mb-2 tracking-tighter group-hover:scale-105 transition-transform origin-left">{stat.val}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 group-hover:text-blue-400 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Asymmetrical Layout */}
      <section id="sobre" className="py-32 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/5"
              >
                <img 
                  src="https://images.unsplash.com/photo-1597766333608-288989c5d6f9?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-[2s]" 
                  alt="Detailing Process"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <span className="font-title font-black text-6xl text-blue-500/20 italic">SINCE 2009</span>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="lg:w-1/2">
              <SectionTitle subtitle="Legado" title="Paixão pela Perfeição Absoluta" />
              <div className="space-y-10 text-neutral-400 text-lg font-light leading-relaxed">
                <p>
                  A <span className="text-white font-bold italic tracking-tight">LuxeDrive</span> não é apenas uma oficina de estética. Somos um ateliê automotivo onde o tempo para e o cuidado assume o protagonismo. 
                </p>
                <p>
                  Fundada por entusiastas para entusiastas, nossa metodologia une a <span className="text-blue-500 font-medium">precisão alemã</span> com a sensibilidade artística. Cada curva do seu carro conta uma história, e nosso trabalho é torná-la radiante.
                </p>
                <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-black text-xl italic font-title tracking-tighter">CERTIFICAÇÃO</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Gyeon Master Detailer</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-black text-xl italic font-title tracking-tighter">TECNOLOGIA</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Nano-Cerâmica 9H+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Dynamic Grid */}
      <section id="servicos" className="py-32 bg-[#080808] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Nossas Soluções" title="Proteção de Alto Nível" align="center" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-12 rounded-[3rem] group relative overflow-hidden flex flex-col items-center text-center"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors" />
                <div className="w-20 h-20 bg-neutral-900 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-all duration-500 rotate-3 group-hover:rotate-12 shadow-2xl">
                   {/* Fix: Casting icon as React.ReactElement<any> to allow 'className' property in cloneElement */}
                   {React.cloneElement(s.icon as React.ReactElement<any>, { className: 'w-8 h-8 group-hover:text-white transition-colors' })}
                </div>
                <h3 className="text-2xl font-title font-black uppercase italic mb-6 tracking-tighter">{s.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-light mb-10 flex-grow">{s.description}</p>
                <a href="#contato" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                  Ver Detalhes <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Interactive */}
      <section id="portfolio" className="py-32 bg-neutral-950">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="O Poder do Resultado" title="Transformação Sem Limites" align="center" />
          <div className="grid lg:grid-cols-2 gap-12">
            {COMPARISONS.map((comp) => (
              <BeforeAfterSlider key={comp.id} before={comp.beforeImg} after={comp.afterImg} label={comp.label} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Visual Impact */}
      <section className="py-40 relative overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover grayscale opacity-20 scale-105 group-hover:scale-110 transition-transform duration-[10s]" 
            alt="CTA BG"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-title font-black uppercase italic tracking-tighter mb-12 leading-[0.9]">
              Seu carro merece o <br />
              <span className="text-blue-500 italic">Extraordinário</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-16 font-light max-w-xl mx-auto">
              Tratamentos exclusivos com vagas limitadas. Garanta o brilho máximo e a proteção definitiva.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <a href="#contato" className="bg-blue-600 px-14 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.4)]">
                Agendar Consultoria
              </a>
              <a href="https://wa.me/5500000000000" className="bg-white/5 backdrop-blur-xl border border-white/10 px-14 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all flex items-center gap-4">
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp Direto
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Focused */}
      <section id="depoimentos" className="py-32 bg-[#080808]">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Confraria" title="Relatos de Satisfação" align="center" />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-[3rem] relative"
              >
                <div className="flex gap-1 mb-10">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-blue-500 text-blue-500" />)}
                </div>
                <p className="text-xl text-neutral-300 italic mb-12 font-light leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                  <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center font-title text-2xl font-black text-blue-500 shadow-2xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-black text-lg uppercase italic tracking-tighter">{t.name}</h5>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mt-1">{t.car}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Premium Form */}
      <section id="contato" className="py-32 relative bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="glass rounded-[4rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
            <div className="lg:w-3/5 p-16 md:p-24">
              <SectionTitle subtitle="Contato" title="Inicie seu Projeto" />
              <form className="space-y-8 mt-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-neutral-500 ml-2">Seu Nome</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-neutral-500 ml-2">WhatsApp</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-neutral-500 ml-2">Veículo e Ano</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black text-neutral-500 ml-2">Serviço de Interesse</label>
                  <select className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-medium appearance-none">
                    <option>Vitrificação Ceramic Coating</option>
                    <option>Polimento Técnico</option>
                    <option>PPF (Paint Protection Film)</option>
                    <option>Higienização Premium</option>
                  </select>
                </div>
                <button className="w-full py-6 bg-blue-600 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]">
                  Solicitar Orçamento Personalizado
                </button>
              </form>
            </div>
            
            <div className="lg:w-2/5 relative min-h-[500px] border-l border-white/5">
               <img src="https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale-[0.5]" alt="Workshop" />
               <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
               <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 p-16 flex flex-col justify-end">
                  <div className="glass p-10 rounded-[3rem] space-y-8 border border-white/10">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-2 text-blue-400">Visite-nos</h4>
                        <p className="text-sm font-light text-neutral-300">Av. Das Américas, 12000 <br /> Barra da Tijuca, RJ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-2 text-blue-400">Atendimento</h4>
                        <p className="text-sm font-light text-neutral-300">Seg - Sáb: 08:00 às 19:00</p>
                        <p className="text-sm font-bold text-white mt-1">(21) 99999-9999</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal & Sophisticated */}
      <footer className="py-20 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="font-title font-black text-xl italic">L</span>
                </div>
                <h3 className="font-title text-2xl font-black uppercase tracking-tighter">LuxeDrive</h3>
              </div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-black">Crafting Perfection Since 2009</p>
            </div>
            
            <div className="flex gap-10">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp' }
              ].map((social, i) => (
                <a key={i} href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-2 border border-white/5 text-neutral-500">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-4 mb-16 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600">
             {navLinks.map(l => <a key={l.name} href={l.href} className="hover:text-blue-500 transition-colors">{l.name}</a>)}
             <a href="#" className="hover:text-blue-500 transition-colors">Políticas</a>
             <a href="#" className="hover:text-blue-500 transition-colors">Termos de Uso</a>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] text-neutral-700 uppercase tracking-widest font-black">© 2024 LUXEDRIVE DETAILING GROUP. ALL RIGHTS RESERVED.</p>
            <p className="text-[9px] text-neutral-800 uppercase tracking-widest font-black">REFINED BY EXCELLENCE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
