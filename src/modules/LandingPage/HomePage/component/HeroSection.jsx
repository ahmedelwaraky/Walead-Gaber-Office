import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/HeroSection.css";

/* ── Animated counter ── */
function useCounter(target, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const raf = requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function StatBox({ n, suffix, label }) {
  const val = useCounter(n);
  return (
    <div
      className="rounded-2xl p-4 border relative overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        borderColor: "rgba(255,255,255,0.07)",
        transition: "all 0.28s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(212,168,67,0.07)";
        e.currentTarget.style.borderColor = "rgba(212,168,67,0.22)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="text-2xl font-black text-white leading-none mb-1">
        {val}<span className="text-lg" style={{ color: "#d4a843" }}>{suffix}</span>
      </div>
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const dir  = isAr ? "rtl" : "ltr";

  const STATS = t("hero.stats", { returnObjects: true });

  return (
    <section
      id="hero"
      dir={dir}
      className="relative flex flex-col"
      style={{
        background: "linear-gradient(180deg,#040c1d 0%,#070f22 50%,#050d1f 100%)",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ── BG decorations ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 55% at 50% 30%,rgba(15,36,83,0.85) 0%,transparent 70%)" }}/>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 50% at 15% 70%,rgba(212,168,67,0.055) 0%,transparent 60%)" }}/>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 88% 20%,rgba(212,168,67,0.045) 0%,transparent 60%)" }}/>
        <div className="absolute inset-0 hero-grid-bg"/>
        <div className="h-orb absolute rounded-full" style={{ width:520,height:520,top:-110,right:-160,background:"radial-gradient(circle,rgba(212,168,67,0.07) 0%,transparent 70%)",filter:"blur(75px)" }}/>
        <div className="h-orb absolute rounded-full" style={{ width:420,height:420,bottom:60,left:-120,background:"radial-gradient(circle,rgba(15,36,83,0.55) 0%,transparent 70%)",filter:"blur(75px)",animationDelay:"-4s" }}/>
        <div className="h-orb absolute rounded-full" style={{ width:320,height:320,top:"38%",left:"22%",background:"radial-gradient(circle,rgba(212,168,67,0.04) 0%,transparent 70%)",filter:"blur(60px)",animationDelay:"-7s" }}/>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden" style={{ opacity: 0.11 }}>
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="hgl1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4a843" stopOpacity="0"/><stop offset="50%" stopColor="#d4a843" stopOpacity="1"/><stop offset="100%" stopColor="#d4a843" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="hgb1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d4a843" stopOpacity="0.45"/><stop offset="100%" stopColor="#d4a843" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <polyline points="0,350 200,280 400,310 600,200 800,240 1000,150 1200,190 1440,100" stroke="url(#hgl1)" strokeWidth="2"/>
            {[100,180,260,340,500,580,1100,1180,1260,1340].map((x,i)=>(
              <rect key={i} x={x} y={220+(i%3)*30} width="28" height={400-(220+(i%3)*30)} fill="url(#hgb1)" rx="4"/>
            ))}
          </svg>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="relative flex-1 flex items-center" style={{ zIndex: 1 }}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-14 items-center"
          style={{ paddingTop: "5.5rem", paddingBottom: "2rem" }}>

          {/* ── TEXT SIDE ── */}
          <div>
            {/* Badge */}
            <div className="h-fr d1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-medium mb-5 border"
              style={{ background:"rgba(212,168,67,0.09)", borderColor:"rgba(212,168,67,0.28)", color:"#f0c96a" }}>
              <span className="h-pulse w-2 h-2 rounded-full bg-yellow-400 shrink-0"/>
              {t("hero.badge")}
            </div>

            {/* Headline */}
            <h1 className="h-fr d2 font-black leading-snug mb-4" style={{ fontSize:"clamp(28px,4vw,52px)" }}>
              <span style={{ background:"linear-gradient(135deg,#d4a843 0%,#f0c96a 50%,#faeab3 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                {t("hero.headline1")}
              </span>
              <br/><span className="text-white">{t("hero.headline2")}</span>
              <br/><span style={{ WebkitTextStroke:"2px rgba(255,255,255,0.22)", color:"transparent" }}>{t("hero.headline3")}</span>
            </h1>

            {/* Sub */}
            <p className="h-fr d3 text-base leading-7 mb-6 max-w-xl font-normal" style={{ color:"rgba(255,255,255,0.58)" }}>
              {t("hero.sub")}
            </p>

            {/* CTAs */}
            <div className="h-fr d4 flex flex-wrap items-center gap-3.5 mb-6">
              <button className="hcta-gold inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold border-0 cursor-pointer">
                {t("hero.cta_primary")}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="hcta-ghost inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold cursor-pointer border-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 9.71a19.86 19.86 0 01-3.07-8.67A2 2 0 013.62 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                {t("hero.cta_secondary")}
              </button>
            </div>

          </div>

          {/* ── STATS CARD ── */}
          <div className="h-fl d3 relative hidden xl:block">
            <div className="rounded-3xl p-8 border relative overflow-hidden"
              style={{ background:"rgba(255,255,255,0.04)", borderColor:"rgba(255,255,255,0.09)", backdropFilter:"blur(20px)" }}>
              <div className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none"
                style={{ background:"radial-gradient(circle,rgba(212,168,67,0.08) 0%,transparent 70%)", transform:"translate(30%,-30%)" }}/>
              <div className="flex items-center justify-between mb-6 pb-5" style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-sm font-semibold" style={{ color:"rgba(255,255,255,0.55)" }}>{t("hero.card_title")}</span>
                <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color:"#4ade80" }}>
                  <span className="h-pulse w-1.5 h-1.5 rounded-full bg-green-400"/>{t("hero.card_live")}
                </span>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-black leading-none mb-1 htg">98.7%</div>
                <div className="text-sm" style={{ color:"rgba(255,255,255,0.5)" }}>{t("hero.card_metric_label")}</div>
                <div className="inline-flex items-center gap-1 text-xs font-bold rounded-full px-3 py-1 mt-2"
                  style={{ color:"#4ade80", background:"rgba(74,222,128,0.1)" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  {t("hero.card_metric_growth")}
                </div>
              </div>
              <div className="h-14 mb-6">
                <svg viewBox="0 0 360 56" fill="none" className="w-full h-full" preserveAspectRatio="none">
                  <defs><linearGradient id="hcf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4a843" stopOpacity="0.28"/><stop offset="100%" stopColor="#d4a843" stopOpacity="0"/></linearGradient></defs>
                  <path d="M0,48 L45,40 L90,43 L135,28 L180,33 L225,18 L270,23 L315,10 L360,4 L360,56 L0,56 Z" fill="url(#hcf)"/>
                  <path d="M0,48 L45,40 L90,43 L135,28 L180,33 L225,18 L270,23 L315,10 L360,4" stroke="#d4a843" strokeWidth="2" fill="none"/>
                  <circle cx="360" cy="4" r="4" fill="#f0c96a"/>
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s) => <StatBox key={s.label} {...s} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
     

      {/* ── BOTTOM STATS BAR ── */}
      <div className="relative px-6 md:px-10 pb-5" style={{ zIndex: 1 }}>
        <div
          className="max-w-7xl mx-auto rounded-2xl border grid"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            gridTemplateColumns: `repeat(${STATS.length}, 1fr)`,
          }}
        >
          {STATS.map(({ n, suffix, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center py-4 px-4"
              style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
            >
              <span className="text-2xl md:text-3xl font-black leading-none htg">{n}{suffix}</span>
              <span className="text-xs md:text-sm mt-1.5 text-center" style={{ color:"rgba(255,255,255,0.45)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
       {/* ── SCROLL HINT ── */}
      <div className="relative flex flex-col items-center gap-2 py-4" style={{ zIndex: 1 }}>
        <div className="w-5 h-8 rounded-2xl border flex justify-center pt-1.5" style={{ borderColor:"rgba(255,255,255,0.2)" }}>
          <span className="h-scroll w-0.5 h-2 rounded-full" style={{ background:"rgba(212,168,67,0.85)" }}/>
        </div>
        <span className="text-xs tracking-widest uppercase" style={{ color:"rgba(255,255,255,0.28)" }}>{t("hero.scroll_hint")}</span>
      </div>
    </section>
  );
}