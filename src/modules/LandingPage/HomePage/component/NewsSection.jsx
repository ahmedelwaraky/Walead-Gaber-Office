// ═══════════════════════════════════════
//  NewsSection.jsx
// ═══════════════════════════════════════

import { useState, useRef } from "react";
import { useInView, SecHeader } from "./globals";

const NEWS = [
  {
    id: "n1",
    cat: "قانون",
    date: "25 فبراير 2026",
    letter: "ق",
    color1: "#1a3a7c",
    color2: "#0c1d40",
    title: "دليل شامل لتأسيس الشركات",
    desc: "خطوات تأسيس شركتك من الألف إلى الياء مع نصائح قانونية مهمة",
  },
  {
    id: "n2",
    cat: "محاسبة",
    date: "1 مارس 2026",
    letter: "م",
    color1: "#0f3d3a",
    color2: "#0c1d40",
    title: "أهمية التحول الرقمي في المحاسبة",
    desc: "كيف يمكن للتكنولوجيا أن تحسن كفاءة العمليات المحاسبية في مؤسستك",
  },
  {
    id: "n3",
    cat: "ضرائب",
    date: "5 مارس 2026",
    letter: "ض",
    color1: "#3a1a0c",
    color2: "#0c1d40",
    title: "تحديثات جديدة في قوانين الضرائب لعام 2026",
    desc: "تعرف على أهم التعديلات في النظام الضريبي وتأثيرها على الشركات والأفراد",
  },
];

export default function NewsSection() {
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section
      id="news"
      ref={ref}
      dir="rtl"
      className="ft relative overflow-hidden py-28"
      style={{ background: "linear-gradient(160deg,#f9f6f0 0%,#fdf9f2 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fo absolute rounded-full" style={{ width: 500, height: 500, top: -150, right: -150, background: "radial-gradient(circle,rgba(212,168,67,0.055) 0%,transparent 70%)", filter: "blur(65px)" }} />
        <div className="absolute inset-0 dot-grid" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className={visible ? "ru" : "opacity-0"}>
          <SecHeader badge="آخر المستجدات" pre="آخر " hi="الأخبار" sub="آخر المستجدات في عالم المحاسبة والضرائب والقوانين المالية" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <div
              key={n.id}
              className={`nc rounded-3xl border overflow-hidden cursor-pointer ${visible ? "si" : "opacity-0"}`}
              style={{
                background: "rgba(255,255,255,0.92)",
                borderColor: hovered === n.id ? "rgba(212,168,67,0.3)" : "rgba(212,168,67,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                animationDelay: `${0.1 * i}s`,
              }}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Thumbnail */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg,${n.color1},${n.color2})` }}
              >
                <span
                  className="ntl text-[100px] font-black select-none"
                >
                  {n.letter}
                </span>
                {/* Dot overlay */}
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold bg-gold" style={{ color: "#050d1f", boxShadow: "0 4px 14px rgba(212,168,67,0.4)" }}>
                  {n.cat}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "#9ca3af" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {n.date}
                </div>
                <h3 className="font-black text-lg mb-2 leading-tight" style={{ color: "#1f2937" }}>{n.title}</h3>
                <p className="text-sm leading-6 mb-5" style={{ color: "#6b7280" }}>{n.desc}</p>
                <div
                  className="nr inline-flex items-center gap-2 text-sm font-bold"
                  style={{ color: hovered === n.id ? "#d4a843" : "rgba(212,168,67,0.6)" }}
                >
                  اقرأ المزيد
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className={`text-center mt-12 ${visible ? "ru" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <button
            className="ft inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold cursor-pointer border transition-all"
            style={{ borderColor: "rgba(212,168,67,0.35)", color: "#92600d", background: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,168,67,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = ""; }}
          >
            عرض جميع الأخبار
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}