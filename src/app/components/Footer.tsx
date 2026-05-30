import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const base = import.meta.env.BASE_URL;

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-['Bebas_Neue'] text-6xl mb-4 text-white">CONTACT</h3>
            <p className="font-['Inter'] text-gray-400 text-sm leading-relaxed max-w-md">
              {t.tagline}
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
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="https://instagram.com/ltrmti"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter'] text-xs tracking-wider text-gray-500 hover:text-white transition-colors uppercase"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/in/léa-tramati-936222345"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter'] text-xs tracking-wider text-gray-500 hover:text-white transition-colors uppercase"
              >
                LinkedIn
              </a>
              <a
                href={`${base}portfolio.pdf`}
                download
                className="font-['Inter'] text-xs tracking-wider text-gray-500 hover:text-white transition-colors uppercase"
              >
                {t.downloadPdf}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex justify-between">
          <span className="font-['Inter'] text-[9px] tracking-[0.22em] uppercase text-white/35">
            {t.copyright}
          </span>
          <span className="font-['Inter'] text-[9px] tracking-[0.22em] uppercase text-white/35">
            ESAD Amiens
          </span>
        </div>
      </div>
    </footer>
  );
}
