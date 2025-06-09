import React from "react";

export const FeaturesOverviewSection = () => {
  const tokenDetails = [
    { label: "Token Name", value: "nRWA" },
    { label: "Token Standard", value: "BEP-20" },
    { label: "Blockchain Network", value: "Binance Smart Chain (BSC)" },
    { label: "Total Supply", value: "100,000,000 nRWA tokens" },
    { label: "Token Decimals", value: "18" },
    {
      label: "Initial Token Price",
      value: "$0.10 USD (Private Sale), $0.50 USD (Public Sale)",
    },
  ];

  return (
    <section className="d-flex flex-column align-items-center justify-content-center gap-5 py-5 px-3 px-md-4 px-lg-5 w-100">
      <div className="text-center mb-4" style={{ maxWidth: "64rem" }}>
        <h2
          className="fw-bold"
          style={{
            fontFamily: "'League Spartan', Helvetica, Arial, sans-serif",
            fontSize: "4.5rem",
            background: "linear-gradient(to left, #56C690, #56C690, white)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.03em",
            margin: 0
          }}
        >
          Tokenomics
        </h2>
      </div>

      <div className="w-100" style={{ maxWidth: "80rem" }}>
        <img
          src="/rectangle-13.png"
          alt="Token distribution chart"
          className="img-fluid"
          style={{ objectFit: "cover", width: "1200px", height: "1200px" }}
        />
      </div>

      <div
        className="d-flex flex-column align-items-center justify-content-center gap-3 w-100"
        style={{ maxWidth: "80rem" }}
      >
        <div
          className="w-100 rounded-3 py-2 px-3 text-center"
          style={{
            background: "linear-gradient(to left, #56C690, #56C690, white)",
          }}
        >
          <h3
            className="fw-bold mb-0"
            style={{
              fontFamily: "'League Spartan', Helvetica, Arial, sans-serif",
              fontSize: "2.2rem",
              lineHeight: 1.4,
              color: "black",
              userSelect: "none",
            }}
          >
            Token Distribution
          </h3>
        </div>

        <div className="d-flex flex-column flex-md-row gap-3 w-100">
          <div
            className="p-4 rounded-3"
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              color: "white",
              flex: "1 1 367px",
              fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "1.4375rem",
              lineHeight: "3.3rem",
              userSelect: "none",
            }}
          >
            {tokenDetails.map((item, index) => (
              <div key={index}>{item.label}</div>
            ))}
          </div>

          <div
            className="p-4 rounded-3"
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              color: "white",
              flex: "1 1 725px",
              fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: "1.4375rem",
              lineHeight: "3.3rem",
              userSelect: "none",
            }}
          >
            {tokenDetails.map((item, index) => (
              <div key={index}>{item.value}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};