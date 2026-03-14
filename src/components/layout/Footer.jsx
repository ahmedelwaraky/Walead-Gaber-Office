import { useTranslation } from "react-i18next";

const QUICK_LINKS = [
  { key: "home",     id: "hero"     },
  { key: "about",    id: "about"    },
  { key: "services", id: "services" },
  { key: "news",     id: "news"     },
  { key: "contact",  id: "contact"  },
];

const SOCIAL_ICONS = [
  <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  <svg key="li" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  <svg key="tw" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
  <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const dir  = isAr ? "rtl" : "ltr";

  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      dir={dir}
      className="ft relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060e22 0%,#040b1a 100%)" }}
    >
      {/* Top gold line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg,transparent,rgba(212,168,67,0.35),transparent)" }} />

      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="oa absolute rounded-full" style={{ width: 400, height: 400, top: -200, right: -100, background: "radial-gradient(circle,rgba(212,168,67,0.04) 0%,transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 hero-grid" style={{ opacity: 0.35 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* ── Column 1: Brand ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg bg-gold shrink-0"
                style={{ color: "#050d1f" }}
              >
                {isAr ? "م" : "W"}
              </div>
              <span className="text-white text-[15px] font-extrabold tracking-tight">
                {t("footer.brand_name")}
              </span>
            </div>

            <p className="text-sm leading-7 mb-5" style={{ color: "rgba(255,255,255,0.48)" }}>
              {t("footer.brand_desc")}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_ICONS.map((icon, i) => (
                <button
                  key={i}
                  className="so-btn w-9 h-9 rounded-xl flex items-center justify-center border cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* ── Column 2: Quick links ── */}
          <div>
            <h4 className="font-bold text-[15px] mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>
              {t("footer.quick_links_title")}
            </h4>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className="fl-link ft flex items-center gap-2 text-sm border-0 cursor-pointer bg-transparent p-0"
                    style={{ color: "rgba(255,255,255,0.52)" }}
                  >
                    <svg
                      width="10" height="10" viewBox="0 0 24 24" fill="none"
                      stroke="#d4a843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: isAr ? "scaleX(1)" : "scaleX(-1)" }}
                    >
                      <path d="M19 12H5M12 5l-7 7 7 7"/>
                    </svg>
                    {t(`footer.links.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact info ── */}
          <div>
            <h4 className="font-bold text-[15px] mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>
              {t("footer.contact_title")}
            </h4>
            <ul className="flex flex-col gap-4 list-none m-0 p-0">

              {/* العنوان */}
              <li className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {t("footer.address")}
              </li>

              {/* الهاتف */}
              <li className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span dir="ltr">{t("footer.phone")}</span>
              </li>

              {/* الإيميل */}
              <li className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span dir="ltr">{t("footer.email")}</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}