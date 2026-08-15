import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { projects, type Project } from "../data/projects";
import { useLang } from "../context/LanguageContext";
import { usePageTitle } from "../hooks/usePageTitle";

const base = import.meta.env.BASE_URL;

export default function WorkPage() {
  usePageTitle("Work");
  const { lang } = useLang();

  const publishedProjects = projects.filter((p) => !p.draft || import.meta.env.DEV);

  const [hovered, setHovered] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white"
    >
      <Nav />

      <section
        className="pt-32 pb-20"
        onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      >
        <div className="border-t border-white/10">
          {publishedProjects.map((project, i) => {
            const title = (lang === "fr" ? project.titleFr : project.title).replace("\n", " ");
            const category = lang === "fr" ? project.categoryFr : project.category;
            return (
              <Link
                key={project.id}
                to={`/project/${project.slug}`}
                onMouseEnter={() => setHovered(project)}
                onMouseLeave={() => setHovered(null)}
                className="group flex items-center justify-between gap-6 border-b border-white/10 px-6 md:px-16 py-6 md:py-8 transition-colors hover:bg-white/[0.03]"
              >
                <span className="font-['Inter'] text-[10px] tracking-[0.3em] text-white/40 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-['Inter'] text-3xl md:text-6xl uppercase tracking-tight text-white flex-1 transition-opacity duration-300 group-hover:opacity-50">
                  {title}
                </h2>
                <span className="hidden sm:block font-['Inter'] text-[10px] tracking-[0.3em] uppercase text-white/40 shrink-0">
                  {category}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cursor-following preview */}
      <AnimatePresence>
        {hovered && !hovered.coverPlaceholder && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="fixed z-40 w-64 h-80 overflow-hidden pointer-events-none hidden md:block"
            style={{ left: mousePos.x + 28, top: mousePos.y - 160 }}
          >
            <img
              src={`${base}${hovered.cover}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
}
