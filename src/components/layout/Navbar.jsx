import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#", active: true },
  { label: "عن الشركة", href: "#" },
  { label: "الخدمات", href: "#" },
  { label: "شركاء النجاح", href: "#" },
  { label: "الأخبار", href: "#" },
  { label: "الكورسات", href: "#" },
  { label: "تواصل معنا", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;600;700;800;900&display=swap');
        .font-tajawal { font-family: 'Tajawal', sans-serif; }

        .nav-link-underline {
          position: relative;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: 2px;
          right: 10px; left: 10px;
          height: 2px;
          background: linear-gradient(90deg, #d4a843, #f0c96a);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .nav-link-underline:hover::after,
        .nav-link-underline.active::after { transform: scaleX(1); }

        .logo-shine::after {
          content: '';
          position: absolute;
          top: -40%; right: -20%;
          width: 60%; height: 60%;
          background: rgba(255,255,255,0.28);
          border-radius: 50%;
        }

        .btn-gold {
          background: linear-gradient(135deg, #d4a843, #f0c96a);
          box-shadow: 0 4px 18px rgba(212,168,67,0.35);
          transition: all 0.25s ease;
        }
        .btn-gold:hover {
          transform: translateY(-1px);
          box-shadow: 0 7px 28px rgba(212,168,67,0.5);
        }

        .mobile-menu {
          animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ham-line {
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .ham-open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ham-open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ham-open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      `}</style>

      <nav
        dir="rtl"
        className={`font-tajawal fixed top-0 right-0 left-0 z-50 h-20 flex items-center justify-between px-6 md:px-10 transition-all duration-400 ${
          scrolled
            ? "border-b border-yellow-700/30 shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
            : "border-b border-yellow-700/10"
        }`}
        style={{
          background: scrolled
            ? "rgba(5,13,31,0.98)"
            : "linear-gradient(180deg,rgba(5,13,31,0.96) 0%,rgba(5,13,31,0.82) 100%)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-3 shrink-0 no-underline">
          <div
            className="logo-shine relative w-11 h-11 rounded-xl flex items-center justify-center text-xl font-black overflow-hidden"
            style={{
              background: "linear-gradient(135deg,#d4a843,#f0c96a)",
              color: "#050d1f",
              boxShadow: "0 4px 20px rgba(212,168,67,0.3)",
            }}
          >
            م
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white text-base font-extrabold tracking-tight">
              المكتب المالي
            </span>
            <span
              className="text-xs font-normal tracking-widest mt-0.5"
              style={{ color: "#d4a843" }}
            >
              Financial Office
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link-underline block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 no-underline ${
                  link.active
                    ? "active text-yellow-300"
                    : "text-white/70 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            className="font-tajawal px-5 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 cursor-pointer"
            style={{
              borderColor: "rgba(212,168,67,0.45)",
              color: "#f0c96a",
              background: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(212,168,67,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            تسجيل الدخول
          </button>
          <button className="btn-gold font-tajawal px-5 py-2 rounded-lg text-sm font-bold cursor-pointer border-0 text-[#050d1f]">
            ابدأ الآن ←
          </button>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer bg-transparent border-0 ${
            menuOpen ? "ham-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="ham-line block w-6 h-0.5 rounded"
              style={{ background: "#d4a843" }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          dir="rtl"
          className="font-tajawal mobile-menu fixed top-20 right-0 left-0 z-40 border-b border-yellow-700/20 px-6 py-4 flex flex-col gap-1 lg:hidden"
          style={{
            background: "rgba(5,13,31,0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all duration-200 ${
                link.active
                  ? "text-yellow-300 bg-yellow-400/10"
                  : "text-white/70 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3 mt-1 border-t border-white/10">
            <button
              className="font-tajawal flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold border cursor-pointer"
              style={{ borderColor: "rgba(212,168,67,0.4)", color: "#f0c96a", background: "transparent" }}
            >
              تسجيل الدخول
            </button>
            <button className="btn-gold font-tajawal flex-1 px-4 py-2.5 rounded-xl text-sm font-bold border-0 cursor-pointer text-[#050d1f]">
              ابدأ الآن ←
            </button>
          </div>
        </div>
      )}
    </>
  );
}