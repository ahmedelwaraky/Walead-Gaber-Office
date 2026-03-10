// ═══════════════════════════════════════
//  PartnersSection.jsx
// ═══════════════════════════════════════

import { useRef } from "react";
import { useInView, SecHeader } from "./globals";

const PARTNER_ICONS = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: "عقارات" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, label: "وثائق" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, label: "مالية" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, label: "أعمال" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "حماية" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>, label: "تقنية" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, label: "استثمار" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20V10M17 20V4M22 20h.01"/></svg>, label: "إنتاج" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M21 12h-2M19.07 19.07l-1.41-1.41M12 21v-2M6.34 17.66l-1.41 1.41M3 12H1M6.34 6.34L4.93 4.93"/></svg>, label: "طاقة" },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const track = [...PARTNER_ICONS, ...PARTNER_ICONS];

  return (
    <section
      id="partners"
      ref={ref}
      dir="rtl"
      className="ft relative overflow-hidden py-24"
      style={{ background: "linear-gradient(160deg,#fefcf7 0%,#fdf8f0 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="fo absolute rounded-full" style={{ width: 600, height: 300, top: -100, left: -200, background: "radial-gradient(circle,rgba(212,168,67,0.06) 0%,transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className={visible ? "ru" : "opacity-0"}>
          <SecHeader badge="عملاؤنا" pre="شركاء " hi="النجاح" sub="نفتخر بثقة عملائنا وشراكتنا مع أبرز المؤسسات" />
        </div>

        {/* Marquee */}
        <div className={`relative overflow-hidden ${visible ? "ru" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="absolute top-0 bottom-0 right-0 w-28 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg,#fefcf7,transparent)" }} />
          <div className="absolute top-0 bottom-0 left-0 w-28 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg,#fefcf7,transparent)" }} />

          <div className="mq-track gap-7 py-3">
            {track.map((p, i) => (
              <div key={i} className="porb flex flex-col items-center gap-3" style={{ minWidth: 90 }}>
                <div
                  className="pb w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "linear-gradient(135deg,#0c1d40,#1a3570)", boxShadow: "0 6px 24px rgba(15,36,83,0.22)" }}
                >
                  <span className="pi transition-colors duration-300" style={{ color: "#d4a843" }}>{p.icon}</span>
                </div>
                <span className="text-xs font-semibold" style={{ color: "#6b7280" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-5 mt-12 ${visible ? "ru" : "opacity-0"}`} style={{ animationDelay: "0.35s" }}>
          {[{ n: "120+", l: "عميل مؤسسي" }, { n: "15+", l: "قطاع متخصص" }, { n: "98%", l: "معدل الرضا" }].map(({ n, l }) => (
            <div key={l} className="text-center rounded-2xl py-6 px-4 border"
              style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(212,168,67,0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div className="text-3xl font-black mb-2 tg">{n}</div>
              <div className="text-sm" style={{ color: "#6b7280" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}