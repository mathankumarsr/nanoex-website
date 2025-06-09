import React from "react";

export const TeamSection = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Sign Up & Verify",
      description:
        "Create an account on NanoEx RWA, complete KYC verification, and secure your wallet for seamless and secure asset transactions.",
    },
    {
      number: "Step 2",
      title: "Fund Your Wallet",
      description:
        "Deposit funds using crypto or fiat through our integrated fiat-to-crypto gateway, ensuring fast, convenient, and secure transactions.",
    },
    {
      number: "Step 3",
      title: "Explore & Select Assets",
      description:
        "Browse tokenized real estate, commodities, collectibles, and more in our NFT marketplace with full transparency and accurate valuation insights.",
    },
    {
      number: "Step 4",
      title: "Invest & Trade",
      description:
        "Purchase fractional or full ownership tokens using nRWA and trade them in a decentralized marketplace for liquidity, security, and flexibility.",
    },
    {
      number: "Step 5",
      title: "Earn & Manage Holdings",
      description:
        "Stake your tokens, earn passive income, and access exclusive investment opportunities through staking rewards, governance rights, and revenue sharing.",
    },
  ];

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center py-5 w-100"
      style={{
        background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%), url('../frame-127.png') center/cover",
      }}
    >
      <div className="d-flex flex-column align-items-center w-100 gap-5" style={{ maxWidth: "1415px" }}>
        <header className="text-center">
          <h2
            className="fw-bold"
            style={{
              fontFamily: "'League Spartan', Helvetica",
              fontSize: "75px",
              lineHeight: "78.8px",
              background: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            How It Works
          </h2>

          <h3
            className="fw-bold text-white"
            style={{
              fontFamily: "'Poppins', Helvetica",
              fontSize: "40px",
              lineHeight: "61px",
            }}
          >
            Start Investing in Tokenized Real-World Assets
          </h3>

          <p
            className="text-white"
            style={{
              fontFamily: "'Poppins', Helvetica",
              fontSize: "15px",
              lineHeight: "30px",
              letterSpacing: "0.17px",
            }}
          >
            Getting started with NanoEx RWA is simple! Follow these easy steps
            to invest in tokenized real-world assets securely and efficiently.
          </p>
        </header>

        <div className="d-flex flex-wrap justify-content-center gap-3 w-100">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card shadow rounded border-0 bg-transparent p-4 d-flex align-items-center rounded-4"
            >
              <div className="card-body p-0 d-flex align-items-center gap-4">
                <div
                  className="d-flex flex-column align-items-center pe-4 border-end"
                  style={{
                    borderRight: "1px solid",
                    borderImage: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%) 1",
                    width: "192px",
                  }}
                >
                  <div
                    className="fw-bold"
                    style={{
                      fontFamily: "'Poppins', Helvetica",
                      fontSize: "25px",
                      lineHeight: "33.1px",
                      background: "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                      textAlign: "center",
                    }}
                  >
                    {step.number}
                  </div>

                  <div
                    className="fw-medium text-white text-center"
                    style={{
                      fontFamily: "'Poppins', Helvetica",
                      fontSize: "18px",
                      lineHeight: "33.1px",
                    }}
                  >
                    {step.title}
                  </div>
                </div>

                <div
                  style={{
                    width: "435px",
                    fontFamily: "'Poppins', Helvetica",
                    fontSize: "17.5px",
                    lineHeight: "25.8px",
                    letterSpacing: "0.2px",
                    color: "white",
                  }}
                >
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};