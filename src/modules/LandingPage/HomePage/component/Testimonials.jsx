import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/TestimonialsSection.css";

export default function Testimonials() {

  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const items = t("testimonials.items", { returnObjects: true });
  const total = items.length;

  const [current, setCurrent] = useState(0);
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

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % total), 4500);
    return () => clearInterval(timer);
  }, [total]);

  const visibleCards = [
    items[current % total],
    items[(current + 1) % total],
    items[(current + 2) % total],
  ];

  return (
    <section ref={ref} id="testimonials" dir={dir}
      className="relative overflow-hidden py-28"
      style={{ background:"linear-gradient(180deg,#050d1f 0%,#0a1a38 60%,#060e22 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="testimonial-orb absolute rounded-full"
          style={{ width:600,height:600,top:-200,left:-200,background:"radial-gradient(circle,rgba(212,168,67,0.05) 0%,transparent 70%)",filter:"blur(80px)" }}/>
        <div className="absolute inset-0 testimonial-grid-bg"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={`text-center mb-12 ${visible ? "testimonial-reveal" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{ background:"rgba(212,168,67,0.1)",borderColor:"rgba(212,168,67,0.3)",color:"#f0c96a" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"/>
            {t("testimonials.badge")}
          </div>
          <h2 className="font-black mb-3" style={{ fontSize:"clamp(28px,4vw,44px)",color:"#fff" }}>
            {t("testimonials.heading_plain")}{" "}
            <span className="text-gold-grad">{t("testimonials.heading_gold")}</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color:"rgba(255,255,255,0.5)" }}>
            {t("testimonials.subheading")}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,transparent,rgba(212,168,67,0.4))" }}/>
            <div className="w-2 h-2 rounded-full bg-yellow-400"/>
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,rgba(212,168,67,0.4),transparent)" }}/>
          </div>
        </div>

        {/* Slider */}
        <div className={`flex items-center gap-4 ${visible ? "testimonial-reveal" : "opacity-0"}`}
          style={{ animationDelay:"0.2s" }}>

          {/* Prev */}
          <button onClick={() => setCurrent(c => (c - 1 + total) % total)}
            className="nav-btn shrink-0 w-11 h-11 rounded-full flex items-center justify-center border cursor-pointer"
            style={{ background:"rgba(255,255,255,0.06)",borderColor:"rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.6)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {visibleCards.map((item, i) => (
              <div key={`${item.id}-${current}-${i}`}
                className={`testimonial-card rounded-3xl p-6 border relative ${i === 1 ? "active" : ""}`}
                style={{
                  background:"rgba(255,255,255,0.04)",
                  borderColor:"rgba(255,255,255,0.09)",
                  backdropFilter:"blur(16px)",
                  animationDelay:`${i * 0.07}s`,
                }}>

                {/* Quote */}
                <div className="absolute top-5 left-5 text-4xl font-black select-none"
                  style={{ color:"rgba(212,168,67,0.13)",fontFamily:"Georgia,serif",lineHeight:1 }}>"</div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array(item.stars).fill(0).map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#d4a843" stroke="#d4a843" strokeWidth="1">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-7 mb-6" style={{ color:"rgba(255,255,255,0.72)" }}>"{item.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="avatar-gold w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                    style={{ color:"#050d1f" }}>
                    {item.letter}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{item.name}</div>
                    <div className="text-xs" style={{ color:"rgba(255,255,255,0.45)" }}>{item.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next */}
          <button onClick={() => setCurrent(c => (c + 1) % total)}
            className="nav-btn shrink-0 w-11 h-11 rounded-full flex items-center justify-center border cursor-pointer"
            style={{ background:"rgba(255,255,255,0.06)",borderColor:"rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.6)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="dot-btn h-2 rounded-full border-0 cursor-pointer"
              style={{
                width: i === current ? 28 : 8,
                background: i === current ? "#d4a843" : "rgba(255,255,255,0.22)",
              }}/>
          ))}
        </div>

      </div>
    </section>
  );
}