import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/About.css";

const ICONS = {
  vision:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  mission: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  values:  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
};

export default function AboutModal({ cardId, onClose }) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const dir  = isAr ? "rtl" : "ltr";

  // ── جيب البيانات من الترجمة ──────────────────────────────────────────────
  const title    = t(`about.modal.${cardId}.title`);
  const sections = t(`about.modal.${cardId}.sections`, { returnObjects: true });
  const closeLabel = t("about.modal.close");

  // ── إغلاق بـ Escape ──────────────────────────────────────────────────────
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  // ── منع scroll الخلفية ───────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="about-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="about-modal" dir={dir}>

        {/* Header */}
        <div className="about-modal-header">
          <div className="modal-header-icon">{ICONS[cardId]}</div>
          <h2 className="about-modal-title">{title}</h2>
          <button className="about-modal-close" onClick={onClose} aria-label="close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="modal-divider" />

        {/* Body */}
        <div className="about-modal-body">
          {Array.isArray(sections) && sections.map((sec, i) => (
            <div className="modal-section" key={i} style={{ animationDelay: `${0.08 + i * 0.07}s` }}>
              <div className="modal-section-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="modal-section-content">
                <h3 className="modal-section-heading">{sec.heading}</h3>
                <p className="modal-section-body">{sec.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="about-modal-footer">
          <button className="modal-close-btn" onClick={onClose}>{closeLabel}</button>
        </div>

      </div>
    </div>
  );
}