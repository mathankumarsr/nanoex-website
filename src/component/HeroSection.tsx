import React from "react";

export const HeroSection = () => {
  const investmentTiers = [
    {
      name: "Platinum",
      description:
        "Limited to 10 subscribers @ $15,000, receiving 0.75% (750,000 nRWA) of the token supply each.",
      gradient:
        "linear-gradient(to right, rgba(210,2,207,1), rgba(0,255,204,1))",
    },
    {
      name: "Diamond",
      description:
        "Limited to 20 subscribers @ $10,000, receiving 0.5% (500,000 nRWA) of the token supply each.",
      gradient:
        "linear-gradient(to right, rgba(178,229,255,1), rgba(0,170,255,1))",
    },
    {
      name: "Gold",
      description:
        "Limited to 30 subscribers @ $5,000, receiving 0.25% (250,000 nRWA) of the token supply each.",
      gradient:
        "linear-gradient(to left, rgba(255,187,0,1), rgba(255,248,194,1))",
    },
    {
      name: "Silver",
      description:
        "Limited to 50 subscribers @ $3,000, receiving 0.15% (150,000 nRWA) of the token supply each.",
      gradient:
        "linear-gradient(to left, rgba(255,255,255,1), rgba(153,153,153,1))",
    },
    {
      name: "Bronze",
      description:
        "Limited to 100 subscribers @ $2,000, receiving 0.1% (100,000 nRWA) of the token supply each.",
      gradient:
        "linear-gradient(to left, rgba(255,136,0,1), rgba(232,166,92,1))",
    },
    {
      name: "Regular",
      description:
        "Limited to 150 subscribers @ $1,000, receiving 0.05% (50,000 nRWA) of the token supply each.",
      gradient:
        "linear-gradient(to left, rgba(75,166,102,1), rgba(159,255,188,1))",
    },
  ];

  return (
    <section
      className="py-5 px-3 d-flex justify-content-center align-items-start w-100"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/frame-17.png')",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center gap-4 w-100" style={{ maxWidth: "1686px" }}>
        <div className="d-flex align-items-center gap-4 w-100" style={{ maxWidth: "1266px" }}>
          <div className="d-flex flex-column align-items-start justify-content-center gap-3" style={{ maxWidth: "550px" }}>
            <h1
              className="fw-bold"
              style={{
                fontFamily: "'League Spartan', Helvetica, sans-serif",
                fontSize: "45px",
                lineHeight: "36.6px",
                background: "linear-gradient(to left, rgba(86,198,144,1) 26%, rgba(255,255,255,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NanoEx
            </h1>

            <h2
              className="fw-bold text-white"
              style={{
                fontFamily: "'Poppins', Helvetica, sans-serif",
                fontSize: "40px",
                lineHeight: "36.6px",
              }}
            >
              Private Investors&apos; Program
            </h2>

            <p
              className="text-white"
              style={{
                fontFamily: "'Poppins', Helvetica, sans-serif",
                fontSize: "1.125rem",
                lineHeight: "27px",
              }}
            >
              Unlock exclusive benefits with the NanoEx Private Investors&apos; Program, designed for strategic investors seeking premium token allocations and early access to nRWA tokens.
            </p>
          </div>

          <img
            className="img-fluid"
            alt="Rectangle"
            src="/rectangle-9.png"
            style={{ width: "646px", height: "377px", objectFit: "cover" }}
          />
        </div>

        <div className="d-flex flex-wrap gap-4 justify-content-center" style={{ maxWidth: "1265px" }}>
          {investmentTiers.map((tier, index) => (
            <div
              key={index}
              className="card shadow rounded bg-black bg-opacity-20 rounded-3 border border-white backdrop-blur"
              style={{ width: "395px", height: "188px" }}
            >
              <div className="card-body d-flex flex-column align-items-start gap-2 p-3">
                <h3
                  style={{
                    background: tier.gradient,
                    opacity: 0.7,
                    fontFamily: "'Poppins', Helvetica, sans-serif",
                    fontWeight: "700",
                    fontSize: "1.75rem",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    margin: 0,
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "'Poppins', Helvetica, sans-serif",
                    fontSize: "1.125rem",
                    marginBottom: 0,
                  }}
                >
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-white text-center"
          style={{
            maxWidth: "750px",
            fontFamily: "'Poppins', Helvetica, sans-serif",
            fontSize: "15px",
            lineHeight: "30px",
          }}
        >
          Secure Your Spot Today! Join an elite group of investors and be part of the future of Real-World Asset Tokenization.
        </p>
      </div>
    </section>
  );
};
