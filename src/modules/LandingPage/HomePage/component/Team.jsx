import React, { useEffect } from "react";
import "../style/Team.css";
import { useTranslation } from "react-i18next";

const managersData = [
  { id: "m1", nameKey: "team.manager1.name", roleKey: "team.manager1.role", specKey: "team.manager1.spec", badge: "CPA • CFA", initials: "م.س" },
  { id: "m2", nameKey: "team.manager2.name", roleKey: "team.manager2.role", specKey: "team.manager2.spec", badge: "MBA • CMA", initials: "ن.ع" },
];

const officeManagerData = {
  id: "om1", nameKey: "team.officeManager.name", roleKey: "team.officeManager.role",
  specKey: "team.officeManager.spec", badge: "BBA", initials: "ك.م",
};

const accountantsData = [
  { id: 1,  nameKey: "team.acc1.name",  specKey: "team.acc1.spec",  years: 6,  initials: "ع.خ" },
  { id: 2,  nameKey: "team.acc2.name",  specKey: "team.acc2.spec",  years: 4,  initials: "س.أ" },
  { id: 3,  nameKey: "team.acc3.name",  specKey: "team.acc3.spec",  years: 8,  initials: "ي.ع" },
  { id: 4,  nameKey: "team.acc4.name",  specKey: "team.acc4.spec",  years: 3,  initials: "م.ح" },
  { id: 5,  nameKey: "team.acc5.name",  specKey: "team.acc5.spec",  years: 7,  initials: "ط.م" },
  { id: 6,  nameKey: "team.acc6.name",  specKey: "team.acc6.spec",  years: 5,  initials: "ر.إ" },
  { id: 7,  nameKey: "team.acc7.name",  specKey: "team.acc7.spec",  years: 9,  initials: "أ.ف" },
  { id: 8,  nameKey: "team.acc8.name",  specKey: "team.acc8.spec",  years: 4,  initials: "د.س" },
  { id: 9,  nameKey: "team.acc9.name",  specKey: "team.acc9.spec",  years: 11, initials: "خ.ر" },
  { id: 10, nameKey: "team.acc10.name", specKey: "team.acc10.spec", years: 6,  initials: "ن.د" },
  { id: 11, nameKey: "team.acc11.name", specKey: "team.acc11.spec", years: 3,  initials: "ه.س" },
  { id: 12, nameKey: "team.acc12.name", specKey: "team.acc12.spec", years: 7,  initials: "و.ج" },
  { id: 13, nameKey: "team.acc13.name", specKey: "team.acc13.spec", years: 5,  initials: "آ.م" },
  { id: 14, nameKey: "team.acc14.name", specKey: "team.acc14.spec", years: 8,  initials: "ك.ع" },
  { id: 15, nameKey: "team.acc15.name", specKey: "team.acc15.spec", years: 4,  initials: "ل.ص" },
];

const AvatarSVG = ({ initials, size = 80, isManager = false }) => {
  const uid = `av${initials.replace(/\./g, "")}${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`bg-${uid}`} cx="38%" cy="32%" r="72%">
          <stop offset="0%" stopColor={isManager ? "#0a1628" : "#081220"} />
          <stop offset="100%" stopColor={isManager ? "#050c18" : "#040d1a"} />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill={`url(#bg-${uid})`} />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#C9A84C"
        strokeWidth={isManager ? "1.5" : "1"}
        strokeOpacity={isManager ? "0.7" : "0.4"}
        strokeDasharray={isManager ? "0" : "3 2"}
      />
      {isManager && <>
        <circle cx="50" cy="4"  r="2" fill="#C9A84C" opacity="0.9"/>
        <circle cx="50" cy="96" r="2" fill="#C9A84C" opacity="0.9"/>
        <circle cx="4"  cy="50" r="2" fill="#C9A84C" opacity="0.9"/>
        <circle cx="96" cy="50" r="2" fill="#C9A84C" opacity="0.9"/>
      </>}
      <text x="50" y="60" textAnchor="middle"
        fontSize={isManager ? "26" : "22"} fontWeight="800"
        fontFamily="'Tajawal','Cairo',sans-serif" fill="#C9A84C">
        {initials}
      </text>
    </svg>
  );
};

export default function Team() {
  const { t } = useTranslation();

  useEffect(() => {
    const singleCardWidth = 180 + 30;
    const cardsCount      = accountantsData.length;
    const animDuration    = cardsCount * 3;
    document.documentElement.style.setProperty("--acc-single-cw",   `${singleCardWidth}px`);
    document.documentElement.style.setProperty("--acc-cards-count", `${cardsCount}`);
    document.documentElement.style.setProperty("--acc-anim-dur",    `${animDuration}s`);
  }, []);

  const renderAccSet = (keyPrefix) =>
    accountantsData.map((a) => (
      <div className="acc-card" key={`${keyPrefix}-${a.id}`}>
        <div className="acc-av-wrap">
          <div className="acc-spinner" />
          <AvatarSVG initials={a.initials} size={68} />
        </div>
        <span className="acc-years">{a.years} {t("team.years", "سنوات خبرة")}</span>
        <h4 className="acc-name">{t(a.nameKey)}</h4>
        <p className="acc-spec">{t(a.specKey)}</p>
      </div>
    ));

  return (
    <section id="teams" className="team-section" dir="rtl">

      {/* Header */}
      <div className="team-header">
        <div className="team-tag"><span className="tag-dot" />{t("team.tag", "فريق العمل")}</div>
        <h2 className="team-title">
          {t("team.title1", "فريقنا")} <span className="gold-word">{t("team.title2", "المتميز")}</span>
        </h2>
        <p className="team-sub">{t("team.subtitle", "نخبة من المحترفين يعملون من أجل تميّزك المالي")}</p>
        <div className="title-bar"><span className="bar-dot" /></div>
      </div>

      {/* القيادة والإدارة */}
      <div className="static-row">
        <p className="row-label">{t("team.managersLabel", "⬥ القيادة والإدارة ⬥")}</p>

        {/* المديران */}
        <div className="managers-row">
          {managersData.map((m) => (
            <div className="circle-card mgr-card" key={m.id}>
              <div className="av-ring">
                <div className="av-spinner" /><div className="av-glow" />
                <AvatarSVG initials={m.initials} size={80} isManager />
              </div>
              <span className="card-badge">{m.badge}</span>
              <h3 className="card-name">{t(m.nameKey)}</h3>
              <p className="card-role gold">{t(m.roleKey)}</p>
              <p className="card-spec">{t(m.specKey)}</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>

        {/* مدير المكتب — صف منفصل وسطي */}
        <div className="office-row">
          <div className="square-card office-card">
            <div className="av-ring">
              <div className="av-spinner" /><div className="av-glow" />
              <AvatarSVG initials={officeManagerData.initials} size={80} isManager />
            </div>
            <span className="card-badge office-badge">{officeManagerData.badge}</span>
            <h3 className="card-name">{t(officeManagerData.nameKey)}</h3>
            <p className="card-role office-role">{t(officeManagerData.roleKey)}</p>
            <p className="card-spec">{t(officeManagerData.specKey)}</p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </div>

      {/* كاروسيل المحاسبين */}
      <div className="static-row">
        <p className="row-label">{t("team.accLabel", "⬥ الفريق المحاسبي ⬥")}</p>
      </div>

      <div className="carousel-container">
        <div className="fade-l" /><div className="fade-r" />
        <div className="carousel-track acc-track">
          {renderAccSet("set1")}
          {renderAccSet("set2")}
          {renderAccSet("set3")}
        </div>
      </div>

    </section>
  );
}