import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/ServicesSection.css";

const ICONS = {
  audit:       <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  tax:         <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  accounting:  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  feasibility: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  finance:     <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  company:     <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
};

export default function ServicesSection() {
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

  const items = t("services.items", { returnObjects: true });

  return (
    <section id="services" ref={ref} dir={dir}
      className="relative overflow-hidden py-28"
      style={{ background:"linear-gradient(160deg,#f4f6fb 0%,#f0f4fa 50%,#eef2f8 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="srv-orb absolute rounded-full"
          style={{ width:620,height:620,top:-200,right:-200,background:"radial-gradient(circle,rgba(212,168,67,0.065) 0%,transparent 70%)",filter:"blur(72px)" }}/>
        <div className="srv-orb absolute rounded-full"
          style={{ width:500,height:500,bottom:-160,left:-150,background:"radial-gradient(circle,rgba(212,168,67,0.05) 0%,transparent 70%)",filter:"blur(60px)",animationDelay:"-5s" }}/>
        <div className="absolute inset-0" style={{
          backgroundImage:"radial-gradient(circle,rgba(212,168,67,0.065) 1px,transparent 1px)",
          backgroundSize:"44px 44px",
          maskImage:"radial-gradient(ellipse 75% 75% at 50% 50%,black 20%,transparent 100%)",
          WebkitMaskImage:"radial-gradient(ellipse 75% 75% at 50% 50%,black 20%,transparent 100%)",
        }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={`text-center mb-16 ${visible ? "srv-reveal" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 border"
            style={{ background:"rgba(212,168,67,0.1)",borderColor:"rgba(212,168,67,0.3)",color:"#9a6f1a" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background:"#d4a843" }}/>
            {t("services.badge")}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize:"clamp(28px,4vw,46px)",color:"#111827" }}>
            {t("services.heading_plain")}
            <span className="text-gold-grad">{t("services.heading_gold")}</span>
          </h2>
          <p className="text-[15px] max-w-sm mx-auto leading-relaxed" style={{ color:"#6b7280" }}>
            {t("services.subheading")}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-14 rounded" style={{ background:"linear-gradient(90deg,transparent,rgba(212,168,67,0.5))" }}/>
            <div className="w-2 h-2 rounded-full" style={{ background:"#d4a843" }}/>
            <div className="h-px w-14 rounded" style={{ background:"linear-gradient(90deg,rgba(212,168,67,0.5),transparent)" }}/>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {items.map((svc, i) => {
            const isHov = hovered === svc.id;
            return (
              <div key={svc.id}
                className={`srv-card rounded-3xl border flex flex-col items-center text-center px-8 pt-10 pb-8 ${visible ? "srv-scale" : "opacity-0"}`}
                style={{
                  background: isHov ? "linear-gradient(145deg,rgba(255,255,255,0.98),rgba(253,248,238,0.98))" : "rgba(255,255,255,0.9)",
                  borderColor: isHov ? "rgba(212,168,67,0.38)" : "rgba(212,168,67,0.13)",
                  backdropFilter: "blur(14px)",
                  boxShadow: isHov ? "0 22px 64px rgba(0,0,0,0.1),0 0 0 1px rgba(212,168,67,0.15)" : "0 4px 24px rgba(0,0,0,0.05)",
                  animationDelay: `${0.07 * i}s`,
                }}
                onMouseEnter={() => setHovered(svc.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="srv-shimmer"/>

                {/* Number */}
                <span className="absolute top-5 left-6 text-5xl font-black select-none transition-all duration-300"
                  style={{ color: isHov ? "rgba(212,168,67,0.14)" : "rgba(212,168,67,0.07)", fontFamily:"Georgia,serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="srv-icon-box w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: isHov ? "linear-gradient(135deg,#d4a843,#f0c96a)" : "linear-gradient(135deg,#0c1d40,#1a3a70)",
                    color: isHov ? "#fff" : "#d4a843",
                    boxShadow: isHov ? "0 8px 30px rgba(212,168,67,0.38)" : "0 4px 18px rgba(15,36,83,0.28)",
                  }}>
                  {ICONS[svc.id]}
                </div>

                {/* Tag */}
                <div className="srv-tag inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold mb-3 border"
                  style={{ background:"rgba(212,168,67,0.08)",borderColor:"rgba(212,168,67,0.2)",color:"#b8761e" }}>
                  <span className="w-1 h-1 rounded-full" style={{ background:"#d4a843" }}/>
                  {svc.tag}
                </div>

                <h3 className="font-black text-xl mb-3 leading-tight transition-colors duration-300"
                  style={{ color: isHov ? "#7a4e08" : "#1f2937" }}>
                  {svc.title}
                </h3>

                <p className="text-sm leading-7 flex-1" style={{ color:"#6b7280" }}>{svc.desc}</p>

                <div className="srv-learn flex items-center gap-2 mt-6 text-xs font-bold"
                  style={{ color: isHov ? "#d4a843" : "rgba(212,168,67,0.35)" }}>
                  {t("services.learn_more")}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                </div>

                <div className="srv-bottom-line"/>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`flex flex-col items-center mt-14 ${visible ? "srv-reveal" : "opacity-0"}`}
          style={{ animationDelay:"0.5s" }}>
          <p className="text-sm mb-5" style={{ color:"#9ca3af" }}>{t("services.cta_label")}</p>
          <button className="srv-cta-btn inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-[15px] font-bold border-0 cursor-pointer"
            style={{ color:"#050d1f" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 9.71a19.86 19.86 0 01-3.07-8.67A2 2 0 013.62 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {t("services.cta_btn")}
          </button>
        </div>

      </div>
    </section>
  );
}