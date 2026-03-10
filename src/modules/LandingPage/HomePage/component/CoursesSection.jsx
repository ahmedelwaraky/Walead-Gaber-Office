// ═══════════════════════════════════════
//  CoursesSection.jsx
// ═══════════════════════════════════════

import { useRef } from "react";
import { useInView, SecHeader } from "./globals";

const COURSES = [
  { id: "c1", level: "مبتدئ", levelColor: "#15803d", title: "أساسيات المحاسبة",  desc: "تعلم المبادئ الأساسية للمحاسبة المالية والقيود المحاسبية",        hours: 20, students: 234 },
  { id: "c2", level: "متوسط", levelColor: "#b45309", title: "المحاسبة الضريبية", desc: "إتقان إعداد الإقرارات الضريبية والتخطيط الضريبي",                  hours: 25, students: 189 },
  { id: "c3", level: "متقدم", levelColor: "#b91c1c", title: "التحليل المالي",    desc: "تحليل القوائم المالية واتخاذ القرارات الاستثمارية",                hours: 30, students: 156 },
  { id: "c4", level: "مبتدئ", levelColor: "#15803d", title: "Excel للمحاسبين",  desc: "استخدام الإكسل المتقدم في العمليات المحاسبية والتقارير",           hours: 15, students: 312 },
];

function BookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  );
}

export default function CoursesSection() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section
      id="courses"
      ref={ref}
      dir="rtl"
      className="ft relative overflow-hidden py-28"
      style={{ background: "linear-gradient(160deg,#fefcf7 0%,#fdf8ee 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fo absolute rounded-full" style={{ width: 500, height: 500, bottom: -150, right: -150, background: "radial-gradient(circle,rgba(212,168,67,0.06) 0%,transparent 70%)", filter: "blur(65px)" }} />
        <div className="fo absolute rounded-full" style={{ width: 400, height: 400, top: -100, left: -100, background: "radial-gradient(circle,rgba(212,168,67,0.05) 0%,transparent 70%)", filter: "blur(55px)", animationDelay: "-4s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className={visible ? "ru" : "opacity-0"}>
          <SecHeader badge="تعلّم معنا" pre="الدورات " hi="التدريبية" sub="طوّر مهاراتك المهنية مع دوراتنا التدريبية المتخصصة" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {COURSES.map((course, i) => (
            <div
              key={course.id}
              className={`cc rounded-3xl border p-6 flex flex-col ${visible ? "si" : "opacity-0"}`}
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
                  className="ci w-14 h-14 rounded-2xl flex items-center justify-center bg-gold"
                  style={{ color: "#050d1f", boxShadow: "0 4px 16px rgba(212,168,67,0.3)" }}
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

              <h3 className="font-black text-lg text-center mb-2 leading-tight" style={{ color: "#1f2937" }}>
                {course.title}
              </h3>

              <p className="text-xs leading-5 text-center mb-4 flex-1" style={{ color: "#9ca3af" }}>
                {course.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-center gap-5 mb-5 text-xs" style={{ color: "#9ca3af" }}>
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {course.hours} ساعة
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  {course.students} طالب
                </span>
              </div>

              <button className="eb ft w-full py-3 rounded-xl text-sm font-bold border-0 cursor-pointer" style={{ color: "#050d1f" }}>
                التسجيل الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}