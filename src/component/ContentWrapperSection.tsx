import React from "react";

const featureCards = [
  {
    id: 1,
    title: "Up to 50% Fee Discounts",
    description: "Reduced trading, tokenization, and custody fees.",
    imageSrc: "/rectangle-8.png",
    gradient: true,
  },
  {
    id: 2,
    title: "Governance & Voting Rights",
    description: "Influence platform upgrades, fees, and asset listings.",
    imageSrc: "/rectangle-8-1.png",
  },
  {
    id: 3,
    title: "Exclusive Investment Access",
    description: "Early participation in premium tokenized assets.",
    imageSrc: "/rectangle-8-2.png",
  },
  {
    id: 4,
    title: "Staking\n& Rewards",
    description: "Earn high APY staking rewards and platform incentives.",
    imageSrc: "/rectangle-8-3.png",
  },
  {
    id: 5,
    title: "Global\nCrypto Card",
    description: "Use tokenized assets for real-world transactions.",
    imageSrc: "/rectangle-8-4.png",
  },
];

export const ContentWrapperSection = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center gap-4 px-3 py-5 w-100">
      <div className="text-center mb-5" style={{ maxWidth: "72rem" }}>
        <h1
          className="fw-bold"
          style={{
            fontFamily: "'League Spartan', Helvetica, Arial, sans-serif",
            fontSize: "4.5rem",
            background: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.1,
          }}
        >
          NanoEx RWA
        </h1>

        <h2
          className="fw-bold text-white"
          style={{
            fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
            fontSize: "2rem",
            lineHeight: 1.2,
          }}
        >
          Transforming Real-World Assets into <br />
          Digital Investments!
        </h2>

        <p
          className="text-white mx-auto mt-3"
          style={{
            fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            maxWidth: "64rem",
            letterSpacing: "0.05em",
            lineHeight: "1.5",
          }}
        >
          Welcome to NanoEx RWA, the ultimate platform for tokenizing real-world assets (RWAs) and unlocking a new era of liquidity, accessibility, and security in the investment landscape. The nRWA token is the backbone of the NanoEx RWA ecosystem, providing utility, governance, and exclusive investment opportunities for investors. By transforming traditionally illiquid assets—like real estate, fine art, commodities, and infrastructure—into fractionalized digital tokens, NanoEx RWA enables seamless trading, transparency, and enhanced liquidity.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4 w-100">
        {featureCards.map((card) => (
          <div
            key={card.id}
            className="card shadow-sm border-0"
            style={{
              width: "280px",
              borderRadius: "18px",
              background: card.gradient
                ? "linear-gradient(314deg, rgba(86,198,144,1) 0%, rgba(244,206,20,1) 100%)"
                : "white",
              color: card.gradient ? "white" : "black",
            }}
          >
            <div className="card-body p-3 d-flex flex-column align-items-start gap-2">
              <img
                src={card.imageSrc}
                alt="Feature icon"
                width={87}
                height={87}
                style={{ objectFit: "cover" }}
              />
              <h3
                className="fw-bold"
                style={{
                  fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
                  fontSize: "1.4375rem",
                  lineHeight: 1.2,
                  whiteSpace: "pre-line",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.125rem",
                  letterSpacing: "0.05em",
                  lineHeight: 1.4,
                  whiteSpace: "pre-line",
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p
        className="text-white mt-4 text-center mx-auto"
        style={{
          fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "1rem",
          maxWidth: "64rem",
          letterSpacing: "0.05em",
          lineHeight: "1.5",
        }}
      >
        NanoEx RWA is pioneering the future of asset ownership by bridging the gap between physical assets and blockchain technology. Join us in reshaping the future of real-world asset investment with blockchain technology!
      </p>
    </section>
  );
};
