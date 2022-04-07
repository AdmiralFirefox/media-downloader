import { FC } from "react";

const FooterWaves: FC = () => {
  return (
    <>
      <footer className="footer-waves">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-1.41,33.06 C145.87,216.63 348.47,-52.77 500.27,66.63 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#14213D" }}
          />
        </svg>
      </footer>

      <style jsx>{`
        .footer-waves {
          height: 12em;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default FooterWaves;
