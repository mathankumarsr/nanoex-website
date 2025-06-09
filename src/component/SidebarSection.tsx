import React from "react";

export const SidebarSection = () => {
  const cards = [
    {
      size: "small",
      title: "$50B+",
      subtitle: "Tokenized Assets",
      content:
        "Since 2017, over $50 billion worth of stocks, bonds, & real estate has been tokenized, proving blockchain's growing role in finance.",
    },
    {
      size: "small",
      title: "$250B+",
      subtitle: "RWA Market",
      content:
        "The RWA sector has surpassed $250 billion, driven by $200 billion+ in stablecoins, fueling liquidity and institutional adoption.",
    },
    {
      size: "small",
      title: "$30T+",
      subtitle: "Market by 2030",
      content:
        "With growing government support, clear regulations, & blockchain integration, RWA annual trading volume may hit $30 trillion by 2030.",
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 py-5 gap-5">
      <div className="text-center w-100" style={{ maxWidth: "1600px" }}>
        <h1
          className="fw-bold text-center mb-4"
          style={{
            fontSize: "75px",
            background: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          The Rise of RWA Tokenization
        </h1>

        <h2 className="fw-bold text-white text-center mb-4" style={{ fontSize: "40px" }}>
          A Multi-Trillion Dollar Market by 2030
        </h2>

        <p className="text-white text-center mx-auto" style={{ maxWidth: "944px", fontSize: "18px", lineHeight: "27px" }}>
          A new report from Security Token Market predicts that asset tokenization will explode to $30 trillion by 2030, led by stocks, real estate, bonds, and gold. The RWA (Real World Asset) tokenization market is on track for exponential growth, revolutionizing traditional finance. With institutional adoption surging, tokenized assets are unlocking new opportunities worldwide.
        </p>
      </div>

      <div className="row justify-content-center w-100 g-4" style={{ maxWidth: "1573px" }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-auto"
            style={{
              width: card.size === "large" ? "409px" : "338px",
              height: card.size === "large" ? "449px" : "371px",
            }}
          >
            <div
              className="card shadow rounded bg-dark bg-opacity-25 rounded-4 border-0"
              style={{
                backdropFilter: "blur(13.85px) brightness(100%)",
                WebkitBackdropFilter: "blur(13.85px) brightness(100%)",
                borderRadius: "26.46px",
              }}
            >
              <div
                className="card-body d-flex align-items-center justify-content-center h-100 p-0"
                style={{
                  padding: card.size === "large" ? "30px 28px" : "25px 23px",
                }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{
                    width: card.size === "large" ? "340px" : "281px",
                    gap: card.size === "large" ? "37.52px" : "31px",
                  }}
                >
                  {card.size === "small" && (
                    <div className="text-white text-center mb-3" style={{ height: "80px" }}>
                      <div className="fw-bold" style={{ fontSize: "48px", lineHeight: "40px" }}>
                        {card.title}
                      </div>
                      <div style={{ fontSize: "28px" }}>{card.subtitle}</div>
                    </div>
                  )}
                  <p
                    className="text-white text-center"
                    style={{
                      fontSize: card.size === "large" ? "22px" : "18px",
                      lineHeight: card.size === "large" ? "37px" : "30.6px",
                      height: card.size === "large" ? "202px" : "167px",
                    }}
                  >
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-white text-center mt-4" style={{ maxWidth: "944px", fontSize: "18px", lineHeight: "27px" }}>
        As major players like BlackRock, Franklin Templeton, and Apollo dive deeper into tokenization, the financial sector and regulators are recognizing its transformative power. The future of finance is on-chain—are you ready?
      </p>
    </div>
  );
};