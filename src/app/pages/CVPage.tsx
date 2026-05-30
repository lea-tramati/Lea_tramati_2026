import { motion } from "motion/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { usePageTitle } from "../hooks/usePageTitle";

export default function CVPage() {
  const { lang } = useLang();
  const t = translations[lang].cv;
  usePageTitle("CV");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white"
    >
      <Nav />

      <main className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-16"
          >
            {/* LEFT */}
            <aside className="space-y-12">
              <div>
                <div className="font-['Inter'] text-[9px] tracking-[0.34em] uppercase text-white/40 mb-4">
                  {t.contact}
                </div>
                <div className="font-['Inter'] text-sm text-gray-300 space-y-1 leading-relaxed">
                  <div>Amiens, France</div>
                  <a href="mailto:tramatilea@gmail.com" className="block hover:text-white transition-colors">
                    tramatilea@gmail.com
                  </a>
                  <a href="https://instagram.com/ltrmti" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                    @ltrmti
                  </a>
                </div>
              </div>

              <div>
                <div className="font-['Inter'] text-[9px] tracking-[0.34em] uppercase text-white/40 mb-4">
                  {t.software}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {t.softwareList.map((s) => (
                    <span key={s} className="font-['Inter'] text-xs text-white/70 border border-white/15 px-3 py-1.5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-['Inter'] text-[9px] tracking-[0.34em] uppercase text-white/40 mb-4">
                  {t.languages}
                </div>
                <ul className="font-['Inter'] text-sm text-gray-300 space-y-2">
                  {t.languageList.map((l) => (
                    <li key={l.lang}>
                      <strong className="text-white">{l.lang}</strong> — {l.level}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-['Inter'] text-[9px] tracking-[0.34em] uppercase text-white/40 mb-4">
                  {t.skills}
                </div>
                <ul className="font-['Inter'] text-sm text-gray-300 space-y-2">
                  {t.skillList.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-white/30">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* RIGHT */}
            <article className="md:col-span-2 space-y-16">
              <div>
                <h1 className="font-['Bebas_Neue'] text-[clamp(4rem,8vw,9rem)] leading-[0.88] text-white mb-6">
                  Léa<br />Tramati
                </h1>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-['Inter'] text-xs tracking-wider text-white/40">→</span>
                  <span className="font-['Inter'] text-xs tracking-[0.20em] uppercase border border-white/20 px-3 py-1 text-white/60">
                    {t.tag}
                  </span>
                </div>
                <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed max-w-xl">
                  {t.profile}
                </p>
              </div>

              {/* Experiences */}
              <section>
                <h2 className="font-['Bebas_Neue'] text-4xl text-white mb-8 border-b border-white/10 pb-4">
                  {t.experiences}
                </h2>
                <div className="space-y-8">
                  {t.exp.map((exp) => (
                    <article key={exp.title} className="grid grid-cols-4 gap-6">
                      <div className="font-['Inter'] text-xs text-white/40 tracking-wider pt-0.5">
                        {exp.year}
                      </div>
                      <div className="col-span-3">
                        <h3 className="font-['Archivo_Narrow'] text-base font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <ul className="font-['Inter'] text-sm text-gray-400 space-y-1">
                          {exp.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-white/20">—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="font-['Bebas_Neue'] text-4xl text-white mb-8 border-b border-white/10 pb-4">
                  {t.education}
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {t.edu.map((edu) => (
                    <article key={edu.title} className="border border-white/10 p-5">
                      <div className="font-['Inter'] text-[10px] tracking-wider text-white/40 mb-3">
                        {edu.year}
                      </div>
                      <div className="font-['Archivo_Narrow'] text-base font-semibold text-white mb-1">
                        {edu.title}
                      </div>
                      <div className="font-['Inter'] text-xs text-white/50">
                        {edu.institution}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </article>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
