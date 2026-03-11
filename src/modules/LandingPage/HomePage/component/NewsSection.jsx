import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/NewsSection.css";

export default function NewsSection() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const items = t("news.items", { returnObjects: true });

  return (
    <section id="news" ref={ref} dir={dir}
      className="relative overflow-hidden py-28"
      style={{ background:"linear-gradient(160deg,#f9f6f0 0%,#fdf9f2 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="news-orb absolute rounded-full"
          style={{ width:500,height:500,top:-150,right:-150,background:"radial-gradient(circle,rgba(212,168,67,0.055) 0%,transparent 70%)",filter:"blur(65px)" }}/>
        <div className="absolute inset-0" style={{
          backgroundImage:"radial-gradient(circle,rgba(212,168,67,0.07) 1px,transparent 1px)",
          backgroundSize:"40px 40px",
          maskImage:"radial-gradient(ellipse 70% 70% at 50% 50%,black 20%,transparent 100%)",
          WebkitMaskImage:"radial-gradient(ellipse 70% 70% at 50% 50%,black 20%,transparent 100%)",
        }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={`text-center mb-12 ${visible ? "news-reveal" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{ background:"rgba(212,168,67,0.1)",borderColor:"rgba(212,168,67,0.3)",color:"#9a6f1a" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>
            {t("news.badge")}
          </div>
          <h2 className="font-black mb-3" style={{ fontSize:"clamp(28px,4vw,44px)",color:"#111827" }}>
            {t("news.heading_plain")}{" "}
            <span className="text-gold-grad">{t("news.heading_gold")}</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color:"#6b7280" }}>
            {t("news.subheading")}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,transparent,rgba(212,168,67,0.5))" }}/>
            <div className="w-2 h-2 rounded-full bg-yellow-400"/>
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,rgba(212,168,67,0.5),transparent)" }}/>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((n, i) => (
            <div key={n.id}
              className={`news-card rounded-3xl border overflow-hidden ${visible ? "news-scale" : "opacity-0"}`}
              style={{
                background:"rgba(255,255,255,0.92)",
                borderColor: hovered === n.id ? "rgba(212,168,67,0.3)" : "rgba(212,168,67,0.12)",
                backdropFilter:"blur(12px)",
                boxShadow:"0 4px 24px rgba(0,0,0,0.06)",
                animationDelay:`${0.1 * i}s`,
              }}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background:`linear-gradient(135deg,${n.color1},${n.color2})` }}>
                <span className="news-letter text-[100px] font-black select-none">{n.letter}</span>
                <div className="absolute inset-0"
                  style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)",backgroundSize:"20px 20px" }}/>
                <div className="news-cat absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ color:"#050d1f",boxShadow:"0 4px 14px rgba(212,168,67,0.4)" }}>
                  {n.cat}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs mb-3" style={{ color:"#9ca3af" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {n.date}
                </div>
                <h3 className="font-black text-lg mb-2 leading-tight" style={{ color:"#1f2937" }}>{n.title}</h3>
                <p className="text-sm leading-6 mb-5" style={{ color:"#6b7280" }}>{n.desc}</p>
                <div className="news-read inline-flex items-center gap-2 text-sm font-bold"
                  style={{ color: hovered === n.id ? "#d4a843" : "rgba(212,168,67,0.6)" }}>
                  {t("news.read_more")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className={`text-center mt-12 ${visible ? "news-reveal" : "opacity-0"}`}
          style={{ animationDelay:"0.4s" }}>
          <button className="news-view-btn inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold cursor-pointer border"
            style={{ borderColor:"rgba(212,168,67,0.35)",color:"#92600d",background:"transparent" }}>
            {t("news.view_all")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}