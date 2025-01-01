import React from "react";
import { useState, useEffect } from "react";
import {
  Menu,
  Heart,
  LogIn,
  Search,
  Home,
  List,
  ShoppingCart,
  UserRound,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Truck,
  CircleDollarSign,
  Languages,
  Headset,
  LogOut,
  Cable,
  Dribbble,
  Watch,
  Car,
  Armchair,
  Baby,
} from "lucide-react";
import { RiCloseFill, RiCollapseDiagonal2Line } from "react-icons/ri";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { GiClothes } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);

  const handleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  const handleIcon = () => {
    setIsIconVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-left flex items-center gap-1">
          <div className="menu-sec">
            <div className="menu-container">
              <div
                className={`menu-box ${isMenuVisible ? "visible" : "hidden"} `}
              >
                <div className="menu-head">
                  <img src="/company-logo.png" className="sidebar-logo" />
                  <div
                    onClick={handleMenu}
                    className={`close ${isMenuVisible ? "visible" : "hidden"} `}
                  >
                    <RiCloseFill />
                  </div>
                  {/* <div className="close"><RiCollapseDiagonal2Line /></div> */}
                </div>
                <ul className="sidebar">
                  <div className="text-lg font-semibold">Just For You</div>
                  <NavLink to="/" className="flex gap">
                    <Home height={18} />
                    <li>Home</li>
                  </NavLink>
                  <NavLink to="/cart" className="flex gap">
                    <ShoppingCart height={18} />
                    <li>Cart</li>
                  </NavLink>
                  <div className="flex flex-column gap-3">
                    <NavLink className="flex gap items-center" onClick={handleIcon} >
                      <div className="flex gap">
                        <List height={18} />
                        <li>Category</li>
                      </div>
                      <div className="more-category">
                        <div
                          className="more-category__btn"
                        >
                          {isIconVisible ? (
                            <div className="category-btn__downArrow">
                              <ChevronDown height={19} />
                            </div>
                          ) : (
                            <div className="category-btn__rightArrow">
                              <ChevronRight height={18} />
                            </div>
                          )}
                        </div>
                      </div>
                    </NavLink>

                    {/* Dropdown List */}
                    <ul
                      className={`category-more ${
                        isIconVisible ? "visible" : "hidden"
                      }`}
                    >
                      <NavLink to="" className="flex gap items-center">
                        <Cable height={18} />
                        <li className="text-xs">Electronics</li>
                      </NavLink>
                      <NavLink to="" className="flex gap items-center">
                        <Baby height={18} />
                        <li className="text-xs">Baby Care</li>
                      </NavLink>
                      <NavLink to="" className="flex gap items-center">
                        <Armchair height={18} />
                        <li className="text-xs">Home & Lifestyle</li>
                      </NavLink>
                      <NavLink to="" className="flex gap items-center">
                        <GiClothes height={18} />
                        <li className="text-xs">Clothes</li>
                      </NavLink>
                      <NavLink to="" className="flex gap items-center">
                        <Watch height={18} />
                        <li className="text-xs">Accessories</li>
                      </NavLink>
                      <NavLink to="" className="flex gap items-center">
                        <Dribbble height={18} />
                        <li className="text-xs">Sports & Outdoor</li>
                      </NavLink>
                      <NavLink to="" className="flex gap items-center">
                        <Car height={18} />
                        <li className="text-xs">Automotive</li>
                      </NavLink>
                    </ul>
                  </div>

                  <NavLink to="" className="flex gap">
                    <UserRound height={18} />
                    <li>Profile</li>
                  </NavLink>
                  <div className="flex items-center space-between text-lg font-semibold">
                    Settings
                    <ArrowRight height={20} />
                  </div>
                  <NavLink to="" className="flex gap">
                    <Truck height={18} />
                    <li>Ship to</li>
                  </NavLink>
                  <NavLink to="" className="flex gap">
                    <CircleDollarSign height={18} />
                    <li>Currency</li>
                  </NavLink>
                  <NavLink to="" className="flex gap">
                    <Languages height={18} />
                    <li>Languages</li>
                  </NavLink>
                  <NavLink to="" className="flex gap">
                    <Headset height={18} />
                    <li>Help Center</li>
                  </NavLink>
                  <NavLink to="" className="flex gap">
                    <LogOut height={18} />
                    <li>Logout</li>
                  </NavLink>
                </ul>
              </div>
            </div>
            <div className="menu cursor-pointer" onClick={handleMenu}>
              <Menu height={22}/>
              {/* <HiAdjustmentsHorizontal className="svg" /> */}
            </div>
          </div>
          <div className="logo">
            <NavLink to="/">
              <img src="/company-logo.png" alt="logo" className="logo" />
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
