import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ChevronDown } from "lucide-react";
import img1 from "../imports/Capture_d__cran_2026-05-28_133816.png";
import img2 from "../imports/Capture_d__cran_2026-05-28_133827.png";
import img3 from "../imports/Capture_d__cran_2026-05-28_134432.png";
import img4 from "../imports/Capture_d__cran_2026-05-28_134518.png";
import img5 from "../imports/Capture_d__cran_2026-05-28_141806.png";
import img6 from "../imports/88775569b9e50e0fe6d8954631e10291.jpg";
import img7 from "../imports/5037787f-8540-4037-a66e-30838ff44c0f.jpg";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0],
  );
  const heroRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "TYPOGRAPHY MANIFESTO",
      category: "EDITORIAL DESIGN",
      image: img1,
    },
    {
      id: 2,
      title: "FRITZ MAGAZINE",
      category: "PRINT DESIGN",
      image: img2,
    },
    {
      id: 3,
      title: "MILANO IDENTITY",
      category: "BRAND DESIGN",
      image: img3,
    },
    {
      id: 4,
      title: "BEING ABOVE",
      category: "CREATIVE DIRECTION",
      image: img4,
    },
    {
      id: 5,
      title: "ELITE DESIGNS",
      category: "WEB DESIGN",
      image: img5,
    },
    {
      id: 6,
      title: "AINO AGENCY",
      category: "DIGITAL EXPERIENCE",
      image: img6,
    },
    {
      id: 7,
      title: "CREATIVE STUDIO",
      category: "BRAND STRATEGY",
      image: img7,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work"];
      const scrollPosition =
        window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Composant d'image draggable comme un fichier Windows
  const FloatingImage = ({
    src,
    alt,
    delay,
    baseX,
    baseY,
    index,
  }: {
    src: string;
    alt: string;
    delay: number;
    baseX: string;
    baseY: string;
    index: number;
  }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [hasBeenDragged, setHasBeenDragged] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        drag
        dragMomentum={true}
        dragElastic={0}
        dragTransition={{
          bounceStiffness: 300,
          bounceDamping: 20,
        }}
        onDragStart={() => {
          setIsDragging(true);
          setHasBeenDragged(true);
        }}
        onDragEnd={() => setIsDragging(false)}
        whileDrag={{
          scale: 1.1,
          zIndex: 1000,
          cursor: "grabbing",
        }}
        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
        animate={{
          opacity: 1,
          scale: isDragging ? 1.1 : 1,
        }}
        transition={{
          delay,
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        style={{
          left: baseX,
          top: baseY,
          position: "absolute",
        }}
        className={`w-28 md:w-40 overflow-hidden shadow-2xl border border-white/20 ${
          index % 3 === 0
            ? "aspect-square"
            : index % 3 === 1
              ? "aspect-[3/4]"
              : "aspect-[4/5]"
        } ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          onClick={(e) => {
            if (!hasBeenDragged) {
              window.location.href = "#work";
            }
            setHasBeenDragged(false);
          }}
          onMouseDown={() => setHasBeenDragged(false)}
          className="w-full h-full relative"
        >
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
            animate={{
              filter:
                isDragging || isHovered
                  ? "invert(1)"
                  : "invert(0)",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="font-['Inter'] text-lg tracking-tight">
            LÉA TRAMATI
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Univers flottant */}
      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen relative pt-32 pb-20"
      >
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full relative min-h-[85vh]">
          {/* Images flottantes qui réagissent à la souris */}
          <FloatingImage
            src={img1}
            alt="Project 1"
            delay={0.1}
            baseX="8%"
            baseY="10%"
            index={0}
          />
          <FloatingImage
            src={img2}
            alt="Project 2"
            delay={0.15}
            baseX="72%"
            baseY="5%"
            index={1}
          />
          <FloatingImage
            src={img3}
            alt="Project 3"
            delay={0.2}
            baseX="85%"
            baseY="35%"
            index={2}
          />
          <FloatingImage
            src={img4}
            alt="Project 4"
            delay={0.25}
            baseX="12%"
            baseY="55%"
            index={3}
          />
          <FloatingImage
            src={img5}
            alt="Project 5"
            delay={0.3}
            baseX="78%"
            baseY="70%"
            index={4}
          />
          <FloatingImage
            src={img6}
            alt="Project 6"
            delay={0.35}
            baseX="15%"
            baseY="78%"
            index={5}
          />
          <FloatingImage
            src={img7}
            alt="Project 7"
            delay={0.4}
            baseX="45%"
            baseY="15%"
            index={6}
          />

          {/* Typographie centrale mixte */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none"
          >
            <h1 className="text-[18vw] md:text-[12vw] lg:text-[10rem] leading-[0.75] mb-4 text-white">
              <span className="font-['Archivo_Narrow'] tracking-[0.15em] block font-semibold">
                LÉA
              </span>
              <span className="font-['Archivo_Narrow'] tracking-[0.15em] italic block font-medium">
                TRAMATI
              </span>
            </h1>
            <p className="font-['Inter'] text-xs md:text-sm tracking-[0.25em] text-gray-400">
              GRAPHIC DESIGNER • UNIVERSE
            </p>
          </motion.div>

          {/* Bouton en bas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <a
              href="#work"
              className="px-8 py-3 bg-white text-black font-['Inter'] text-xs tracking-[0.15em] hover:bg-gray-200 transition-colors inline-block"
            >
              EXPLORE WORK
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 animate-bounce text-white" />
        </motion.div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="min-h-screen py-20 bg-black border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="font-['Inter'] text-xs tracking-[0.3em] mb-4 text-gray-500">
              SELECTED WORK
            </div>
            <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl leading-[0.9] text-white">
              SELECTED
              <br />
              PROJECTS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-white/5 mb-4 border border-white/10">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.1,
                      filter: "invert(1)",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-['Inter'] text-xs tracking-wider text-gray-500 mb-1">
                      {String(project.id).padStart(2, "0")}.
                    </div>
                    <h3 className="font-['Bebas_Neue'] text-2xl leading-tight mb-1 text-white">
                      {project.title}
                    </h3>
                    <p className="font-['Inter'] text-xs tracking-wider text-gray-500">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-['Bebas_Neue'] text-6xl mb-6 text-white">
                CONTACT
              </h3>
              <p className="font-['Inter'] text-gray-400 text-sm leading-relaxed max-w-md">
                Have a project in mind? Let's discuss how we can
                transform your vision into reality.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <div className="space-y-2 mb-8">
                <a
                  href="mailto:tramatilea@gmail.com"
                  className="font-['Inter'] text-sm tracking-wider text-white hover:text-gray-400 transition-colors block"
                >
                  TRAMATILEA@GMAIL.COM
                </a>
                <a
                  href="tel:+33613750895"
                  className="font-['Inter'] text-sm tracking-wider text-white hover:text-gray-400 transition-colors block"
                >
                  +33 6 13 75 08 95
                </a>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://instagram.com/ltrmti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] text-xs tracking-wider text-gray-500 hover:text-white transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://linkedin.com/in/léa-tramati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter'] text-xs tracking-wider text-gray-500 hover:text-white transition-colors"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8"></div>
        </div>
      </footer>
    </div>
  );
}