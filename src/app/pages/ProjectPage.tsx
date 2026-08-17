import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { Image as ImageIcon } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getProject, type ProjectImage, type AsymmetricItem } from "../data/projects";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { usePageTitle } from "../hooks/usePageTitle";

const base = import.meta.env.BASE_URL;

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-white/[0.03] border border-dashed border-white/15">
      <ImageIcon className="w-5 h-5 text-white/20" strokeWidth={1} />
      <span className="font-['Inter'] text-[8px] tracking-[0.25em] uppercase text-white/25 text-center px-4">
        {label}
      </span>
    </div>
  );
}

function GalleryImage({ item, aspect, placeholderLabel }: { item?: AsymmetricItem; aspect: string; placeholderLabel: string }) {
  if (!item) return null;
  return (
    <div className={`w-full ${aspect} overflow-hidden`}>
      {item.video ? (
        <video
          src={`${base}${item.video}`}
          aria-label={item.alt}
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
        />
      ) : item.placeholder || !item.src ? (
        <ImagePlaceholder label={placeholderLabel} />
      ) : (
        <img src={`${base}${item.src}`} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
      )}
    </div>
  );
}

function ImageSection({ block, placeholderLabel }: { block: ProjectImage; placeholderLabel: string }) {
  if (block.type === "full") {
    return (
      <section className="mb-6">
        <img src={`${base}${block.srcs[0]}`} alt={block.alts[0]} className="w-full object-cover" loading="lazy" />
      </section>
    );
  }
  if (block.type === "video-full") {
    return (
      <section className="mb-6">
        <video
          src={`${base}${block.srcs[0]}`}
          aria-label={block.alts[0]}
          className="w-full object-cover"
          controls
          playsInline
          preload="metadata"
        />
      </section>
    );
  }
  if (block.type === "grid2") {
    return (
      <section className="mb-6 grid grid-cols-2 gap-3">
        {block.srcs.map((src, i) => (
          <img key={i} src={`${base}${src}`} alt={block.alts[i]} className={`w-full object-cover ${block.cellAspect ?? "aspect-[4/5]"}`} />
        ))}
      </section>
    );
  }
  if (block.type === "grid3") {
    return (
      <section className={`mb-6 grid grid-cols-2 md:grid-cols-3 ${block.gapClass ?? "gap-3"}`}>
        {block.srcs.map((src, i) => (
          <div key={i} className={`${block.cellAspect ?? "aspect-square"} ${block.frameClass ?? ""}`}>
            <img src={`${base}${src}`} alt={block.alts[i]} className="w-full h-full object-cover" />
          </div>
        ))}
      </section>
    );
  }
  if (block.type === "asymmetric") {
    const [primary, secTop, secBottom] = block.items ?? [];
    return (
      <section className="mb-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="md:col-span-7">
          <GalleryImage item={primary} aspect="aspect-[3/4]" placeholderLabel={placeholderLabel} />
        </div>
        <div className="md:col-span-5 flex flex-col gap-4 md:gap-6 md:pt-14">
          <GalleryImage item={secTop} aspect="aspect-square" placeholderLabel={placeholderLabel} />
          <div className="md:pl-10">
            <GalleryImage item={secBottom} aspect="aspect-[4/3]" placeholderLabel={placeholderLabel} />
          </div>
        </div>
      </section>
    );
  }
  if (block.type === "asymmetric-mirror") {
    const [secTop, secBottom, primary] = block.items ?? [];
    return (
      <section className="mb-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="order-2 md:order-1 md:col-span-5 flex flex-col gap-4 md:gap-6 md:pb-14">
          <div className="md:pr-10">
            <GalleryImage item={secTop} aspect="aspect-[4/3]" placeholderLabel={placeholderLabel} />
          </div>
          <GalleryImage item={secBottom} aspect="aspect-square" placeholderLabel={placeholderLabel} />
        </div>
        <div className="order-1 md:order-2 md:col-span-7">
          <GalleryImage item={primary} aspect="aspect-[3/4]" placeholderLabel={placeholderLabel} />
        </div>
      </section>
    );
  }
  if (block.type === "asymmetric-hero") {
    const [hero, left, right] = block.items ?? [];
    return (
      <section className="mb-8">
        <div className="mb-4 md:mb-6">
          <GalleryImage item={hero} aspect="aspect-[16/9]" placeholderLabel={placeholderLabel} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-5">
            <GalleryImage item={left} aspect="aspect-[3/4]" placeholderLabel={placeholderLabel} />
          </div>
          {/* col 6-8 left as intentional void */}
          <div className="md:col-span-4 md:col-start-9 md:pt-12">
            <GalleryImage item={right} aspect="aspect-square" placeholderLabel={placeholderLabel} />
          </div>
        </div>
      </section>
    );
  }
  if (block.type === "asymmetric-overlap") {
    const [main, overlap] = block.items ?? [];
    return (
      <section className="mb-14 md:mb-20">
        <div className="relative w-full md:w-9/12">
          <GalleryImage item={main} aspect="aspect-[4/5]" placeholderLabel={placeholderLabel} />
          <div className="absolute -bottom-10 -right-4 md:-bottom-14 md:-right-16 w-1/2 md:w-2/5 border-4 border-black shadow-2xl">
            <GalleryImage item={overlap} aspect="aspect-[3/4]" placeholderLabel={placeholderLabel} />
          </div>
        </div>
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

  const title       = project ? (lang === "fr" ? project.titleFr       : project.title)       : "";
  const description = project ? (lang === "fr" ? project.descriptionFr : project.description) : "";
  const category    = project ? (lang === "fr" ? project.categoryFr    : project.category)    : "";

  usePageTitle(title.replace("\n", " ") || undefined);

  if (!project) return <Navigate to="/" replace />;
  if (project.draft && !import.meta.env.DEV) return <Navigate to="/" replace />;

  const prevProject = project.prev ? getProject(project.prev.slug) : null;
  const showPrev = project.prev && (!prevProject?.draft || import.meta.env.DEV);
  const nextProject = project.next ? getProject(project.next.slug) : null;
  const showNext = project.next && (!nextProject?.draft || import.meta.env.DEV);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white"
    >
      <Nav />

      {/* Titre */}
      <section className="pt-40 pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-['Inter'] text-[11px] tracking-[0.30em] uppercase text-white/55 block mb-6">
              {project.eyebrow}
            </span>
            <h1 className="font-['Inter'] text-[clamp(3.5rem,8vw,9rem)] leading-[0.88] text-white whitespace-pre-line">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Image principale */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="w-full">
        {project.coverPlaceholder && !project.heroImage ? (
          <div className="w-full h-[60vh] md:h-[80vh]">
            <ImagePlaceholder label={t.imagePlaceholder} />
          </div>
        ) : (
          <img
            src={`${base}${project.heroImage ?? project.cover}`}
            alt={title.replace("\n", " ")}
            className="w-full max-h-[80vh] object-cover"
          />
        )}
      </motion.section>

      {/* Description */}
      <section className="py-20 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-['Inter'] text-3xl text-white mb-3">{t.description}</h2>
          </div>
          <div className="md:col-span-2">
            <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">{description}</p>
            <div className="mt-6">
              <span className="font-['Inter'] text-[10px] tracking-[0.30em] uppercase text-white/55">
                {category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      {project.images.length > 0 && (
        <section className="py-12 px-[clamp(1.5rem,5vw,4rem)]">
          <div className="max-w-7xl mx-auto">
            {project.images.map((block, i) => (
              <ImageSection key={i} block={block} placeholderLabel={t.imagePlaceholder} />
            ))}
          </div>
        </section>
      )}

      {/* Navigation précédent / suivant */}
      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            {showPrev ? (
              <Link to={`/project/${project.prev!.slug}`} className="group block">
                <span className="font-['Inter'] text-[10px] tracking-[0.28em] uppercase text-white/55 block mb-2">
                  {t.prev}
                </span>
                <span className="font-['Inter'] text-2xl text-white group-hover:text-gray-400 transition-colors">
                  ← {lang === "fr" ? project.prev!.nameFr : project.prev!.name}
                </span>
              </Link>
            ) : (
              <Link to="/work" className="group block">
                <span className="font-['Inter'] text-[10px] tracking-[0.28em] uppercase text-white/55 block mb-2">
                  {t.back}
                </span>
                <span className="font-['Inter'] text-2xl text-white group-hover:text-gray-400 transition-colors">
                  ← {t.allWorks}
                </span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {showNext ? (
              <Link to={`/project/${project.next!.slug}`} className="group block">
                <span className="font-['Inter'] text-[10px] tracking-[0.28em] uppercase text-white/55 block mb-2">
                  {t.next}
                </span>
                <span className="font-['Inter'] text-2xl text-white group-hover:text-gray-400 transition-colors">
                  {lang === "fr" ? project.next!.nameFr : project.next!.name} →
                </span>
              </Link>
            ) : (
              <Link to="/work" className="group block">
                <span className="font-['Inter'] text-[10px] tracking-[0.28em] uppercase text-white/55 block mb-2">
                  {t.back}
                </span>
                <span className="font-['Inter'] text-2xl text-white group-hover:text-gray-400 transition-colors">
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
