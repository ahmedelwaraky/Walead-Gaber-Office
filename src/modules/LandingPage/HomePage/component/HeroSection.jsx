// ═══════════════════════════════════════
//  HeroSection.jsx  —  fully visible, no clipping
// ═══════════════════════════════════════

import { useEffect, useRef, useState } from "react";

/* ── Data ── */
const STATS = [
  { n: 1000, suffix: "+", label: "مشروع منجز"  },
  { n: 50,   suffix: "+", label: "مستشار خبير" },
  { n: 15,   suffix: "+", label: "سنة خبرة"    },
  { n: 500,  suffix: "+", label: "عميل راضٍ"   },
];

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

/* ── Sub-components ── */
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

/* ════════════════════════════════════════
   HERO SECTION
════════════════════════════════════════ */
export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;600;700;800;900&display=swap');
        .ht { font-family: 'Tajawal', sans-serif; }

        .hero-grid-bg {
          background-image:
            linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px);
          background-size: 58px 58px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }
        @keyframes hfadeR  { from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
        @keyframes hfadeL  { from{opacity:0;transform:translateX(-36px)} to{opacity:1;transform:translateX(0)} }
        @keyframes hfadeU  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes hfloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes hpulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.75)} }
        @keyframes hscroll { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(13px);opacity:0} }
        @keyframes horb    { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(18px,-25px) scale(1.04)} 66%{transform:translate(-12px,16px) scale(0.97)} }

        .h-fr { animation: hfadeR 0.85s ease both; }
        .h-fl { animation: hfadeL 0.85s ease both; }
        .h-fu { animation: hfadeU 0.85s ease both; }
        .h-float { animation: hfloat 4.5s ease-in-out infinite; }
        .h-orb   { animation: horb 9s ease-in-out infinite; }
        .h-pulse { animation: hpulse 2s ease infinite; }
        .h-scroll { animation: hscroll 1.8s ease infinite; }

        .d1{animation-delay:0.10s} .d2{animation-delay:0.20s}
        .d3{animation-delay:0.30s} .d4{animation-delay:0.40s}
        .d5{animation-delay:0.50s} .d6{animation-delay:0.60s}

        .hcta-gold {
          background: linear-gradient(135deg,#d4a843,#f0c96a);
          box-shadow: 0 6px 28px rgba(212,168,67,0.38);
          transition: all 0.28s ease;
          color: #050d1f;
        }
        .hcta-gold:hover { transform: translateY(-2px); box-shadow: 0 10px 38px rgba(212,168,67,0.55); }

        .hcta-ghost {
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.14) !important;
          backdrop-filter: blur(12px);
          transition: all 0.28s ease;
          color: rgba(255,255,255,0.82);
        }
        .hcta-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.28) !important; }

        .htg {
          background: linear-gradient(135deg,#d4a843,#f0c96a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/*
        KEY FIX:
        • Section is a flex-column container — no overflow-hidden
        • Main body takes flex-1 (grows to fill space)
        • Scroll hint is inside the normal flow, centered with margin
        • Stats bar is the LAST flex child (normal flow, not absolute)
        → Nothing gets clipped, everything renders completely
      */}
      <section
        id="hero"
        dir="rtl"
        className="ht relative flex flex-col"
        style={{
          background: "linear-gradient(180deg,#040c1d 0%,#070f22 50%,#050d1f 100%)",
          minHeight: "100vh",
        }}
      >
        {/* ── BG decorations (pointer-events:none so they don't block) ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 55% at 50% 30%,rgba(15,36,83,0.85) 0%,transparent 70%)" }}/>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 50% at 15% 70%,rgba(212,168,67,0.055) 0%,transparent 60%)" }}/>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 88% 20%,rgba(212,168,67,0.045) 0%,transparent 60%)" }}/>
          <div className="absolute inset-0 hero-grid-bg"/>
          <div className="h-orb absolute rounded-full" style={{ width:520,height:520,top:-110,right:-160,background:"radial-gradient(circle,rgba(212,168,67,0.07) 0%,transparent 70%)",filter:"blur(75px)" }}/>
          <div className="h-orb absolute rounded-full" style={{ width:420,height:420,bottom:60,left:-120,background:"radial-gradient(circle,rgba(15,36,83,0.55) 0%,transparent 70%)",filter:"blur(75px)",animationDelay:"-4s" }}/>
          <div className="h-orb absolute rounded-full" style={{ width:320,height:320,top:"38%",left:"22%",background:"radial-gradient(circle,rgba(212,168,67,0.04) 0%,transparent 70%)",filter:"blur(60px)",animationDelay:"-7s" }}/>
          {/* SVG bars */}
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
            style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>

            {/* ── TEXT SIDE ── */}
            <div>
              {/* Badge */}
              <div className="h-fr d1 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-medium mb-7 border"
                style={{ background:"rgba(212,168,67,0.09)", borderColor:"rgba(212,168,67,0.28)", color:"#f0c96a" }}>
                <span className="h-pulse w-2 h-2 rounded-full bg-yellow-400 shrink-0"/>
                أكثر من 15 عامًا من الخبرة المتميزة
              </div>

              {/* Headline */}
              <h1 className="h-fr d2 font-black leading-snug mb-5" style={{ fontSize:"clamp(36px,5vw,60px)" }}>
                <span style={{ background:"linear-gradient(135deg,#d4a843 0%,#f0c96a 50%,#faeab3 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>خدمات محاسبية</span>
                <br/><span className="text-white">واستشارات مالية</span>
                <br/><span style={{ WebkitTextStroke:"2px rgba(255,255,255,0.22)", color:"transparent" }}>باحترافية عالية</span>
              </h1>

              {/* Sub */}
              <p className="h-fr d3 text-base leading-8 mb-9 max-w-xl font-normal" style={{ color:"rgba(255,255,255,0.58)" }}>
                نقدم لكم حلولاً متكاملة في مجالات المحاسبة والمراجعة والاستشارات المالية والقانونية بأعلى معايير الجودة والمهنية — لأن نجاحكم هو مقياس تميزنا.
              </p>

              {/* CTAs */}
              <div className="h-fr d4 flex flex-wrap items-center gap-3.5 mb-10">
                <button className="hcta-gold ht inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold border-0 cursor-pointer">
                  عرض الخدمات
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="hcta-ghost ht inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold cursor-pointer border-0">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 9.71a19.86 19.86 0 01-3.07-8.67A2 2 0 013.62 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  تواصل معنا
                </button>
              </div>

              {/* Trust row */}
              <div className="h-fr d5 flex items-center gap-4 pt-7" style={{ borderTop:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex">
                  {["أ","م","س","ف"].map((c,i)=>(
                    <div key={i} className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold"
                      style={{ borderColor:"#050d1f", background:"linear-gradient(135deg,#0f2453,#d4a843)", marginLeft:i===0?0:-10, zIndex:4-i }}>
                      {c}
                    </div>
                  ))}
                </div>
                <div>
                  <strong className="block text-sm font-bold" style={{ color:"#f0c96a" }}>+500 عميل راضٍ</strong>
                  <span className="text-xs" style={{ color:"rgba(255,255,255,0.5)" }}>يثقون بخبرتنا في المنطقة</span>
                </div>
              </div>
            </div>

            {/* ── STATS CARD (right column) ── */}
            <div className="h-fl d3 relative hidden xl:block">
              <div className="rounded-3xl p-8 border relative overflow-hidden"
                style={{ background:"rgba(255,255,255,0.04)", borderColor:"rgba(255,255,255,0.09)", backdropFilter:"blur(20px)" }}>

                {/* glow */}
                <div className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none"
                  style={{ background:"radial-gradient(circle,rgba(212,168,67,0.08) 0%,transparent 70%)", transform:"translate(30%,-30%)" }}/>

                {/* Header row */}
                <div className="flex items-center justify-between mb-6 pb-5" style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-sm font-semibold" style={{ color:"rgba(255,255,255,0.55)" }}>الأداء المالي للعملاء</span>
                  <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color:"#4ade80" }}>
                    <span className="h-pulse w-1.5 h-1.5 rounded-full bg-green-400"/>مباشر
                  </span>
                </div>

                {/* Big metric */}
                <div className="mb-6">
                  <div className="text-5xl font-black leading-none mb-1 htg">98.7%</div>
                  <div className="text-sm" style={{ color:"rgba(255,255,255,0.5)" }}>معدل رضا العملاء</div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold rounded-full px-3 py-1 mt-2"
                    style={{ color:"#4ade80", background:"rgba(74,222,128,0.1)" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    +12.4% هذا العام
                  </div>
                </div>

                {/* Mini chart */}
                <div className="h-14 mb-6">
                  <svg viewBox="0 0 360 56" fill="none" className="w-full h-full" preserveAspectRatio="none">
                    <defs><linearGradient id="hcf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4a843" stopOpacity="0.28"/><stop offset="100%" stopColor="#d4a843" stopOpacity="0"/></linearGradient></defs>
                    <path d="M0,48 L45,40 L90,43 L135,28 L180,33 L225,18 L270,23 L315,10 L360,4 L360,56 L0,56 Z" fill="url(#hcf)"/>
                    <path d="M0,48 L45,40 L90,43 L135,28 L180,33 L225,18 L270,23 L315,10 L360,4" stroke="#d4a843" strokeWidth="2" fill="none"/>
                    <circle cx="360" cy="4" r="4" fill="#f0c96a"/>
                  </svg>
                </div>

                {/* 4 stat boxes */}
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((s) => <StatBox key={s.label} {...s} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SCROLL HINT — in normal flow, centered ── */}
        <div className="relative flex flex-col items-center gap-2 pb-6 pt-2" style={{ zIndex: 1 }}>
          <div className="w-5 h-8 rounded-2xl border flex justify-center pt-1.5" style={{ borderColor:"rgba(255,255,255,0.2)" }}>
            <span className="h-scroll w-0.5 h-2 rounded-full" style={{ background:"rgba(212,168,67,0.85)" }}/>
          </div>
          <span className="text-xs tracking-widest uppercase" style={{ color:"rgba(255,255,255,0.28)" }}>مرر للأسفل</span>
        </div>

        {/* ── BOTTOM STATS BAR — last flex child, always fully visible ── */}
        <div className="relative px-6 md:px-10" style={{ zIndex: 1 }}>
          <div
            className="max-w-7xl mx-auto rounded-t-2xl border border-b-0 grid"
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
                className="flex flex-col items-center py-6 px-4"
                style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
              >
                <span className="text-2xl md:text-3xl font-black leading-none htg">{n}{suffix}</span>
                <span className="text-xs md:text-sm mt-1.5 text-center" style={{ color:"rgba(255,255,255,0.45)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}