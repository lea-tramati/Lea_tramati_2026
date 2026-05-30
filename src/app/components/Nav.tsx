import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { lang, toggle } = useLang();
  const t = translations[lang].nav;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="font-['Archivo_Narrow'] text-xs font-semibold tracking-[0.30em] uppercase text-white hover:text-gray-300 transition-colors"
          >
            Léa Tramati
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-['Inter'] text-[10px] tracking-[0.26em] uppercase text-white/45 hover:text-white transition-colors"
            >
              {isHome ? t.work : t.workBack}
            </Link>
            <Link
              to="/cv"
              className="font-['Inter'] text-[10px] tracking-[0.26em] uppercase text-white/45 hover:text-white transition-colors"
            >
              {t.cv}
            </Link>
            <a
              href="mailto:tramatilea@gmail.com"
              className="font-['Inter'] text-[10px] tracking-[0.26em] uppercase text-white/45 hover:text-white transition-colors"
            >
              {t.contact}
            </a>
            <button
              onClick={toggle}
              className="font-['Inter'] text-[10px] tracking-[0.26em] uppercase text-white/45 hover:text-white transition-colors border border-white/20 px-2 py-1"
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
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-['Bebas_Neue'] text-5xl text-white border-b border-white/10 pb-4"
            >
              {t.work}
            </Link>
            <Link
              to="/cv"
              onClick={() => setMenuOpen(false)}
              className="font-['Bebas_Neue'] text-5xl text-white border-b border-white/10 pb-4"
            >
              {t.cv}
            </Link>
            <a
              href="mailto:tramatilea@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="font-['Bebas_Neue'] text-5xl text-white border-b border-white/10 pb-4"
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
