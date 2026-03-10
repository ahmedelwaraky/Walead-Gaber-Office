// ═══════════════════════════════════════
//  TestimonialsSection.jsx
// ═══════════════════════════════════════

import { useState, useRef, useEffect } from "react";
import { useInView, SecHeader } from "./globals";

const TESTIMONIALS = [
  { id: "t1", name: "فاطمة الحربي",  org: "شركة البناء الحديث",    letter: "ف", stars: 5, text: "دراسة الجدوى التي أعدوها لمشروعنا كانت شاملة ودقيقة وساهمت في حصولنا على التمويل المطلوب." },
  { id: "t2", name: "محمد الفهد",    org: "مجموعة الفيصل",        letter: "م", stars: 5, text: "تجربة رائعة في تأسيس شركتنا. فريق عمل متعاون ومحترف قدّم لنا كل الدعم القانوني والمالي." },
  { id: "t3", name: "سارة العلي",    org: "مؤسسة النور للتقنية",  letter: "س", stars: 5, text: "استشارات ضريبية متخصصة ودقيقة. وفّروا علينا الكثير من الوقت والجهد في إعداد الإقرارات الضريبية." },
  { id: "t4", name: "خالد المطيري",  org: "مجموعة الخليج",        letter: "خ", stars: 5, text: "خدمة محاسبية احترافية من الدرجة الأولى. أنصح كل رجل أعمال بالتعامل مع هذا المكتب المتميز." },
  { id: "t5", name: "نورة السيد",    org: "شركة التميز التجارية",  letter: "ن", stars: 5, text: "أفضل مكتب محاسبة تعاملنا معه. دقة في العمل والتزام بالمواعيد واهتمام حقيقي بمصلحة العميل." },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const visible = useInView(ref);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, []);

  // Visible 3 cards
  const visibleCards = [
    TESTIMONIALS[current % total],
    TESTIMONIALS[(current + 1) % total],
    TESTIMONIALS[(current + 2) % total],
  ];

  return (
    <section
      ref={ref}
      dir="rtl"
      className="ft relative overflow-hidden py-28"
      style={{ background: "linear-gradient(180deg,#050d1f 0%,#0a1a38 60%,#060e22 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fo absolute rounded-full" style={{ width: 600, height: 600, top: -200, left: -200, background: "radial-gradient(circle,rgba(212,168,67,0.05) 0%,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 hero-grid" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className={visible ? "ru" : "opacity-0"}>
          <SecHeader dark badge="شهادات العملاء" pre="آراء " hi="عملائنا" sub="ماذا يقول عملاؤنا عن خدماتنا" />
        </div>

        {/* Slider row */}
        <div className="flex items-center gap-4">
          {/* Prev button */}
          <button
            onClick={prev}
            className="nb shrink-0 w-11 h-11 rounded-full flex items-center justify-center border cursor-pointer"
            style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {visibleCards.map((t, i) => (
              <div
                key={`${t.id}-${current}-${i}`}
                className={`tc-card rounded-3xl p-6 border relative ${i === 1 ? "act" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(16px)",
                  animation: "slideUp 0.45s ease both",
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                {/* Quote decoration */}
                <div className="absolute top-5 left-5 text-4xl font-black select-none"
                  style={{ color: "rgba(212,168,67,0.13)", fontFamily: "Georgia,serif", lineHeight: 1 }}>"</div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array(t.stars).fill(0).map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#d4a843" stroke="#d4a843" strokeWidth="1">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-7 mb-6" style={{ color: "rgba(255,255,255,0.72)" }}>"{t.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 bg-gold" style={{ color: "#050d1f" }}>
                    {t.letter}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{t.name}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{t.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="nb shrink-0 w-11 h-11 rounded-full flex items-center justify-center border cursor-pointer"
            style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="nd h-2 rounded-full border-0 cursor-pointer"
              style={{
                width: i === current ? 28 : 8,
                background: i === current ? "#d4a843" : "rgba(255,255,255,0.22)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}