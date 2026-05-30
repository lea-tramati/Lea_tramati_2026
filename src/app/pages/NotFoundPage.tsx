import { Link } from "react-router";
import { motion } from "motion/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFoundPage() {
  usePageTitle("404");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Bebas_Neue'] text-[20vw] leading-none text-white/10 select-none">
            404
          </div>
          <p className="font-['Inter'] text-xs tracking-[0.30em] uppercase text-white/40 mb-10 -mt-4">
            Page not found
          </p>
          <Link
            to="/"
            className="font-['Inter'] text-xs tracking-[0.20em] uppercase border border-white/30 px-8 py-3 text-white hover:bg-white hover:text-black transition-colors inline-block"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
