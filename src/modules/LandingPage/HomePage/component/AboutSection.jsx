import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/AboutSection.css";

const ICONS = {
  vision:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  mission: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  values:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
};

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [activeCard, setActiveCard] = useState("vision");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // بيشغّل الأنيميشن لما السيكشن يظهر في الشاشة
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const pillars = t("about.pillars", { returnObjects: true });
  const stats   = t("about.stats",   { returnObjects: true });
  const content = t(`about.content.${activeCard}`, { returnObjects: true });

  return (
    <section id="about" ref={sectionRef} dir={dir}
      className="relative overflow-hidden py-28"
      style={{ background: "linear-gradient(160deg,#fefcf7 0%,#fdf8ee 40%,#fefaf3 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="about-orb absolute rounded-full"
          style={{ width:500,height:500,top:-120,left:-160,background:"radial-gradient(circle,rgba(212,168,67,0.07) 0%,transparent 70%)",filter:"blur(60px)" }}/>
        <div className="about-orb absolute rounded-full"
          style={{ width:400,height:400,bottom:-100,right:-100,background:"radial-gradient(circle,rgba(212,168,67,0.05) 0%,transparent 70%)",filter:"blur(50px)",animationDelay:"-4s" }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={`text-center mb-16 ${visible ? "reveal-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{ background:"rgba(212,168,67,0.1)",borderColor:"rgba(212,168,67,0.3)",color:"#9a6f1a" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>
            {t("about.badge")}
          </div>
          <h2 className="font-black mb-3" style={{ fontSize:"clamp(30px,4vw,46px)",color:"#111827" }}>
            {t("about.heading_plain")} <span className="text-gold-grad">{t("about.heading_gold")}</span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color:"#6b7280" }}>
            {t("about.subheading")}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,transparent,rgba(212,168,67,0.5))" }}/>
            <div className="w-2 h-2 rounded-full bg-yellow-400"/>
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,rgba(212,168,67,0.5),transparent)" }}/>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Pillars */}
          <div className={`flex flex-col gap-4 ${visible ? "reveal-right" : "opacity-0"}`}
            style={{ animationDelay:"0.15s" }}>
            {pillars.map((p) => (
              <div key={p.id}
                className={`about-card rounded-2xl border px-5 py-5 flex items-center gap-4 ${activeCard === p.id ? "active" : ""}`}
                style={{ borderColor:"rgba(0,0,0,0.07)",background:"rgba(255,255,255,0.8)",backdropFilter:"blur(8px)" }}
                onClick={() => setActiveCard(p.id)}
              >
                <div className="icon-ring w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: activeCard === p.id ? "linear-gradient(135deg,#d4a843,#f0c96a)" : "rgba(212,168,67,0.12)",
                    color: activeCard === p.id ? "#fff" : "#b8760e",
                    boxShadow: activeCard === p.id ? "0 4px 18px rgba(212,168,67,0.32)" : "none",
                  }}>
                  {ICONS[p.id]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base mb-1"
                    style={{ color: activeCard === p.id ? "#92600d" : "#1f2937" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color:"#6b7280" }}>{p.desc}</p>
                  <div className="mt-3 h-0.5 rounded-full" style={{ background:"rgba(0,0,0,0.06)" }}>
                    <div className="progress-line" style={{ width: activeCard === p.id ? "85%" : "0%" }}/>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke={activeCard === p.id ? "#d4a843" : "#d1d5db"} strokeWidth="2.5" strokeLinecap="round"
                  className="shrink-0" style={{ transition:"all 0.3s",transform:activeCard===p.id?"translateX(-3px)":"" }}>
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
              </div>
            ))}
          </div>

          {/* Content card + stats */}
          <div className={`${visible ? "reveal-left" : "opacity-0"}`} style={{ animationDelay:"0.25s" }}>

            <div className="rounded-3xl p-8 mb-6 relative overflow-hidden"
              style={{ background:"linear-gradient(135deg,rgba(255,255,255,0.95),rgba(253,248,238,0.95))",border:"1px solid rgba(212,168,67,0.18)",boxShadow:"0 20px 60px rgba(0,0,0,0.07)",backdropFilter:"blur(12px)" }}>
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-3xl"
                style={{ background:"linear-gradient(90deg,transparent,#d4a843,transparent)" }}/>
              <div className="absolute top-4 left-5 text-7xl font-black leading-none select-none"
                style={{ color:"rgba(212,168,67,0.08)",fontFamily:"Georgia,serif" }}>"</div>

              <div className="relative z-10">
                <h3 className="text-base font-bold mb-3" style={{ color:"#92600d" }}>{content.subtitle}</h3>
                <p className="text-[15px] leading-8" style={{ color:"#374151" }}>{content.body}</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button className="shimmer-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold border-0 cursor-pointer"
                  style={{ color:"#050d1f" }}>
                  {t("about.cta_read")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer border transition-all duration-200"
                  style={{ borderColor:"rgba(212,168,67,0.3)",color:"#92600d",background:"transparent" }}
                  onMouseEnter={e => e.currentTarget.style.background="rgba(212,168,67,0.07)"}
                  onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                  {t("about.cta_contact")}
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map(({ n, s, label }) => (
                <div key={label} className="stat-chip rounded-2xl py-4 px-3 text-center border"
                  style={{ background:"rgba(255,255,255,0.85)",borderColor:"rgba(212,168,67,0.15)",backdropFilter:"blur(8px)",boxShadow:"0 4px 16px rgba(0,0,0,0.05)" }}>
                  <div className="text-xl font-black leading-none mb-1 text-gold-grad">{n}{s}</div>
                  <div className="text-[11px] font-medium" style={{ color:"#9ca3af" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}