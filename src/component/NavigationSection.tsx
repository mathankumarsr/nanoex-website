import React from "react";

export const NavigationSection = () => {
  const navItems = [
    { name: "Home", active: true },
    { name: "About", active: false },
    { name: "Tokenomics", active: false },
    { name: "Features", active: false },
    { name: "Why NanoEx", active: false },
    { name: "Whitepaper", active: false },
    { name: "Contact", active: false },
  ];

  return (
    <header
      className="d-flex flex-column align-items-center w-100 position-relative py-4"
      style={{
        background: "url(../frame-9.png) center center / cover no-repeat",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between w-100 px-3 gap-3"
        style={{ maxWidth: "1580px" }}
      >
        <img
          className="img-fluid"
          alt="NanoEx Logo"
          src="/rectangle-1-1.png"
          height={102}
          width={271}
          style={{ objectFit: "cover" }}
        />

        <nav className="navbar navbar-expand-lg w-100">
          <div className="container-fluid justify-content-center justify-content-lg-center">
            <button
              className="btn d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileDrawer"
              aria-controls="mobileDrawer"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="mainNav"
            >
              <ul className="navbar-nav flex-column flex-lg-row align-items-center w-100 gap-2 p-3 p-lg-0">
                <div
                  className="d-flex flex-wrap align-items-center justify-center w-100 px-4 py-2 rounded-pill justify-content-center"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(17px)",
                    gap: "1rem",
                  }}
                >
                  {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      <div
                        role="link"
                        tabIndex={0}
                        aria-current={item.active ? "page" : undefined}
                        style={{
                          fontWeight: "700",
                          fontSize: "15.2px",
                          fontFamily: "'Poppins', Helvetica, sans-serif",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          userSelect: "none",
                          color: item.active ? "transparent" : "#d9d9d9",
                          background: item.active
                            ? "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)"
                            : "none",
                          WebkitBackgroundClip: item.active ? "text" : "unset",
                          backgroundClip: item.active ? "text" : "unset",
                        }}
                      >
                        {item.name}
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </nav>

        <button
          className="btn d-none d-md-flex align-items-center justify-content-center px-4 py-1 rounded-pill shadow"
          aria-label="Buy Now"
          style={{
            height: "39px",
            background:
              "linear-gradient(270deg, rgba(86,198,144,1) 0%, rgba(244,206,20,1) 100%)",
            boxShadow: "0px 1.7px 21px #00000080, 0px 1.7px 8.5px #00000066",
          }}
        >
          <span
            style={{
              fontFamily: "'Poppins', Helvetica, sans-serif",
              fontWeight: "700",
              fontSize: "12.7px",
              color: "black",
              letterSpacing: "0.42px",
            }}
          >
            BUY NOW
          </span>
          <div
            aria-hidden="true"
            style={{
              width: "17px",
              height: "17px",
              marginLeft: "0.25rem",
              backgroundImage: "url(/image.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "rotate(-40deg)",
            }}
          />
        </button>
      </div>

      <div
        className="d-flex flex-column flex-lg-row justify-content-center align-items-center px-4 px-md-5 py-4 gap-4"
        style={{ maxWidth: "1920px" }}
      >
        <div className="d-flex flex-column align-items-start text-center text-lg-start gap-3" style={{ maxWidth: "896px" }}>
          <p
            style={{
              fontSize: 75,
              fontWeight: "bold",
              background:
                "linear-gradient(270deg, rgba(86,198,144,1) 26%, rgba(255,255,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            nRWA Token
          </p>
          <p style={{ fontSize: 40, color: "#D9D9D9", margin: 0 }}>
            Powering the Future of Real-World Asset Tokenization
          </p>
          <p
            style={{
              maxWidth: "611px",
              fontFamily: "'Poppins', Helvetica, sans-serif",
              fontWeight: "400",
              fontSize: "15px",
              color: "white",
              letterSpacing: "0.17px",
              lineHeight: "30px",
              marginBottom: "1rem",
            }}
          >
            The NanoEx RWA ecosystem, powered by nRWA Token, revolutionizes how
            real-world assets are tokenized, traded, and managed on the
            blockchain. Through a transparent tokenization framework, we enable
            fractional ownership, enhanced liquidity, and secure investments in
            traditionally illiquid assets like real estate, fine art, and
            infrastructure. Join the Future of Asset Tokenization Today!
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <button
              className="btn rounded-pill shadow"
              style={{
                height: "50px",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                background:
                  "linear-gradient(270deg, rgba(86,198,144,1) 0%, rgba(244,206,20,1) 100%)",
                fontFamily: "'Poppins', Helvetica, sans-serif",
                fontWeight: 500,
                fontSize: "1.25rem",
                letterSpacing: "0.57px",
                lineHeight: "35px",
                color: "black",
              }}
            >
              Whitepaper
            </button>

            <button
              className="btn btn-outline-light rounded-pill shadow"
              style={{
                height: "50px",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                backgroundColor: "#2d2d2d",
                border: "none",
                fontFamily: "'Poppins', Helvetica, sans-serif",
                fontWeight: 500,
                fontSize: "1.25rem",
                letterSpacing: "0.57px",
                lineHeight: "35px",
                color: "white",
              }}
            >
              How To Buy
            </button>
          </div>
        </div>

        <div
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            minWidth: "300px",
            width: "100%",
            maxWidth: "500px",
            height: "500px",
            backgroundColor: "rgba(4,4,4,0.32)",
            backdropFilter: "blur(15px)",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            alt="NanoEx Token"
            src="/rectangle-5-1.png"
            className="img-fluid"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="mobileDrawer"
        aria-labelledby="mobileDrawerLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileDrawerLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="btn text-start"
              style={{
                fontWeight: 600,
                fontSize: "16px",
                color: item.active ? "#56C690" : "#333",
                background: "none",
                border: "none",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
