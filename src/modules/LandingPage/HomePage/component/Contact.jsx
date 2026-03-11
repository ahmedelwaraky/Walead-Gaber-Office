import React from 'react'


import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../style/ContactSection.css";

const INFO_ICONS = {
  address: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  phone:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 9.71a19.86 19.86 0 01-3.07-8.67A2 2 0 013.62 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  email:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
};

function MapPlaceholder({ label }) {
  return (
    <div className="rounded-2xl overflow-hidden border relative"
      style={{ borderColor:"rgba(212,168,67,0.14)",height:210,background:"linear-gradient(135deg,#e8eef6,#dce4ef)" }}>
      <div className="absolute inset-0"
        style={{ backgroundImage:"linear-gradient(rgba(15,36,83,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(15,36,83,0.07) 1px,transparent 1px)",backgroundSize:"30px 30px" }}/>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 210" preserveAspectRatio="none">
        <line x1="0" y1="70"  x2="400" y2="70"  stroke="rgba(255,255,255,0.8)" strokeWidth="3"/>
        <line x1="0" y1="140" x2="400" y2="140" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
        <line x1="130" y1="0" x2="130" y2="210" stroke="rgba(255,255,255,0.8)" strokeWidth="3"/>
        <line x1="260" y1="0" x2="260" y2="210" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
        <line x1="0" y1="105" x2="400" y2="105" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
        <line x1="195" y1="0" x2="195" y2="210" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background:"linear-gradient(135deg,#d4a843,#f0c96a)",boxShadow:"0 4px 18px rgba(212,168,67,0.5)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#050d1f" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <div className="w-3 h-3 rounded-full mt-1" style={{ background:"rgba(212,168,67,0.25)" }}/>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold"
        style={{ background:"rgba(255,255,255,0.92)",color:"#374151",boxShadow:"0 2px 12px rgba(0,0,0,0.1)" }}>
        {label}
      </div>
    </div>
  );
}
export default function Contact() {
 
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
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

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name:"", email:"", message:"" });
    }
  };

  const infoItems = t("contact.info", { returnObjects: true });
  const f = t("contact.form", { returnObjects: true });

  return (
    <section id="contact" ref={ref} dir={dir}
      className="relative overflow-hidden py-28"
      style={{ background:"linear-gradient(160deg,#fefcf7 0%,#fdf8ee 100%)" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="contact-orb absolute rounded-full"
          style={{ width:500,height:500,top:-100,right:-150,background:"radial-gradient(circle,rgba(212,168,67,0.07) 0%,transparent 70%)",filter:"blur(65px)" }}/>
        <div className="contact-orb absolute rounded-full"
          style={{ width:400,height:400,bottom:-100,left:-100,background:"radial-gradient(circle,rgba(212,168,67,0.05) 0%,transparent 70%)",filter:"blur(55px)",animationDelay:"-4s" }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className={`text-center mb-12 ${visible ? "contact-reveal" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{ background:"rgba(212,168,67,0.1)",borderColor:"rgba(212,168,67,0.3)",color:"#9a6f1a" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>
            {t("contact.badge")}
          </div>
          <h2 className="font-black mb-3" style={{ fontSize:"clamp(28px,4vw,44px)",color:"#111827" }}>
            {t("contact.heading_plain")}{" "}
            <span className="text-gold-grad">{t("contact.heading_gold")}</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color:"#6b7280" }}>
            {t("contact.subheading")}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,transparent,rgba(212,168,67,0.5))" }}/>
            <div className="w-2 h-2 rounded-full bg-yellow-400"/>
            <div className="h-px w-16 rounded" style={{ background:"linear-gradient(90deg,rgba(212,168,67,0.5),transparent)" }}/>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Info + Map */}
          <div className={`flex flex-col gap-4 ${visible ? "contact-reveal" : "opacity-0"}`}
            style={{ animationDelay:"0.1s" }}>
            {infoItems.map(({ id, label, value }) => (
              <div key={id} className="contact-info-card flex items-center gap-4 rounded-2xl border p-5"
                style={{ background:"rgba(255,255,255,0.88)",borderColor:"rgba(212,168,67,0.14)",boxShadow:"0 4px 18px rgba(0,0,0,0.05)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background:"linear-gradient(135deg,#0c1d40,#1a3570)" }}>
                  <span style={{ color:"#d4a843" }}>{INFO_ICONS[id]}</span>
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color:"#9ca3af" }}>{label}</div>
                  <div className="text-sm font-bold" style={{ color:"#1f2937" }}>{value}</div>
                </div>
              </div>
            ))}
            <MapPlaceholder label={t("contact.map_label")} />
          </div>

          {/* Form */}
          <div className={`${visible ? "contact-reveal" : "opacity-0"}`}
            style={{ animationDelay:"0.2s" }}>
            <div className="rounded-3xl p-8 border relative overflow-hidden"
              style={{ background:"rgba(255,255,255,0.92)",borderColor:"rgba(212,168,67,0.18)",boxShadow:"0 20px 60px rgba(0,0,0,0.07)" }}>
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-3xl"
                style={{ background:"linear-gradient(90deg,transparent,#d4a843,transparent)" }}/>

              <div className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color:"#374151" }}>{f.name_label}</label>
                  <input type="text" value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                    placeholder={f.name_placeholder}
                    className="contact-input w-full px-4 py-3 rounded-xl border text-sm"
                    style={{ borderColor:"rgba(212,168,67,0.22)",background:"rgba(253,248,238,0.55)",color:"#1f2937" }}/>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color:"#374151" }}>{f.email_label}</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})}
                    placeholder={f.email_placeholder}
                    className="contact-input w-full px-4 py-3 rounded-xl border text-sm"
                    style={{ borderColor:"rgba(212,168,67,0.22)",background:"rgba(253,248,238,0.55)",color:"#1f2937" }}/>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color:"#374151" }}>{f.msg_label}</label>
                  <textarea value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                    rows={5} placeholder={f.msg_placeholder}
                    className="contact-input w-full px-4 py-3 rounded-xl border text-sm resize-none"
                    style={{ borderColor:"rgba(212,168,67,0.22)",background:"rgba(253,248,238,0.55)",color:"#1f2937" }}/>
                </div>

                <button onClick={handleSubmit}
                  className={`contact-submit ${sent ? "sent" : ""} w-full py-3.5 rounded-xl text-[15px] font-bold border-0 cursor-pointer inline-flex items-center justify-center gap-3`}
                  style={{ color:"#050d1f" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  {sent ? f.sent : f.submit}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
