import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getProject, type ProjectImage } from "../data/projects";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { usePageTitle } from "../hooks/usePageTitle";

const base = import.meta.env.BASE_URL;

function ImageSection({ block }: { block: ProjectImage }) {
  if (block.type === "full") {
    return (
      <section className="mb-6">
        <img src={`${base}${block.srcs[0]}`} alt={block.alts[0]} className="w-full object-cover" loading="lazy" />
      </section>
    );
  }
  if (block.type === "grid2") {
    return (
      <section className="mb-6 grid grid-cols-2 gap-3">
        {block.srcs.map((src, i) => (
          <img key={i} src={`${base}${src}`} alt={block.alts[i]} className="w-full object-cover aspect-[4/5]" />
        ))}
      </section>
    );
  }
  if (block.type === "grid3") {
    return (
      <section className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {block.srcs.map((src, i) => (
          <img key={i} src={`${base}${src}`} alt={block.alts[i]} className="w-full object-cover aspect-square" />
        ))}
      </section>
    );
  }
  return null;
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug ?? "");
  const { lang } = useLang();
  const t = translations[lang].project;

  if (!project) return <Navigate to="/" replace />;

  const title       = lang === "fr" ? project.titleFr       : project.title;
  const description = lang === "fr" ? project.descriptionFr : project.description;
  const category    = lang === "fr" ? project.categoryFr    : project.category;

  usePageTitle(title.replace("\n", " "));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white"
    >
      <Nav />

      {/* Titre */}
      <section className="pt-40 pb-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-['Inter'] text-[10px] tracking-[0.30em] uppercase text-white/40 block mb-6">
              {project.eyebrow}
            </span>
            <h1 className="font-['Bebas_Neue'] text-[clamp(3.5rem,8vw,9rem)] leading-[0.88] text-white whitespace-pre-line">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Image principale */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="w-full">
        <img
          src={`${base}${project.heroImage ?? project.cover}`}
          alt={title.replace("\n", " ")}
          className="w-full max-h-[80vh] object-cover"
        />
      </motion.section>

      {/* Description */}
      <section className="py-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-['Bebas_Neue'] text-3xl text-white mb-3">{t.description}</h2>
          </div>
          <div className="md:col-span-2">
            <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">{description}</p>
            <div className="mt-6">
              <span className="font-['Inter'] text-[9px] tracking-[0.30em] uppercase text-white/40">
                {category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      {project.images.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {project.images.map((block, i) => (
              <ImageSection key={i} block={block} />
            ))}
          </div>
        </section>
      )}

      {/* Navigation précédent / suivant */}
      <section className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            {project.prev ? (
              <Link to={`/project/${project.prev.slug}`} className="group block">
                <span className="font-['Inter'] text-[9px] tracking-[0.28em] uppercase text-white/40 block mb-2">
                  {t.prev}
                </span>
                <span className="font-['Bebas_Neue'] text-2xl text-white group-hover:text-gray-400 transition-colors">
                  ← {lang === "fr" ? project.prev.nameFr : project.prev.name}
                </span>
              </Link>
            ) : (
              <Link to="/" className="group block">
                <span className="font-['Inter'] text-[9px] tracking-[0.28em] uppercase text-white/40 block mb-2">
                  {t.back}
                </span>
                <span className="font-['Bebas_Neue'] text-2xl text-white group-hover:text-gray-400 transition-colors">
                  ← {t.allWorks}
                </span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {project.next ? (
              <Link to={`/project/${project.next.slug}`} className="group block">
                <span className="font-['Inter'] text-[9px] tracking-[0.28em] uppercase text-white/40 block mb-2">
                  {t.next}
                </span>
                <span className="font-['Bebas_Neue'] text-2xl text-white group-hover:text-gray-400 transition-colors">
                  {lang === "fr" ? project.next.nameFr : project.next.name} →
                </span>
              </Link>
            ) : (
              <Link to="/" className="group block">
                <span className="font-['Inter'] text-[9px] tracking-[0.28em] uppercase text-white/40 block mb-2">
                  {t.back}
                </span>
                <span className="font-['Bebas_Neue'] text-2xl text-white group-hover:text-gray-400 transition-colors">
                  {t.allWorks} →
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
