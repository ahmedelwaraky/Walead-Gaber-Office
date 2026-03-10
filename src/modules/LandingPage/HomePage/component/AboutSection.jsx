import { useState, useRef, useEffect } from "react";

const PILLARS = [
  {
    id: "vision",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "الرؤية",
    desc: "أن نكون الخيار الأول في تقديم الخدمات المحاسبية والاستشارية في المنطقة",
    color: "#d4a843",
  },
  {
    id: "mission",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: "الرسالة",
    desc: "تقديم خدمات مهنية متميزة تسهم في نجاح عملائنا وتحقيق أهدافهم المالية",
    color: "#b8922e",
  },
  {
    id: "values",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "القيم",
    desc: "النزاهة، الاحترافية، الالتزام بأعلى معايير الجودة والشفافية",
    color: "#c9a240",
  },
];

const STATS = [
  { n: 15, s: "+", label: "سنة خبرة" },
  { n: 500, s: "+", label: "عميل راضٍ" },
  { n: 50, s: "+", label: "مستشار" },
  { n: 98, s: "%", label: "رضا العملاء" },
];

function useInView(ref, threshold = 0.2) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function Counter({ target, suffix, active }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);
  return <>{val}{suffix}</>;
}

export default function AboutSection() {
  const [activeCard, setActiveCard] = useState("vision");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;600;700;800;900&display=swap');
        .font-tajawal { font-family: 'Tajawal', sans-serif; }

        /* Scroll reveal */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,168,67,0); }
          50% { box-shadow: 0 0 0 4px rgba(212,168,67,0.12); }
        }
        @keyframes floatOrb {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(10px,-15px) scale(1.05); }
        }

        .reveal-up    { animation: revealUp    0.7s ease both; }
        .reveal-right { animation: revealRight 0.7s ease both; }
        .reveal-left  { animation: revealLeft  0.7s ease both; }

        .about-card {
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .about-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212,168,67,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.32s ease;
        }
        .about-card.active::before,
        .about-card:hover::before { opacity: 1; }

        .about-card.active {
          border-color: rgba(212,168,67,0.45) !important;
          background: rgba(212,168,67,0.04) !important;
          transform: translateX(-6px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.12), 4px 0 0 #d4a843 inset;
        }
        .about-card:hover:not(.active) {
          border-color: rgba(212,168,67,0.25) !important;
          transform: translateX(-3px);
        }

        .icon-ring {
          transition: all 0.32s ease;
        }
        .about-card.active .icon-ring,
        .about-card:hover .icon-ring {
          transform: scale(1.08) rotate(5deg);
          box-shadow: 0 6px 24px rgba(212,168,67,0.3);
        }

        .shimmer-btn {
          background: linear-gradient(135deg, #d4a843, #f0c96a, #d4a843);
          background-size: 200% auto;
          transition: all 0.3s ease;
        }
        .shimmer-btn:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(212,168,67,0.4);
        }

        .stat-chip {
          transition: all 0.28s ease;
        }
        .stat-chip:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
        }

        .progress-line {
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #d4a843, #f0c96a);
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
        }

        .about-orb {
          animation: floatOrb 8s ease-in-out infinite;
        }

        .text-gold-grad {
          background: linear-gradient(135deg, #b8761e, #d4a843, #f0c96a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        dir="rtl"
        className="font-tajawal relative overflow-hidden py-28"
        style={{
          background: "linear-gradient(160deg, #fefcf7 0%, #fdf8ee 40%, #fefaf3 100%)",
        }}
      >
        {/* BG decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="about-orb absolute rounded-full"
            style={{ width:500, height:500, top:-120, left:-160,
              background:"radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)",
              filter:"blur(60px)" }}/>
          <div className="about-orb absolute rounded-full"
            style={{ width:400, height:400, bottom:-100, right:-100,
              background:"radial-gradient(circle, rgba(212,168,67,0.05) 0%, transparent 70%)",
              filter:"blur(50px)", animationDelay:"-4s" }}/>
          {/* Subtle grid */}
          <div className="absolute inset-0"
            style={{
              backgroundImage:"radial-gradient(circle, rgba(212,168,67,0.08) 1px, transparent 1px)",
              backgroundSize:"40px 40px",
              maskImage:"radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
              WebkitMaskImage:"radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
            }}/>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          {/* ── HEADER ── */}
          <div className={`text-center mb-16 ${inView ? "reveal-up" : "opacity-0"}`}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
              style={{ background:"rgba(212,168,67,0.1)", borderColor:"rgba(212,168,67,0.3)", color:"#9a6f1a" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>
              من نحن
            </div>
            <h2
              className="font-black mb-4"
              style={{ fontSize:"clamp(30px,4vw,46px)", color:"#111827" }}
            >
              عن{" "}
              <span className="text-gold-grad">الشركة</span>
            </h2>
            <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color:"#6b7280" }}>
              نحن مكتب متخصص في تقديم الخدمات المحاسبية والاستشارات المالية والقانونية
            </p>
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,transparent,rgba(212,168,67,0.5))" }}/>
              <div className="w-2 h-2 rounded-full bg-yellow-400"/>
              <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,rgba(212,168,67,0.5),transparent)" }}/>
            </div>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT — Pillars */}
            <div className={`flex flex-col gap-4 ${inView ? "reveal-right" : "opacity-0"}`}
              style={{ animationDelay:"0.15s" }}>
              {PILLARS.map((p, i) => (
                <div
                  key={p.id}
                  className={`about-card rounded-2xl border px-5 py-5 flex items-center gap-4 ${activeCard === p.id ? "active" : ""}`}
                  style={{
                    borderColor:"rgba(0,0,0,0.07)",
                    background:"rgba(255,255,255,0.8)",
                    backdropFilter:"blur(8px)",
                    animationDelay:`${0.15 + i * 0.1}s`,
                  }}
                  onClick={() => setActiveCard(p.id)}
                >
                  {/* Icon */}
                  <div
                    className="icon-ring w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: activeCard === p.id
                        ? "linear-gradient(135deg,#d4a843,#f0c96a)"
                        : "rgba(212,168,67,0.12)",
                      color: activeCard === p.id ? "#fff" : "#b8760e",
                      boxShadow: activeCard === p.id ? "0 4px 18px rgba(212,168,67,0.32)" : "none",
                    }}
                  >
                    {p.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold text-base mb-1"
                      style={{ color: activeCard === p.id ? "#92600d" : "#1f2937" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color:"#6b7280" }}>
                      {p.desc}
                    </p>
                    {/* Progress bar */}
                    <div className="mt-3 h-0.5 rounded-full w-full" style={{ background:"rgba(0,0,0,0.06)" }}>
                      <div
                        className="progress-line"
                        style={{ width: activeCard === p.id && inView ? "85%" : "0%" }}
                      />
                    </div>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke={activeCard === p.id ? "#d4a843" : "#d1d5db"}
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="shrink-0 transition-all duration-300"
                    style={{ transform: activeCard === p.id ? "translateX(-3px)" : "" }}
                  >
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                </div>
              ))}
            </div>

            {/* RIGHT — Content */}
            <div className={`${inView ? "reveal-left" : "opacity-0"}`}
              style={{ animationDelay:"0.25s" }}>

              {/* Description card */}
              <div
                className="rounded-3xl p-8 mb-6 relative overflow-hidden"
                style={{
                  background:"linear-gradient(135deg,rgba(255,255,255,0.95) 0%,rgba(253,248,238,0.95) 100%)",
                  border:"1px solid rgba(212,168,67,0.18)",
                  boxShadow:"0 20px 60px rgba(0,0,0,0.07), 0 2px 8px rgba(212,168,67,0.08)",
                  backdropFilter:"blur(12px)",
                }}
              >
                {/* Top accent */}
                <div className="absolute top-0 right-0 left-0 h-1 rounded-t-3xl"
                  style={{ background:"linear-gradient(90deg,transparent,#d4a843,transparent)" }}/>

                {/* Quote mark */}
                <div
                  className="absolute top-4 left-5 text-7xl font-black leading-none select-none"
                  style={{ color:"rgba(212,168,67,0.08)", fontFamily:"Georgia,serif" }}
                >
                  "
                </div>

                {/* Dynamic content based on activeCard */}
                <div className="relative z-10">
                  {activeCard === "vision" && (
                    <>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background:"linear-gradient(135deg,#d4a843,#f0c96a)" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                          </svg>
                        </div>
                        <h3 className="text-base font-bold" style={{ color:"#92600d" }}>رؤيتنا للمستقبل</h3>
                      </div>
                      <p className="text-[15px] leading-8" style={{ color:"#374151" }}>
                        تأسس مكتبنا منذ أكثر من 15 عامًا ليكون أحد أبرز المكاتب المتخصصة في مجال المحاسبة والاستشارات المالية والقانونية. نضم فريقًا من أفضل المحاسبين والمستشارين الماليين والقانونيين المؤهلين لتقديم خدمات عالية الجودة.
                      </p>
                    </>
                  )}
                  {activeCard === "mission" && (
                    <>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background:"linear-gradient(135deg,#d4a843,#f0c96a)" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                          </svg>
                        </div>
                        <h3 className="text-base font-bold" style={{ color:"#92600d" }}>رسالتنا نحو عملائنا</h3>
                      </div>
                      <p className="text-[15px] leading-8" style={{ color:"#374151" }}>
                        نلتزم بتقديم خدمات مهنية متميزة تتجاوز توقعات عملائنا. نؤمن بأن نجاح عميلنا هو نجاحنا، لذا نعمل بكل جد واجتهاد لتحقيق أهدافهم المالية وحماية مصالحهم بأعلى درجات الكفاءة.
                      </p>
                    </>
                  )}
                  {activeCard === "values" && (
                    <>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background:"linear-gradient(135deg,#d4a843,#f0c96a)" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <h3 className="text-base font-bold" style={{ color:"#92600d" }}>قيمنا الجوهرية</h3>
                      </div>
                      <p className="text-[15px] leading-8" style={{ color:"#374151" }}>
                        نبني علاقاتنا على أسس راسخة من النزاهة والشفافية والاحترافية العالية. نلتزم بأعلى معايير الجودة في كل ما نقدمه، ونضع مصلحة عميلنا فوق كل اعتبار آخر.
                      </p>
                    </>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    className="shimmer-btn font-tajawal inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold border-0 cursor-pointer"
                    style={{ color:"#050d1f" }}
                  >
                    اقرأ المزيد
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                  <button
                    className="font-tajawal inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer border transition-all duration-200"
                    style={{ borderColor:"rgba(212,168,67,0.3)", color:"#92600d", background:"transparent" }}
                    onMouseEnter={e => e.currentTarget.style.background="rgba(212,168,67,0.07)"}
                    onMouseLeave={e => e.currentTarget.style.background="transparent"}
                  >
                    تواصل معنا
                  </button>
                </div>
              </div>

              {/* Stats chips */}
              <div className="grid grid-cols-4 gap-3">
                {STATS.map(({ n, s, label }, i) => (
                  <div
                    key={label}
                    className={`stat-chip rounded-2xl py-4 px-3 text-center border ${inView ? "reveal-up" : "opacity-0"}`}
                    style={{
                      background:"rgba(255,255,255,0.85)",
                      borderColor:"rgba(212,168,67,0.15)",
                      backdropFilter:"blur(8px)",
                      boxShadow:"0 4px 16px rgba(0,0,0,0.05)",
                      animationDelay:`${0.35 + i * 0.08}s`,
                    }}
                  >
                    <div
                      className="text-xl font-black leading-none mb-1"
                      style={{ background:"linear-gradient(135deg,#b8761e,#d4a843)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}
                    >
                      <Counter target={n} suffix={s} active={inView}/>
                    </div>
                    <div className="text-[11px] font-medium" style={{ color:"#9ca3af" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}