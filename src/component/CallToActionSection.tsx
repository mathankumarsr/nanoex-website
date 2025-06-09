import React from "react";

export const CallToActionSection = () => {
  const navLinks = [
    { title: "Whitepaper", hasSeparator: true },
    { title: "About Us", hasSeparator: true },
    { title: "Privacy Policy", hasSeparator: true },
    { title: "Terms & Conditions", hasSeparator: true },
    { title: "Contact Us", hasSeparator: false },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="position-relative w-100 d-flex flex-column align-items-center justify-content-center gap-3 py-5 px-4 border-top"
      style={{
        borderImage: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%) 1",
        borderImageSlice: 1,
        background: "linear-gradient(180deg, rgba(86,198,144,0.2) 0%, rgba(42,96,70,0.2) 100%)",
      }}
    >
      <div className="d-flex flex-column align-items-center gap-4 w-100" style={{ maxWidth: "1140px" }}>
        <div className="d-flex flex-column align-items-center gap-3">
          <img
            src="/rectangle-1-1.png"
            alt="Logo"
            width={271}
            height={102}
            className="img-fluid"
            style={{ width: "270px", height: "102px", objectFit: "cover" }}
          />

          <p className="text-white text-center mb-0" style={{ fontSize: "1rem", lineHeight: "1.75rem", maxWidth: "661px" }}>
            Empowering the Future of Finance with RWA Tokenization & Blockchain Innovation
          </p>
        </div>

        <nav className="d-flex flex-wrap align-items-center justify-content-center gap-3">
          {navLinks.map((link, index) => (
            <div key={index} className="d-flex align-items-center">
              <button
                className="btn btn-link text-white text-decoration-none p-0"
                style={{ fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: 500 }}
              >
                {link.title}
              </button>
              {link.hasSeparator && (
                <span className="text-white mx-2" style={{ fontSize: "1.25rem" }}>|</span>
              )}
            </div>
          ))}
        </nav>

        <div className="card shadow rounded bg-transparent border-0">
          <div className="card-body p-0">
            <p className="text-white text-center" style={{ fontSize: "0.75rem", lineHeight: "1.75rem", maxWidth: "1190px", fontWeight: 300 }}>
              Disclaimer: Asset tokenization and cryptocurrencies may be subject to regulatory restrictions in your jurisdiction. The value of
              digital assets may fluctuate, and profits could be subject to taxes or other legal obligations. Always conduct your own research
              before investing.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="btn position-absolute rounded-circle p-0 border-0"
        style={{
          top: "14rem",
          right: "2rem",
          width: "76px",
          height: "73px",
          background: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
        }}
      >
        <img src="/rectangle-18.png" alt="Back to top" style={{ width: "36px", height: "36px" }} />
      </button>
    </footer>
  );
};