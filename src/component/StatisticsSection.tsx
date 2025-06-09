import React from "react";

export const StatisticsSection = () => {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center py-5 w-100 overflow-hidden">
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-lg-5 w-100"
        style={{ maxWidth: "1920px" }}
      >
        <div
          className="position-relative d-flex align-items-center justify-content-center rounded-circle border-0"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "#040404e6",
            backdropFilter: "blur(24.15px)",
          }}
        >
          <img
            className="object-fit-cover"
            style={{ width: "103%", height: "103%" }}
            alt="nRWA Token"
            src="/rectangle-5-1.png"
          />
        </div>

        <div className="card shadow rounded border-0 bg-transparent" style={{ maxWidth: "813px" }}>
          <div className="card-body p-0 d-flex flex-column gap-3 gap-md-4">
            <h1
              className="fw-bold text-center text-md-start"
              style={{
                fontSize: "75px",
                lineHeight: 1.2,
                background: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              nRWA Token
            </h1>

            <h2
              className="fw-bold text-white text-center text-md-start"
              style={{ fontSize: "40px", lineHeight: 1.2 }}
            >
              Powering the NanoEx RWA Ecosystem
            </h2>

            <p
              className="text-white text-center text-md-start"
              style={{ fontSize: "15px", lineHeight: "30px", letterSpacing: "0.17px" }}
            >
              The nRWA token is the utility and governance token of the NanoEx
              RWA ecosystem, enabling secure, efficient, and decentralized
              real-world asset tokenization. It offers trading fee discounts,
              governance rights, staking rewards, and exclusive investment
              opportunities. With a deflationary buyback and burn mechanism,
              nRWA enhances value by reducing supply over time. Token holders
              benefit from liquidity incentives, passive income, and access to
              premium asset offerings, making nRWA essential for the future of
              asset tokenization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};