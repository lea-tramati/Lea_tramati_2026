import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { projects } from "../data/projects";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workMenuOpen, setWorkMenuOpen] = useState(false);
  const { lang, toggle } = useLang();
  const t = translations[lang].nav;

  const publishedProjects = projects.filter((p) => !p.draft || import.meta.env.DEV);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        onMouseLeave={() => setWorkMenuOpen(false)}
        className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <Link
              to="/"
              className="font-['Inter'] text-lg tracking-[0.12em] uppercase text-white hover:text-gray-300 transition-colors"
            >
              Léa Tramati
            </Link>
            <span className="hidden sm:inline font-['Inter'] text-[10px] tracking-[0.15em] uppercase text-white/40">
              Graphic Designer Student
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/work"
              onMouseEnter={() => setWorkMenuOpen(true)}
              className="font-['Inter'] text-[11px] tracking-[0.26em] uppercase text-white/60 hover:text-white transition-colors"
            >
              {t.work}
            </Link>
            <Link
              to="/cv"
              className="font-['Inter'] text-[11px] tracking-[0.26em] uppercase text-white/60 hover:text-white transition-colors"
            >
              {t.cv}
            </Link>
            <a
              href="mailto:tramatilea@gmail.com"
              className="font-['Inter'] text-[11px] tracking-[0.26em] uppercase text-white/60 hover:text-white transition-colors"
            >
              {t.contact}
            </a>
            <button
              onClick={toggle}
              className="font-['Inter'] text-[11px] tracking-[0.26em] uppercase text-white/60 hover:text-white transition-colors border border-white/25 px-2 py-1"
            >
              {t.lang}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-px bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Selected work mega-menu */}
        <AnimatePresence>
          {workMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="hidden md:block border-t border-white/10 bg-black"
            >
              <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-x-8 gap-y-2">
                {publishedProjects.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/project/${p.slug}`}
                    onClick={() => setWorkMenuOpen(false)}
                    className="font-['Inter'] text-[11px] tracking-[0.12em] uppercase text-white/55 hover:text-white transition-colors py-1"
                  >
                    {(lang === "fr" ? p.titleFr : p.title).replace("\n", " ")}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-black border-l border-white/10 z-[60] flex flex-col pt-24 px-10 gap-8"
          >
            <Link
              to="/work"
              onClick={() => setMenuOpen(false)}
              className="font-['Inter'] text-5xl text-white border-b border-white/10 pb-4"
            >
              {t.work}
            </Link>
            <Link
              to="/cv"
              onClick={() => setMenuOpen(false)}
              className="font-['Inter'] text-5xl text-white border-b border-white/10 pb-4"
            >
              {t.cv}
            </Link>
            <a
              href="mailto:tramatilea@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="font-['Inter'] text-5xl text-white border-b border-white/10 pb-4"
            >
              {t.contact}
            </a>
            <button
              onClick={() => { toggle(); setMenuOpen(false); }}
              className="font-['Inter'] text-sm tracking-widest uppercase text-white/50 text-left"
            >
              {t.lang}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[55]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
