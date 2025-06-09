import React from "react";

export const BlogSection = () => {
  return (
    <section className="py-5 w-100">
      <div className="container py-5">
        <div className="card bg-dark text-white border-0 rounded-4 p-5 d-flex flex-md-row flex-column align-items-center justify-content-between gap-4">
          <div className="card-body p-0 d-flex flex-column gap-4">
            <div>
              <h2
                className="fw-bold display-4 text-start"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "'League Spartan', Helvetica",
                }}
              >
                Why Choose NanoEx RWA?
              </h2>
              <p
                className="mt-4"
                style={{
                  maxWidth: "981px",
                  fontFamily: "'Poppins', Helvetica",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                }}
              >
                NanoEx RWA revolutionizes real-world asset tokenization,
                offering secure, fractional, and globally accessible
                investments. With blockchain-backed transparency, seamless
                liquidity, and automated yield generation, investors gain
                unmatched financial opportunities. The platform ensures
                regulatory compliance, multi-chain integration, and
                institutional-grade security, making asset trading efficient and
                trustable. Backed by governance rights, staking rewards, and
                exclusive investment access, NanoEx RWA bridges traditional
                finance with blockchain innovation, redefining how assets are
                owned, traded, and managed worldwide.
              </p>
            </div>

            <button
              className="btn text-black fw-medium px-4 py-2 rounded-pill"
              style={{
                background:
                  "linear-gradient(270deg, rgba(86,198,144,1) 0%, rgba(244,206,20,1) 100%)",
                fontFamily: "'Poppins', Helvetica",
                fontSize: "1.125rem",
              }}
            >
              Join The Giveaway
            </button>
          </div>

          <img
            src="/giveaway-c9cbcbb7700fa659b99a-png-1.png"
            alt="Giveaway"
            className="img-fluid"
            style={{ width: "451px", height: "355px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
