// ═══════════════════════════════════════
//  Footer.jsx
// ═══════════════════════════════════════

const QUICK_LINKS = [
  { label: "الرئيسية",   id: "hero"     },
  { label: "عن الشركة",  id: "about"    },
  { label: "الخدمات",   id: "services" },
  { label: "الأخبار",   id: "news"     },
  { label: "تواصل معنا", id: "contact"  },
];

const SOCIAL_ICONS = [
  // Instagram
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  // LinkedIn
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  // Twitter / X
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
  // Facebook
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
];

export default function Footer() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      dir="rtl"
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
                م
              </div>
              <span className="text-white text-[15px] font-extrabold tracking-tight">المكتب المالي</span>
            </div>

            <p className="text-sm leading-7 mb-5" style={{ color: "rgba(255,255,255,0.48)" }}>
              مكتب متخصص في تقديم الخدمات المحاسبية والاستشارات المالية والقانونية بأعلى معايير الجودة والاحترافية.
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
            <h4 className="font-bold text-[15px] mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>روابط سريعة</h4>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => goTo(link.id)}
                    className="fl-link ft flex items-center gap-2 text-sm border-0 cursor-pointer bg-transparent p-0"
                    style={{ color: "rgba(255,255,255,0.52)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 5l-7 7 7 7"/>
                    </svg>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact info ── */}
          <div>
            <h4 className="font-bold text-[15px] mb-5" style={{ color: "rgba(255,255,255,0.85)" }}>تواصل معنا</h4>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {["الرياض، حي العليا", "+966 11 234 5678", "info@almaliconsulting.com"].map((text, i) => (
                <li key={i} className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 المكتب المالي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}