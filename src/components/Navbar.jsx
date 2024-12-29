import React from "react";
import { Menu, Heart, LogIn, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-left align-items-center gap">
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
              <img src="/company-logo.png" alt="logo" width={150} />
            </NavLink>
          </div>
        </div>
        <div className="search space-between">
          <input
            type="text"
            className="search-input text-md"
            placeholder="Search"
          />
          <Search height={18} color="rgb(125, 125, 125)" />
        </div>
        <div className="nav-right align-items-center gap">
          <NavLink to="/wishlist">
            <Heart height={18} />
          </NavLink>
          <NavLink to="/login">
            <LogIn height={18} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
