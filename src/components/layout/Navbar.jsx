import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isAr = i18n.language === "ar";
  const dir = isAr ? "rtl" : "ltr";

  const NAV_LINKS = [
    { key: "home", href: "#", active: true },
    { key: "about", href: "#about" },
    { key: "services", href: "#services" },
    { key: "partners", href: "#partners" },
    { key: "news", href: "#news" },
    { key: "courses", href: "#courses" },
    { key: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language, dir]);

  const toggleLang = () => {
    i18n.changeLanguage(isAr ? "en" : "ar");
  };

  return (
    <>
      <nav
        dir={dir}
        className={`fixed top-0 right-0 left-0 z-50 h-20 flex items-center justify-between px-6 md:px-10 transition-all duration-400 ${
          scrolled
            ? "border-b border-yellow-700/30 shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
            : "border-b border-yellow-700/10"
        }`}
        style={{
          background: scrolled
            ? "rgba(5,13,31,0.98)"
            : "linear-gradient(180deg,rgba(5,13,31,0.96) 0%,rgba(5,13,31,0.82) 100%)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
        <a href="#" className="flex items-center gap-3 shrink-0 no-underline">
          <div
            className="logo-shine relative w-11 h-11 rounded-xl flex items-center justify-center text-xl font-black overflow-hidden"
            style={{
              background: "linear-gradient(135deg,#d4a843,#f0c96a)",
              color: "#050d1f",
              boxShadow: "0 4px 20px rgba(212,168,67,0.3)",
            }}
          >
            م
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white text-base font-extrabold tracking-tight">
              {t("logo.title")}
            </span>
            <span
              className="text-xs font-normal tracking-widest mt-0.5"
              style={{ color: "#d4a843" }}
            >
              {t("logo.subtitle")}
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className={`nav-link-underline block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 no-underline ${
                  link.active
                    ? "active text-yellow-300"
                    : "text-white/70 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                {t(`nav.${link.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleLang}
            className="btn-lang px-3 py-2 rounded-lg text-xs font-bold border cursor-pointer flex items-center gap-1.5"
            style={{
              borderColor: "rgba(212,168,67,0.35)",
              color: "#d4a843",
              background: "transparent",
            }}
          >
            <span style={{ fontSize: "15px" }}>{isAr ? "🇬🇧" : "🇸🇦"}</span>
            {t("lang")}
          </button>
        </div>

        <button
          className={`lg:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer bg-transparent border-0 ${menuOpen ? "ham-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="ham-line block w-6 h-0.5 rounded"
              style={{ background: "#d4a843" }}
            />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div
          dir={dir}
          className="mobile-menu fixed top-20 right-0 left-0 z-40 border-b border-yellow-700/20 px-6 py-4 flex flex-col gap-1 lg:hidden"
          style={{
            background: "rgba(5,13,31,0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all duration-200 ${
                link.active
                  ? "text-yellow-300 bg-yellow-400/10"
                  : "text-white/70 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <div className="flex gap-3 pt-3 mt-1 border-t border-white/10">
            <button
              onClick={toggleLang}
              className="btn-lang px-3 py-2.5 rounded-xl text-xs font-bold border cursor-pointer flex items-center justify-center gap-1.5"
              style={{
                borderColor: "rgba(212,168,67,0.4)",
                color: "#d4a843",
                background: "transparent",
              }}
            >
              <span style={{ fontSize: "15px" }}>{isAr ? "🇬🇧" : "🇸🇦"}</span>
              {t("lang")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
