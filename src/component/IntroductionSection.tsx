import React from "react";

const features = [
  {
    id: 1,
    title: "Advanced RWA Tokenization",
    description:
      "Enables secure and seamless conversion of real-world assets into blockchain-based tokens, ensuring legal ownership verification, valuation, & regulatory compliance.",
    image: "/rectangle-8-5.png",
    highlighted: true,
  },
  {
    id: 2,
    title: "Dual Token Models",
    description:
      "Supports BEP-20 fungible tokens for fractional ownership and BEP-721/BEP-1155 non-fungible tokens for unique assets, offering flexibility in RWA asset tokenization.",
    image: "/rectangle-8-6.png",
  },
  {
    id: 3,
    title: "Secure & Transparent Transactions",
    description:
      "All transactions are recorded on the blockchain, ensuring immutability, fraud prevention, and verifiable ownership for secure asset trading, investment, & management.",
    image: "/rectangle-8-7.png",
  },
  {
    id: 4,
    title: "Global Liquidity Access",
    description:
      "Trade tokenized assets in a decentralized marketplace with market-making, staking incentives, and fiat-to-crypto conversion for seamless liquidity and accessibility.",
    image: "/rectangle-8-8.png",
  },
  {
    id: 5,
    title: "Comprehensive Platform Integration",
    description:
      "Features NFT marketplace, fiat-to-crypto gateway, governance portal, launchpad, trading bots, staking, reward hub, and a global crypto card for real-world transactions.",
    image: "/rectangle-8-9.png",
  },
  {
    id: 6,
    title: "Exclusive Investment Opportunities",
    description:
      "Provides early access to premium assets, revenue-sharing models, and customized investment strategies, benefiting nRWA token holders and institutional investors.",
    image: "/rectangle-8-10.png",
  },
  {
    id: 7,
    title: "Scalable & Cross-Chain Compatibility",
    description:
      "Designed for multi-chain functionality, ensuring interoperability, scalability, and cross-border asset tokenization across global blockchain networks for efficiency.",
    image: "/rectangle-8-11.png",
  },
  {
    id: 8,
    title: "Diverse Asset Classes",
    description:
      "Tokenizes real estate, commodities, infrastructure, vehicles, art, collectibles, and intellectual property, unlocking global investment accessibility and liquidity.",
    image: "/rectangle-8-12.png",
  },
];

export const IntroductionSection = () => {
  const firstRowFeatures = features.slice(0, 4);
  const secondRowFeatures = features.slice(4);

  return (
    <section
      className="py-5 px-3"
      style={{
        backgroundImage: "url(/frame-41.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center text-white">
        <header className="mb-5 mx-auto" style={{ maxWidth: "900px" }}>
          <h2
            className="display-4 fw-bold"
            style={{
              fontFamily: "'League Spartan', Helvetica, sans-serif",
              background:
                "linear-gradient(90deg, rgba(86,198,144,1) 0%, rgba(255,255,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Key Features
          </h2>
          <h3
            className="h3 fw-bold mt-3"
            style={{ fontFamily: "'Poppins', Helvetica, sans-serif" }}
          >
            of the NanoEx RWA Ecosystem
          </h3>
          <p
            className="mt-3 mx-auto"
            style={{
              maxWidth: "700px",
              fontFamily: "'Poppins', Helvetica, sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.1px",
              lineHeight: 1.5,
            }}
          >
            The NanoEx RWA ecosystem is designed to provide a seamless and secure
            experience for tokenizing, trading, and managing real-world assets.
            With its advanced blockchain infrastructure, users benefit from
            enhanced liquidity, fractional ownership, and global accessibility.
          </p>
        </header>

        <div className="row g-4 mb-4">
          {firstRowFeatures.map((feature) => (
            <div key={feature.id} className="col-12 col-md-6 col-lg-3 d-flex">
              <div
                className={`card shadow rounded w-100 rounded-3 border-0 d-flex flex-column align-items-center justify-content-center p-3 ${
                  feature.highlighted
                    ? "bg-gradient"
                    : "bg-dark bg-opacity-50"
                }`}
                style={
                  feature.highlighted
                    ? {
                        background:
                          "linear-gradient(180deg, rgba(86,198,144,1) 0%, rgba(116,98,11,1) 100%)",
                      }
                    : { backdropFilter: "blur(10px)" }
                }
              >
                <div className="card-body d-flex flex-column align-items-center gap-3 text-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width={87}
                    height={87}
                    className="mb-2"
                    style={{ objectFit: "cover" }}
                  />
                  <h4
                    className="fw-bold text-white"
                    style={{
                      fontSize: "1.4375rem",
                      lineHeight: "1.45",
                      fontFamily: "'Poppins', Helvetica, sans-serif",
                    }}
                  >
                    {feature.title.includes("Dual") ||
                    feature.title.includes("Global") ||
                    feature.title.includes("Diverse") ? (
                      <>
                        {feature.title.split(" ")[0]} <br />
                        {feature.title.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      feature.title
                    )}
                  </h4>
                  <p
                    className="text-white"
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "0.2px",
                      lineHeight: "1.5",
                      fontFamily: "'Poppins', Helvetica, sans-serif",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-4">
          {secondRowFeatures.map((feature) => (
            <div key={feature.id} className="col-12 col-md-6 col-lg-3 d-flex">
              <div
                className="card shadow rounded w-100 rounded-3 border-0 bg-dark bg-opacity-50 d-flex flex-column align-items-center justify-content-center p-3"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <div className="card-body d-flex flex-column align-items-center gap-3 text-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width={87}
                    height={87}
                    className="mb-2"
                    style={{ objectFit: "cover" }}
                  />
                  <h4
                    className="fw-bold text-white"
                    style={{
                      fontSize: "1.4375rem",
                      lineHeight: "1.45",
                      fontFamily: "'Poppins', Helvetica, sans-serif",
                    }}
                  >
                    {feature.title.includes("Dual") ||
                    feature.title.includes("Global") ||
                    feature.title.includes("Diverse") ? (
                      <>
                        {feature.title.split(" ")[0]} <br />
                        {feature.title.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      feature.title
                    )}
                  </h4>
                  <p
                    className="text-white"
                    style={{
                      fontSize: "1.1rem",
                      letterSpacing: "0.2px",
                      lineHeight: "1.5",
                      fontFamily: "'Poppins', Helvetica, sans-serif",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mx-auto" style={{ maxWidth: "700px" }}>
          <p
            className="text-white text-center"
            style={{
              fontFamily: "'Poppins', Helvetica, sans-serif",
              fontSize: "1rem",
              letterSpacing: "0.1px",
              lineHeight: 1.5,
            }}
          >
            NanoEx RWA is transforming the future of asset ownership and
            investment—bridging real-world value with blockchain efficiency!
          </p>
        </footer>
      </div>
    </section>
  );
};
