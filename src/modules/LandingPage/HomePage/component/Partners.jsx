import React from 'react'
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/Partners.css";

// ── أيقونات الشركاء ───────────────────────────────────────────────────────────
const ICONS = [
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20V10M17 20V4M22 20h.01"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M21 12h-2M19.07 19.07l-1.41-1.41M12 21v-2M6.34 17.66l-1.41 1.41M3 12H1M6.34 6.34L4.93 4.93"/></svg>,
];
 
const LABELS_AR = ["العقارات","المالية","البنوك","القانونية","التجارة","الإحصاء","التقنية","المحاسبة","الاستشارات"];
const LABELS_EN = ["Real Estate","Finance","Banking","Legal","Commerce","Analytics","Technology","Accounting","Consulting"];
 
const STATS = [
  { n: "+500", labelAr: "عميل راضٍ",      labelEn: "Happy Clients"     },
  { n: "+15",  labelAr: "سنة خبرة",        labelEn: "Years Experience"  },
  { n: "+50",  labelAr: "شريك موثوق",      labelEn: "Trusted Partners"  },
];
 
export default function Partners() {
  const { t, i18n } = useTranslation();
  const isAr  = i18n.language === "ar";
  const dir   = isAr ? "rtl" : "ltr";
  const labels = isAr ? LABELS_AR : LABELS_EN;
 
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
 
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);
 
  useEffect(() => {
    // ✅ نفس طريقة Team بالظبط
    const singleItemWidth = 130 + 20; // عرض العنصر + المارجن (10+10)
    const itemsCount      = ICONS.length;
    const animDuration    = itemsCount * 4;
 
    document.documentElement.style.setProperty("--mq-single-iw",  `${singleItemWidth}px`);
    document.documentElement.style.setProperty("--mq-items-count", `${itemsCount}`);
    document.documentElement.style.setProperty("--mq-anim-dur",    `${animDuration}s`);
  }, []);
 
  // ✅ نفس دالة renderSet من Team
  const renderSet = (keyPrefix) =>
    ICONS.map((icon, i) => (
      <div className="mq-item" key={`${keyPrefix}-${i}`}>
        <div className="partner-bubble">
          <span className="partner-icon">{icon}</span>
        </div>
        <span className="partner-label">{labels[i]}</span>
      </div>
    ));
 
  return (
    <section id="partners" ref={sectionRef} dir={dir} className="partners-section">
 
      {/* ── زخارف الخلفية ── */}
      <div className="p-orb p-orb-1" />
      <div className="p-orb p-orb-2" />
      <div className="p-grid" />
 
      <div className="partners-inner">
 
        {/* ── Header ── */}
        <div className={`partners-header ${visible ? "p-reveal" : "p-hidden"}`}>
          <div className="p-badge">
            <span className="p-badge-dot" />
            {isAr ? "شركاؤنا" : "Our Partners"}
          </div>
          <h2 className="p-title">
            {isAr ? "من " : "Who "}<span className="p-gold">{isAr ? "نثق بهم" : "We Trust"}</span>
          </h2>
          <p className="p-sub">
            {isAr
              ? "نفخر بشراكاتنا الاستراتيجية مع كبرى المؤسسات والشركات"
              : "We take pride in our strategic partnerships with leading institutions"}
          </p>
          <div className="p-divider"><span className="p-divider-dot" /></div>
        </div>
 
        {/* ── Marquee — 3 sets ✅ ── */}
        <div className={`p-marquee-wrap ${visible ? "p-reveal" : "p-hidden"}`} style={{ animationDelay: "0.15s" }}>
          <div className="p-fade-l" />
          <div className="p-fade-r" />
          {/* ✅ نفس track properties من Team */}
          <div className="mq-track">
            {renderSet("s1")}
          </div>
        </div>
 
        {/* ── Stats ── */}
        <div className={`p-stats ${visible ? "p-reveal" : "p-hidden"}`} style={{ animationDelay: "0.3s" }}>
          {STATS.map((s) => (
            <div className="p-stat" key={s.n}>
              <div className="p-stat-n">{s.n}</div>
              <div className="p-stat-l">{isAr ? s.labelAr : s.labelEn}</div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}
 