import { useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Image as ImageIcon } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { projects, type Project } from "../data/projects";
import { useLang } from "../context/LanguageContext";
import { translations, type Translations } from "../i18n/translations";
import { usePageTitle } from "../hooks/usePageTitle";

const base = import.meta.env.BASE_URL;

// Curated set of projects shown on the homepage: first and last are full-bleed, the two in between sit side by side.
const featuredSlugs = ["zaha-hadid", "baskerville", "nomadic-workplace", "haute-couture"];

function FullBleedTile({ project, lang, t }: { project: Project; lang: "en" | "fr"; t: Translations }) {
  const title = (lang === "fr" ? project.titleFr : project.title).replace("\n", " ");
  return (
    <Link to={`/project/${project.slug}`} className="group block relative w-full h-screen overflow-hidden">
      {project.coverPlaceholder ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-white/[0.03] border border-dashed border-white/15">
          <ImageIcon className="w-6 h-6 text-white/20" strokeWidth={1} />
          <span className="font-['Inter'] text-[9px] tracking-[0.25em] uppercase text-white/25">
            {t.project.imagePlaceholder}
          </span>
        </div>
      ) : (
        <motion.img
          src={`${base}${project.cover}`}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
        />
      )}
      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors duration-300 pointer-events-none" />
    </Link>
  );
}


export default function HomePage() {
  usePageTitle();
  const { lang } = useLang();
  const t = translations[lang];
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const publishedProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white overflow-x-hidden"
    >
      <Nav />

      {/* Hero */}
      <section id="hero" className="min-h-screen relative pt-32 pb-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={`${base}video/remanence-bg.mp4`}
          poster={`${base}video/remanence-bg-poster.jpg`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full relative min-h-[85vh]">
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

      {/* Work: two full-bleed projects bookending a pair of contained projects side by side */}
      <section id="work" className="bg-black">
        {publishedProjects[0] && <FullBleedTile project={publishedProjects[0]} lang={lang} t={t} />}

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {publishedProjects[1] && <FullBleedTile project={publishedProjects[1]} lang={lang} t={t} />}
          {publishedProjects[2] && <FullBleedTile project={publishedProjects[2]} lang={lang} t={t} />}
        </div>

        {publishedProjects[3] && <FullBleedTile project={publishedProjects[3]} lang={lang} t={t} />}
      </section>

      <Footer />
    </motion.div>
  );
}
