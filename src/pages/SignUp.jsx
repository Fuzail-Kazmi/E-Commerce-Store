import React from "react";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <div className="sign-pg__container">
        <div className="sign-pg__wrapper">
          <div className="sign-pg__head">
            <div className="sign-pg__head-main text-xl font-bold">
              Create Account
            </div>
            <div className="sign-pg__head-about text-sm">
              Sign up to get started
            </div>
          </div>
          <div className="sign-pg__main">
            <form className="sign-pg__form">
              <div className="label-box">
                <div className="label-name text-sm font-medium">Name</div>
                <label className="label">
                  <input
                    type="text"
                    placeholder="Enter First And Last Name"
                    className="input text-sm"
                    required
                  />
                </label>
              </div>
              <div className="label-box">
                <div className="label-name text-sm font-medium">
                  Email Address
                </div>
                <label className="label">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="input text-sm"
                    required
                  />
                </label>
              </div>
              <div className="label-box">
                <div className="label-name text-sm font-medium">Phone</div>
                <label className="label label-sign-3">
                  <input
                    type="number"
                    placeholder="+1"
                    className="input text-sm"
                    required
                  />
                </label>
              </div>
              <div className="label-box">
                <div className="label-name text-sm font-medium">Password</div>
                <label className="label">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input text-sm"
                    required
                  />
                </label>
              </div>
            </form>
          </div>
          <div className="sign-pg__foot">
            <button className="sign-pg__btn">Log In</button>
            <div>OR</div>
            <div className="sign-pg__foot-about text-sm">Sign up with</div>
            <div className="sign-pg__foot-btns">
              <button>
                <span>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-64.png"
                    alt=""
                    width="20"
                  />
                </span>
                Google
              </button>
              <button>
                <span>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
                    alt=""
                    width="20"
                  />
                </span>
                Facebook
              </button>
            </div>
            <div className="sign-pg__foot-bottom text-sm">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
