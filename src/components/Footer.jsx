import React from "react";
import { Facebook, Github, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="flex space-between items-center">
          <div className="footer-logo">
            <NavLink to="/">
              <img src="/company-logo.png" alt="logo" height={8.1} />
            </NavLink>
          </div>
          <div className="footer-copyright">
            &copy; ApexSoftware.com
          </div>
          <div className="footer-icons flex gap">
            <div>
              <Facebook height={15} />
            </div>
            <div>
              <Github height={15} />
            </div>
            <div>
              <Twitter height={15} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
