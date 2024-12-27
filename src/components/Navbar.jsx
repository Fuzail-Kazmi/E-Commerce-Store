import React from "react";
import { Menu, Heart, LogIn, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-top justify-content-between align-items-center">
          <div className="nav-left flex align-items-center gap-1">
            <div className="menu" value={false}>
              <Menu />
            </div>
            <ul className="sidebar">
              <li>Category</li>
              <li>Deals</li>
              <li>What's New</li>
            </ul>
            <div className="logo">
              <NavLink to="/">
                <img
                  src="../../public/company-logo.png"
                  alt="logo"
                  width={150}
                />
              </NavLink>
            </div>
          </div>
          <div className="nav-right flex align-items-center gap">
            <NavLink to="/wishlist">
              <Heart height={18} />
            </NavLink>
            <NavLink to="/login">
              <LogIn height={18} />
            </NavLink>
          </div>
        </div>
        <div className="search justify-content-between">
          <input
            type="text"
            className="search-input text-md"
            placeholder="Search"
          />
          <Search height={18} color="rgb(125, 125, 125)" />
        </div>
      </nav>
    </div>
  );
};
