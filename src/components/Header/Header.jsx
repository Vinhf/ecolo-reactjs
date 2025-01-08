import React from "react";
import "./Header.css";
function Header() {
  return (
    <header
      className=""
      style={{ height: window.innerWidth <= 768 ? "150px":"300px", backgroundColor: "#001d4a" }}
    >
      <div className="row" style={{ height: "100%" }}>
        <div className="Text-layout d-flex justify-content-center align-items-center col-5">
          <div>
            <div className="logo-layout d-flex flex-column justify-content-center align-items-center">
              <div className="logo-container">
                <img
                  src="../../assets/logo/ava.png"
                  alt=""
                  style={{
                    width: window.innerWidth <= 768 ? "60px" : "140px",
                    height: "auto",
                  }}
                  className="fancy-logo"
                />
              </div>
            </div>
            <span
              className="fancy-text"
              style={{
                fontSize: window.innerWidth <= 768 ?  "20px":"45px",
                color: "white",
              }}
            >
              ECOCLO
            </span>
          </div>
        </div>

        <div
          className="col d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          hãy làm giống tôi!
        </div>
      </div>
    </header>
  );
}

export default Header;
