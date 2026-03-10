// ═══════════════════════════════════════
//  globals.jsx — shared styles & helpers
// ═══════════════════════════════════════

import { useState, useEffect, useRef } from "react";

/* ── Global CSS ── */
export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; padding: 0; }
    .ft { font-family: 'Tajawal', sans-serif; }

    /* ── Colors ── */
    .bg-gold { background: linear-gradient(135deg, #d4a843, #f0c96a); }
    .tg {
      background: linear-gradient(135deg,#b8761e,#d4a843,#f0c96a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Keyframes ── */
    @keyframes fadeR   { from{opacity:0;transform:translateX(34px)}  to{opacity:1;transform:translateX(0)} }
    @keyframes fadeL   { from{opacity:0;transform:translateX(-34px)} to{opacity:1;transform:translateX(0)} }
    @keyframes revUp   { from{opacity:0;transform:translateY(28px)}  to{opacity:1;transform:translateY(0)} }
    @keyframes scaleIn { from{opacity:0;transform:scale(0.93) translateY(22px)} to{opacity:1;transform:scale(1) translateY(0)} }
    @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes orbA    { 0%,100%{transform:translate(0,0)} 33%{transform:translate(16px,-22px)} 66%{transform:translate(-12px,16px)} }
    @keyframes pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
    @keyframes scrollA { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(13px);opacity:0} }
    @keyframes slideD  { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
    @keyframes floatO  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(10px,-15px) scale(1.05)} }
    @keyframes shimSrv { 0%{transform:translateX(120%)} 100%{transform:translateX(-120%)} }
    @keyframes iconPop { 0%{transform:scale(1) rotate(0)} 40%{transform:scale(1.18) rotate(-7deg)} 70%{transform:scale(0.94) rotate(4deg)} 100%{transform:scale(1) rotate(0)} }
    @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    @keyframes slideUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn  { from{opacity:0} to{opacity:1} }

    /* ── Utility animation classes ── */
    .fr { animation: fadeR  0.85s ease both; }
    .fl { animation: fadeL  0.85s ease both; }
    .ru { animation: revUp  0.65s ease both; }
    .si { animation: scaleIn 0.6s ease both; }
    .oa { animation: orbA  9s ease-in-out infinite; }
    .pd { animation: pulse 2s ease infinite; }
    .sd { animation: scrollA 1.8s ease infinite; }
    .fo { animation: floatO 8s ease-in-out infinite; }

    /* ── Background patterns ── */
    .hero-grid {
      background-image:
        linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px);
      background-size: 58px 58px;
      -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
    }
    .dot-grid {
      background-image: radial-gradient(circle, rgba(212,168,67,0.07) 1px, transparent 1px);
      background-size: 40px 40px;
      -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
      mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
    }

    /* ── Hero buttons ── */
    .btn-gh { background:linear-gradient(135deg,#d4a843,#f0c96a); box-shadow:0 6px 26px rgba(212,168,67,0.36); transition:all 0.28s ease; }
    .btn-gh:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(212,168,67,0.52); }
    .btn-gg { background:rgba(255,255,255,0.06); border:1.5px solid rgba(255,255,255,0.14)!important; backdrop-filter:blur(12px); transition:all 0.28s ease; }
    .btn-gg:hover { background:rgba(255,255,255,0.1); }

    /* ── About pillar cards ── */
    .ac { transition:all 0.32s cubic-bezier(0.4,0,0.2,1); cursor:pointer; position:relative; overflow:hidden; }
    .ac::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(212,168,67,0.05) 0%,transparent 60%); opacity:0; transition:opacity 0.32s ease; }
    .ac.on::before, .ac:hover::before { opacity:1; }
    .ac.on { border-color:rgba(212,168,67,0.45)!important; background:rgba(212,168,67,0.04)!important; transform:translateX(-6px); box-shadow:0 8px 40px rgba(0,0,0,0.1), 4px 0 0 #d4a843 inset; }
    .ac:hover:not(.on) { border-color:rgba(212,168,67,0.22)!important; transform:translateX(-3px); }
    .ac.on .ir, .ac:hover .ir { transform:scale(1.08) rotate(5deg); box-shadow:0 6px 22px rgba(212,168,67,0.28); }
    .ir { transition:all 0.32s ease; }
    .pl { height:3px; border-radius:3px; background:linear-gradient(90deg,#d4a843,#f0c96a); transition:width 1.2s cubic-bezier(0.4,0,0.2,1); }
    .sb { background:linear-gradient(135deg,#d4a843,#f0c96a,#d4a843); background-size:200% auto; transition:all 0.3s ease; }
    .sb:hover { background-position:right center; transform:translateY(-2px); box-shadow:0 8px 28px rgba(212,168,67,0.4); }

    /* ── Service cards ── */
    .sc { position:relative; overflow:hidden; cursor:pointer; transition:all 0.36s cubic-bezier(0.4,0,0.2,1); }
    .sc::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(212,168,67,0.07) 0%,transparent 65%); opacity:0; transition:opacity 0.36s ease; }
    .sc:hover { transform:translateY(-7px)!important; }
    .sc:hover::before { opacity:1; }
    .ssw { position:absolute; top:0; bottom:0; width:55%; background:linear-gradient(90deg,transparent,rgba(212,168,67,0.07),transparent); transform:translateX(120%); pointer-events:none; }
    .sc:hover .ssw { animation:shimSrv 0.9s ease forwards; }
    .sib { transition:all 0.36s ease; }
    .sc:hover .sib { animation:iconPop 0.5s ease forwards; }
    .sbl { position:absolute; bottom:0; right:0; left:0; height:2px; background:linear-gradient(90deg,transparent,#d4a843,transparent); transform:scaleX(0); transition:transform 0.4s ease; }
    .sc:hover .sbl { transform:scaleX(1); }
    .slm { transition:all 0.3s ease; }
    .slm svg { transition:transform 0.3s ease; }
    .sc:hover .slm { color:#d4a843!important; }
    .sc:hover .slm svg { transform:translateX(-5px); }
    .stg { transition:all 0.28s ease; }
    .sc:hover .stg { background:rgba(212,168,67,0.16)!important; border-color:rgba(212,168,67,0.4)!important; color:#8a560a!important; }
    .sc .bst { transition:all 0.28s ease; }
    .sc:hover .bst { opacity:0.18; }
    .cta-s { background:linear-gradient(135deg,#d4a843,#f0c96a); box-shadow:0 6px 26px rgba(212,168,67,0.36); transition:all 0.3s ease; }
    .cta-s:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(212,168,67,0.52); }

    /* ── Partners ── */
    .mq-track { animation:marquee 30s linear infinite; display:flex; width:max-content; }
    .mq-track:hover { animation-play-state:paused; }
    .porb { transition:all 0.3s ease; cursor:pointer; }
    .porb:hover { transform:translateY(-7px) scale(1.08); }
    .porb:hover .pi { color:#d4a843!important; }
    .porb:hover .pb { box-shadow:0 16px 48px rgba(15,36,83,0.4), 0 0 0 3px rgba(212,168,67,0.3)!important; }

    /* ── News ── */
    .nc { transition:all 0.34s cubic-bezier(0.4,0,0.2,1); }
    .nc:hover { transform:translateY(-8px)!important; box-shadow:0 28px 70px rgba(0,0,0,0.12)!important; border-color:rgba(212,168,67,0.3)!important; }
    .nc:hover .ntl { transform:scale(1.1); opacity:0.22; }
    .ntl { transition:all 0.3s ease; }
    .nr { transition:all 0.3s ease; }
    .nc:hover .nr { color:#d4a843!important; }
    .nc:hover .nr svg { transform:translateX(-5px); }
    .nr svg { transition:transform 0.3s ease; }

    /* ── Courses ── */
    .cc { transition:all 0.34s cubic-bezier(0.4,0,0.2,1); }
    .cc:hover { transform:translateY(-8px)!important; border-color:rgba(212,168,67,0.3)!important; box-shadow:0 24px 64px rgba(0,0,0,0.1)!important; }
    .ci { transition:all 0.34s ease; }
    .cc:hover .ci { animation:iconPop 0.5s ease forwards; box-shadow:0 8px 28px rgba(212,168,67,0.42)!important; }
    .eb { background:linear-gradient(135deg,#d4a843,#f0c96a); transition:all 0.28s ease; }
    .eb:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(212,168,67,0.45); }

    /* ── Testimonials ── */
    .tc-card { transition:all 0.3s ease; }
    .tc-card.act { border-color:rgba(212,168,67,0.35)!important; background:rgba(255,255,255,0.07)!important; transform:scale(1.02); }
    .nd { transition:all 0.3s ease; cursor:pointer; }
    .nd.on { background:#d4a843!important; width:28px!important; }
    .nb { transition:all 0.28s ease; }
    .nb:hover { background:rgba(212,168,67,0.15)!important; border-color:rgba(212,168,67,0.4)!important; color:#d4a843!important; }

    /* ── Contact ── */
    .ci-card { transition:all 0.28s ease; }
    .ci-card:hover { border-color:rgba(212,168,67,0.3)!important; transform:translateX(-4px); }
    .inp { transition:all 0.28s ease; outline:none; }
    .inp:focus { border-color:rgba(212,168,67,0.5)!important; box-shadow:0 0 0 3px rgba(212,168,67,0.1)!important; }
    .sb2 { background:linear-gradient(135deg,#d4a843,#f0c96a); transition:all 0.3s ease; }
    .sb2:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(212,168,67,0.52); }

    /* ── Footer ── */
    .fl-link { transition:color 0.22s ease; cursor:pointer; }
    .fl-link:hover { color:#f0c96a!important; }
    .so-btn { transition:all 0.28s ease; }
    .so-btn:hover { background:rgba(212,168,67,0.18)!important; border-color:rgba(212,168,67,0.4)!important; color:#f0c96a!important; transform:translateY(-3px); }
  `}</style>
);

/* ── NAV LINKS (shared) ── */
export const NAV_LINKS = [
  { label: "الرئيسية",    id: "hero"     },
  { label: "عن الشركة",  id: "about"    },
  { label: "الخدمات",    id: "services" },
  { label: "شركاء النجاح", id: "partners"},
  { label: "الأخبار",    id: "news"     },
  { label: "الكورسات",   id: "courses"  },
  { label: "تواصل معنا", id: "contact"  },
];

/* ── Custom Hooks ── */
export function useInView(ref, threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return visible;
}

/* ── Counter ── */
export function Counter({ n, s, on }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!on) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setVal(Math.floor(p * n));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [on, n]);
  return <>{val}{s}</>;
}

/* ── Floating Badge Card (used in Hero) ── */
export function FloatCard({ icon, title, sub, style }) {
  return (
    <div
      className="absolute flex items-center gap-3 rounded-2xl px-4 py-3 border z-20"
      style={{
        background: "rgba(8,20,50,0.88)",
        borderColor: "rgba(212,168,67,0.22)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
        ...style,
      }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 bg-gold" style={{ color: "#050d1f" }}>
        {icon}
      </div>
      <div>
        <div className="text-white text-sm font-bold">{title}</div>
        <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.48)" }}>{sub}</div>
      </div>
    </div>
  );
}

/* ── Section Header (reused across sections) ── */
export function SecHeader({ badge, pre, hi, sub, dark = false }) {
  return (
    <div className="text-center mb-14">
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
        style={{
          background: dark ? "rgba(212,168,67,0.15)" : "rgba(212,168,67,0.1)",
          borderColor: dark ? "rgba(212,168,67,0.4)" : "rgba(212,168,67,0.3)",
          color: dark ? "#f0c96a" : "#9a6f1a",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#d4a843" }} />
        {badge}
      </div>

      <h2
        className="font-black mb-3"
        style={{ fontSize: "clamp(28px,4vw,46px)", color: dark ? "#fff" : "#111827" }}
      >
        {pre}<span className="tg">{hi}</span>
      </h2>

      <p className="text-[15px] max-w-md mx-auto leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.55)" : "#6b7280" }}>
        {sub}
      </p>

      <div className="flex items-center justify-center gap-3 mt-5">
        <div className="h-px w-14 rounded" style={{ background: "linear-gradient(90deg,transparent,rgba(212,168,67,0.5))" }} />
        <div className="w-2 h-2 rounded-full" style={{ background: "#d4a843" }} />
        <div className="h-px w-14 rounded" style={{ background: "linear-gradient(90deg,rgba(212,168,67,0.5),transparent)" }} />
      </div>
    </div>
  );
}