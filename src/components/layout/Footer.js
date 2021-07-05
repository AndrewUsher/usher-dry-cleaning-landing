import React from "react";

import classNames from "classnames";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              Made by{" "}
              <a href="https://casual-cognitions.vercel.app">Andrew Usher</a>.
              All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = defaultProps;

export default Footer;
