import React from 'react'

import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/Partners.css";

const ICONS = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20V10M17 20V4M22 20h.01"/></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M21 12h-2M19.07 19.07l-1.41-1.41M12 21v-2M6.34 17.66l-1.41 1.41M3 12H1M6.34 6.34L4.93 4.93"/></svg>,
];

export default function Partners() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const icons  = t("partners.icons",  { returnObjects: true });
  const stats  = t("partners.stats",  { returnObjects: true });

  // نكرر القائمة مرتين عشان الـ marquee يكون seamless
  const track = [...icons, ...icons];

  return (
    <section id="partners" ref={sectionRef} dir={dir}
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(160deg,#f0e8d5 0%,#ede0c4 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="partners-orb absolute rounded-full"
          style={{ width:600,height:300,top:-100,left:-200,
            background:"radial-gradient(circle,rgba(212,168,67,0.06) 0%,transparent 70%)",
            filter:"blur(60px)" }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={`text-center mb-12 ${visible ? "partners-reveal" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{ background:"rgba(212,168,67,0.1)",borderColor:"rgba(212,168,67,0.3)",color:"#9a6f1a" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>
            {t("partners.badge")}
          </div>
          <h2 className="font-black mb-3" style={{ fontSize:"clamp(28px,4vw,44px)",color:"#111827" }}>
            {t("partners.heading_plain")}{" "}
            <span className="text-gold-grad">{t("partners.heading_gold")}</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color:"#6b7280" }}>
            {t("partners.subheading")}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,transparent,rgba(212,168,67,0.5))" }}/>
            <div className="w-2 h-2 rounded-full bg-yellow-400"/>
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,rgba(212,168,67,0.5),transparent)" }}/>
          </div>
        </div>

        {/* Marquee */}
        <div className={`${visible ? "partners-reveal" : "opacity-0"}`}
          style={{ animationDelay:"0.2s" }}>
          <div className="relative" style={{ overflow:"hidden" }}>
            {/* fade edges */}
            <div className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
              style={{ background:"linear-gradient(270deg,#f0e8d5,transparent)" }}/>
            <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
              style={{ background:"linear-gradient(90deg,#f0e8d5,transparent)" }}/>

            <div className="mq-track">
              {track.map((p, i) => (
                <div key={i} className="mq-item">
                  <div className="partner-bubble w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background:"linear-gradient(135deg,#0c1d40,#1a3570)", boxShadow:"0 6px 24px rgba(15,36,83,0.22)" }}>
                    <span className="partner-icon" style={{ color:"#d4a843" }}>
                      {ICONS[i % ICONS.length]}
                    </span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color:"#6b7280" }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-5 mt-12 ${visible ? "partners-reveal" : "opacity-0"}`}
          style={{ animationDelay:"0.35s" }}>
          {stats.map(({ n, label }) => (
            <div key={label} className="stat-chip text-center rounded-2xl py-6 px-4 border"
              style={{ background:"rgba(255,255,255,0.6)",borderColor:"rgba(212,168,67,0.2)",boxShadow:"0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="text-3xl font-black mb-2 text-gold-grad">{n}</div>
              <div className="text-sm" style={{ color:"#6b7280" }}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}