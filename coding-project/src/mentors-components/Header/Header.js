import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  // const handleLogin = () => {
  //   loginWithRedirect();
  // };

  // if (isLoading) {
  //   return <div>Loading</div>;
  // }

  return (
    <div>
      {/* <!-- header --> */}
      <header className="header">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <div className="logo-and-navbar">
                <div className="logo">
                  <a href="javascript:void(0)">
                    <img src="img/circle.png" alt="" />
                  </a>
                </div>
                <div className="nav-bar">
                  <ul>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Mentorship Guidelines</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Sessions Calendar</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Become a mentor</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="login-register">
                <button>
                  <img src="img/user.png" alt="" />

                  <a href="/me">Manage Account</a>
                  <a href="javascript:void(0)">Become A Mentor</a>
                  <a href="javascript:void(0)">Logout</a>
                </button>

                {/* {!isAuthenticated && (
                    <button>
                      <a href="/login"> "Login / Register"</a>
                    </button>
                  )} */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- /header --> */}
    </div>
  );
}
