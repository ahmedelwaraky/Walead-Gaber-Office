import React from "react";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/Partners.css";
import inbat       from "../../../../assets/images/inbat.png";
import onpay       from "../../../../assets/images/onpay.png";
import radix       from "../../../../assets/images/radix.png";
import tfc         from "../../../../assets/images/tfc.png";
import skyway      from "../../../../assets/images/skyway.png";
import springair   from "../../../../assets/images/springair.png";
import sedra       from "../../../../assets/images/sedra.png";
import feena       from "../../../../assets/images/feena.png";
import continental from "../../../../assets/images/continental.png";

const STATS = [
  { n: "120+", labelAr: "عميل مؤسسي",  labelEn: "Institutional Clients" },
  { n: "15+",  labelAr: "قطاع متخصص",  labelEn: "Specialized Sectors"   },
  { n: "98%",  labelAr: "معدل الرضا",   labelEn: "Satisfaction Rate"     },
];

const ROW1 = [inbat, onpay, radix, tfc, skyway];
const ROW2 = [springair, sedra, feena, continental];

export default function Partners() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const dir  = isAr ? "rtl" : "ltr";

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

  return (
    <section id="partners" ref={sectionRef} dir={dir} className="partners-section">
      <div className="p-orb p-orb-1" />
      <div className="p-orb p-orb-2" />
      <div className="p-grid" />

      <div className="partners-inner">

        {/* ── Header ── */}
        <div className={`partners-header ${visible ? "p-reveal" : "p-hidden"}`}>
          <div className="p-badge">
            <span className="p-badge-dot" />
            {isAr ? "عملاؤنا" : "Our Clients"}
          </div>
          <h2 className="p-title">
            {isAr ? "شركاء " : "Success "}
            <span className="p-gold">{isAr ? "النجاح" : "Partners"}</span>
          </h2>
          <p className="p-sub">
            {isAr
              ? "نفتخر بثقة عملائنا وشراكتنا مع أبرز المؤسسات"
              : "We are proud of our clients' trust and partnerships with leading institutions"}
          </p>
          <div className="p-divider"><span className="p-divider-dot" /></div>
        </div>

        {/* ── Rows ── */}

        <div className={`p-rows ${visible ? "p-reveal" : "p-hidden"}`} style={{ animationDelay: "0.15s" }}>
          <div className="mq-row">
            {ROW1.map((src, i) => <Bubble key={i} src={src} />)}
          </div>
          <div className="mq-row">
            {ROW2.map((src, i) => <Bubble key={i} src={src} />)}
          </div>
        </div>

        {/* ── Stats ── */}
        <div
          className={`p-stats ${visible ? "p-reveal" : "p-hidden"}`}
          style={{ animationDelay: "0.3s" }}
        >
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

function Bubble({ src }) {
  return (
    <div className="partner-bubble">
      <img src={src} alt="" className="partner-img" draggable="false" />
    </div>
  );
}