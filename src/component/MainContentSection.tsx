import React from "react";

const ecosystemFeatures = [
  {
    title: "RWA Marketplace",
    description:
      "A blockchain-powered platform for tokenizing real-world assets, enabling fractional ownership, enhanced liquidity, and secure global asset trading.",
  },
  {
    title: "Affiliate Program",
    description:
      "Earn rewards by referring users, promoting the platform, and growing the ecosystem through strategic partnerships and community-driven incentives.",
  },
  {
    title: "Fiat-to-Crypto (P2P)",
    description:
      "Convert fiat to crypto securely through a decentralized peer-to-peer network, enabling fast and transparent transactions without intermediaries.",
  },
  {
    title: "Nano Pay (Bank Transfers)",
    description:
      "Facilitate seamless and instant bank transfers for crypto-related transactions, bridging traditional finance with blockchain-powered payments.",
  },
];

export const MainContentSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="/rectangle-10.png"
            alt="NanoEx Ecosystem Illustration"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h2
            className="fw-bold"
            style={{
              fontSize: "70px",
              lineHeight: "1.2",
              fontFamily: "League Spartan, Helvetica",
              background: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NanoEx Ecosystem
          </h2>

          <p className="text-white mt-4" style={{ fontFamily: "Poppins, Helvetica" }}>
            Our ecosystem supports the entire lifecycle of digital asset trading
            and investment,
            <br />
            offering seamless transactions, secure payments, automation, and
            rewarding opportunities.
          </p>

          <div className="mt-5">
            {ecosystemFeatures.map(({ title, description }, index) => (
              <div className="card bg-transparent border-0 mb-4" key={index}>
                <div className="card-body px-0">
                  <h5 className="card-title text-light fw-bold" style={{ fontFamily: "Poppins, Helvetica" }}>
                    {title}
                  </h5>
                  <p className="card-text text-white" style={{ fontFamily: "Poppins, Helvetica" }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
