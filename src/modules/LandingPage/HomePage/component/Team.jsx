import React, { useEffect } from "react";
import "../style/Team.css";
import { useTranslation } from "react-i18next";

// ── استورد صور المديرين ──
import manager1Img from "../../../../assets/images/userIcon.png"; 
import manager2Img from "../../../../assets/images/userIcon.png"; 

// ── استورد صور فريق العمل ──
import officeManagerImg from "../../../../assets/images/userIcon.png"; 
import acc1Img from "../../../../assets/images/userIcon.png"; 
import acc2Img from "../../../../assets/images/userIcon.png"; 
import acc3Img  from "../../../../assets/images/userIcon.png"; 
import acc4Img  from "../../../../assets/images/userIcon.png"; 
import acc5Img  from "../../../../assets/images/userIcon.png"; 
import acc6Img  from "../../../../assets/images/userIcon.png"; 
import acc7Img  from "../../../../assets/images/userIcon.png"; 
import acc8Img  from "../../../../assets/images/userIcon.png"; 
import acc9Img  from "../../../../assets/images/userIcon.png"; 
import acc10Img from "../../../../assets/images/userIcon.png"; 
import acc11Img from "../../../../assets/images/userIcon.png"; 
import acc12Img from "../../../../assets/images/userIcon.png"; 
import acc13Img from "../../../../assets/images/userIcon.png"; 
import acc14Img from "../../../../assets/images/userIcon.png"; 
import acc15Img from "../../../../assets/images/userIcon.png"; 

const managersData = [
  { id: "m1", nameKey: "team.manager1.name", roleKey: "team.manager1.role", img: manager1Img },
  { id: "m2", nameKey: "team.manager2.name", roleKey: "team.manager2.role", img: manager2Img },
];

const carouselData = [
  { id: "om1", nameKey: "team.officeManager.name", roleKey: "team.officeManager.role", img: officeManagerImg },
  { id: "a1",  nameKey: "team.acc1.name",  roleKey: "team.acc1.role",  img: acc1Img  },
  { id: "a2",  nameKey: "team.acc2.name",  roleKey: "team.acc2.role",  img: acc2Img  },
  { id: "a3",  nameKey: "team.acc3.name",  roleKey: "team.acc3.role",  img: acc3Img  },
  { id: "a4",  nameKey: "team.acc4.name",  roleKey: "team.acc4.role",  img: acc4Img  },
  { id: "a5",  nameKey: "team.acc5.name",  roleKey: "team.acc5.role",  img: acc5Img  },
  { id: "a6",  nameKey: "team.acc6.name",  roleKey: "team.acc6.role",  img: acc6Img  },
  { id: "a7",  nameKey: "team.acc7.name",  roleKey: "team.acc7.role",  img: acc7Img  },
  { id: "a8",  nameKey: "team.acc8.name",  roleKey: "team.acc8.role",  img: acc8Img  },
  { id: "a9",  nameKey: "team.acc9.name",  roleKey: "team.acc9.role",  img: acc9Img  },
  { id: "a10", nameKey: "team.acc10.name", roleKey: "team.acc10.role", img: acc10Img },
  { id: "a11", nameKey: "team.acc11.name", roleKey: "team.acc11.role", img: acc11Img },
  { id: "a12", nameKey: "team.acc12.name", roleKey: "team.acc12.role", img: acc12Img },
  { id: "a13", nameKey: "team.acc13.name", roleKey: "team.acc13.role", img: acc13Img },
  { id: "a14", nameKey: "team.acc14.name", roleKey: "team.acc14.role", img: acc14Img },
  { id: "a15", nameKey: "team.acc15.name", roleKey: "team.acc15.role", img: acc15Img },
];

export default function Team() {
  const { t } = useTranslation();

  useEffect(() => {
    const singleCardWidth = 160 + 20;
    const cardsCount      = carouselData.length;
    const animDuration    = cardsCount * 3;
    document.documentElement.style.setProperty("--acc-single-cw",   `${singleCardWidth}px`);
    document.documentElement.style.setProperty("--acc-cards-count", `${cardsCount}`);
    document.documentElement.style.setProperty("--acc-anim-dur",    `${animDuration}s`);
  }, []);

  const renderCarouselSet = (keyPrefix) =>
    carouselData.map((a) => (
      <div className="acc-card" key={`${keyPrefix}-${a.id}`}>
        <div className="acc-av-wrap">
          <div className="acc-spinner" />
          <img
            src={a.img}
            alt={t(a.nameKey)}
            className="av-img av-img--sm"
            onError={(e) => { e.currentTarget.src = usericon; }}
          />
        </div>
        <h4 className="acc-name">{t(a.nameKey)}</h4>
        <p className="acc-spec">{t(a.roleKey)}</p>
      </div>
    ));

  return (
    <section id="teams" className="team-section" dir="rtl">

      {/* Header */}
      <div className="team-header">
        <div className="team-tag">
          <span className="tag-dot" />
          {t("team.tag", "فريق العمل")}
        </div>
        <h2 className="team-title">
          {t("team.title1", "فريقنا")}{" "}
          <span className="gold-word">{t("team.title2", "المتميز")}</span>
        </h2>
        <p className="team-sub">
          {t("team.subtitle", "نخبة من المحترفين يعملون من أجل تميّزك المالي")}
        </p>
        <div className="title-bar"><span className="bar-dot" /></div>
      </div>

      {/* المديران فقط */}
      <div className="static-row">
        <p className="row-label">{t("team.managersLabel", "⬥ القيادة ⬥")}</p>
        <div className="managers-row">
          {managersData.map((m) => (
            <div className="circle-card mgr-card" key={m.id}>
              <div className="av-ring">
                <div className="av-spinner" />
                <div className="av-glow" />
                <img
                  src={m.img}
                  alt={t(m.nameKey)}
                  className="av-img av-img--lg"
                  onError={(e) => { e.currentTarget.src = usericon; }}
                />
              </div>
              <h3 className="card-name">{t(m.nameKey)}</h3>
              <p className="card-role gold">{t(m.roleKey)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* كاروسيل — مدير المكتب + المحاسبون */}
      <div className="static-row">
        <p className="row-label">{t("team.accLabel", "⬥ فريق العمل ⬥")}</p>
      </div>

      <div className="carousel-container">
        <div className="fade-l" />
        <div className="fade-r" />
        <div className="carousel-track acc-track">
          {renderCarouselSet("set1")}
          {renderCarouselSet("set2")}
          {renderCarouselSet("set3")}
        </div>
      </div>

    </section>
  );
}