import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <div className="login-pg__container">
        <main className="login-pg__wrapper">
            <div className="login-pg__head">
                <h1 className="login-pg__head-main text-xl font-bold">Login</h1>
                <div className="login-pg__head-about text-sm">Login to get started</div>
            </div>
            <div className="login-pg__-main">
                <form className="login-pg__form">
                    <div className="label-box">
                        <div className="label-name text-sm font-medium">Email Address</div>
                        <label className="label">
                            <input type="email" placeholder="Enter email" className="input text-sm" required/>
                        </label>
                        <div className="login-pg__forgot-btn text-sm">Forgot Password?</div>
                    </div>
                    <div className="label-box">
                        <div className="label-name text-sm font-medium">Password</div>
                        <label className="label">
                            <input type="password" placeholder="Enter Password" className="input text-sm" required/>
                        </label>
                    </div>
                </form>
            </div>
            <div className="login-pg__foot">
                <button className="login-foot__btn1">Log In</button>
                <button className="login-foot__btn2">
                    <NavLink to="/signup">Account</NavLink>
                </button>

            </div>
        </main>
    </div>
    </>
  )
}
