import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const base = import.meta.env.BASE_URL;

const heroImages = [
  { src: `${base}img/003.jpg`, slug: "zaha-hadid",    baseX: "8%",  baseY: "10%", index: 0, delay: 0.10 },
  { src: `${base}img/038.jpg`, slug: "baskerville",   baseX: "72%", baseY: "5%",  index: 1, delay: 0.15 },
  { src: `${base}img/039.jpg`, slug: "haute-couture", baseX: "85%", baseY: "35%", index: 2, delay: 0.20 },
  { src: `${base}img/015.jpg`, slug: "slash",         baseX: "12%", baseY: "55%", index: 3, delay: 0.25 },
  { src: `${base}img/011.jpg`, slug: "vinyls",        baseX: "78%", baseY: "70%", index: 4, delay: 0.30 },
  { src: `${base}img/001.jpg`, slug: "metamorphosis", baseX: "15%", baseY: "78%", index: 5, delay: 0.35 },
  { src: `${base}img/030.jpg`, slug: "portofino",     baseX: "45%", baseY: "15%", index: 6, delay: 0.40 },
];

function FloatingImage({
  src, alt, delay, baseX, baseY, index, slug, onNavigate,
}: {
  src: string; alt: string; delay: number; baseX: string; baseY: string;
  index: number; slug: string; onNavigate: (slug: string) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [hasBeenDragged, setHasBeenDragged] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const aspectClass =
    index % 3 === 0 ? "aspect-square" : index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]";

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      onDragStart={() => { setIsDragging(true); setHasBeenDragged(true); }}
      onDragEnd={() => setIsDragging(false)}
      whileDrag={{ scale: 1.1, zIndex: 1000, cursor: "grabbing" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: isDragging ? 1.1 : 1 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 25 }}
      style={{ left: baseX, top: baseY, position: "absolute" }}
      className={`w-28 md:w-40 overflow-hidden shadow-2xl border border-white/20 ${aspectClass} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={() => { if (!hasBeenDragged) onNavigate(slug); setHasBeenDragged(false); }}
        onMouseDown={() => setHasBeenDragged(false)}
        className="w-full h-full relative"
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
          animate={{ filter: isDragging || isHovered ? "invert(1)" : "invert(0)" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const t = translations[lang];
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of ["hero", "work"]) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section id="hero" className="min-h-screen relative pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full relative min-h-[85vh]">
          {heroImages.map((img, i) => (
            <FloatingImage
              key={i}
              src={img.src}
              alt={`Project ${i + 1}`}
              delay={img.delay}
              baseX={img.baseX}
              baseY={img.baseY}
              index={img.index}
              slug={img.slug}
              onNavigate={(slug) => navigate(`/project/${slug}`)}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none"
          >
            <h1 className="text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.75] mb-4 text-white">
              <span className="font-['Archivo_Narrow'] tracking-[0.15em] block font-semibold">LÉA</span>
              <span className="font-['Archivo_Narrow'] tracking-[0.15em] italic block font-medium">TRAMATI</span>
            </h1>
            <p className="font-['Inter'] text-xs md:text-sm tracking-[0.25em] text-gray-400">
              {t.hero.sub}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-white text-black font-['Inter'] text-xs tracking-[0.15em] hover:bg-gray-200 transition-colors inline-block"
            >
              {t.hero.cta}
            </button>
          </motion.div>
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 animate-bounce text-white" />
        </motion.div>
      </section>

      {/* Work grid */}
      <section id="work" className="min-h-screen py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex justify-between items-baseline border-b border-white/10 pb-5 mb-10">
              <div>
                <div className="font-['Inter'] text-[9px] tracking-[0.36em] uppercase text-white/40 mb-4">
                  {t.home.sectionLabel}
                </div>
                <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl leading-[0.9] text-white whitespace-pre-line">
                  {t.home.sectionTitle}
                </h2>
              </div>
              <span className="font-['Inter'] text-[9px] tracking-[0.34em] text-white/40">12</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/project/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white/5 mb-4 border border-white/10">
                    <motion.img
                      src={`${base}${project.cover}`}
                      alt={project.title.replace("\n", " ")}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06, filter: "invert(1)" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div>
                    <div className="font-['Inter'] text-[9px] tracking-[0.32em] text-white/40 mb-1">
                      {String(project.id).padStart(2, "0")}.
                    </div>
                    <h3 className="font-['Bebas_Neue'] text-2xl leading-tight mb-1 text-white">
                      {(lang === "fr" ? project.titleFr : project.title).replace("\n", " ")}
                    </h3>
                    <p className="font-['Inter'] text-[10px] tracking-wider text-white/40 uppercase">
                      {lang === "fr" ? project.categoryFr : project.category}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
