import React from "react";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/Courses.css";
const BookIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
export default function Courses() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const items = t("courses.items", { returnObjects: true });

  return (
    <section
      id="courses"
      ref={ref}
      dir={dir}
      className="relative overflow-hidden py-28"
      style={{ background: "linear-gradient(160deg,#fefcf7 0%,#fdf8ee 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="course-orb absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: -150,
            right: -150,
            background:
              "radial-gradient(circle,rgba(212,168,67,0.06) 0%,transparent 70%)",
            filter: "blur(65px)",
          }}
        />
        <div
          className="course-orb absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            top: -100,
            left: -100,
            background:
              "radial-gradient(circle,rgba(212,168,67,0.05) 0%,transparent 70%)",
            filter: "blur(55px)",
            animationDelay: "-4s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          className={`text-center mb-12 ${visible ? "course-reveal" : "opacity-0"}`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{
              background: "rgba(212,168,67,0.1)",
              borderColor: "rgba(212,168,67,0.3)",
              color: "#9a6f1a",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            {t("courses.badge")}
          </div>
          <h2
            className="font-black mb-3"
            style={{ fontSize: "clamp(28px,4vw,44px)", color: "#111827" }}
          >
            {t("courses.heading_plain")}{" "}
            <span className="text-gold-grad">{t("courses.heading_gold")}</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "#6b7280" }}
          >
            {t("courses.subheading")}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div
              className="h-px w-16 rounded"
              style={{
                background:
                  "linear-gradient(90deg,transparent,rgba(212,168,67,0.5))",
              }}
            />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div
              className="h-px w-16 rounded"
              style={{
                background:
                  "linear-gradient(90deg,rgba(212,168,67,0.5),transparent)",
              }}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {items.map((course, i) => (
            <div
              key={course.id}
              className={`course-card rounded-3xl border p-6 flex flex-col ${visible ? "course-scale" : "opacity-0"}`}
              style={{
                background: "rgba(255,255,255,0.92)",
                borderColor: "rgba(212,168,67,0.13)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                animationDelay: `${0.08 * i}s`,
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className="course-icon w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    color: "#050d1f",
                    boxShadow: "0 4px 16px rgba(212,168,67,0.3)",
                  }}
                >
                  <BookIcon />
                </div>
              </div>

              {/* Level badge */}
              <div className="flex justify-center mb-3">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-bold border"
                  style={{
                    background: `${course.levelColor}18`,
                    color: course.levelColor,
                    borderColor: `${course.levelColor}30`,
                  }}
                >
                  {course.level}
                </span>
              </div>

              <h3
                className="font-black text-lg text-center mb-2 leading-tight"
                style={{ color: "#1f2937" }}
              >
                {course.title}
              </h3>

              <p
                className="text-xs leading-5 text-center mb-4 flex-1"
                style={{ color: "#9ca3af" }}
              >
                {course.desc}
              </p>

              {/* Meta */}
              <div
                className="flex items-center justify-center gap-5 mb-5 text-xs"
                style={{ color: "#9ca3af" }}
              >
                <span className="flex items-center gap-1.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {course.hours} {t("courses.hours_unit")}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {course.students} {t("courses.students_unit")}
                </span>
              </div>

              <button
                className="course-enroll w-full py-3 rounded-xl text-sm font-bold border-0 cursor-pointer"
                style={{ color: "#050d1f" }}
              >
                {t("courses.enroll_btn")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
