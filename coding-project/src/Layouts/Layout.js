import { Children } from "react";
import Header from "../mentors-components/Header/Header";
import Sidebar from "../mentors-components/Sidebar/Sidebar";
import image from "../../public/img/circle.png";
import Image from "next/image";

export const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <div className="logo-and-navbar">
                <div className="logo">
                  <a href="javascript:void(0)">
                    <Image
                      src="/img/circle.png"
                      width={120}
                      height={40}
                      alt=""
                    />
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
                {/* <button>
                  <Image src="/img/user.png" width={40} height={50} alt="" />

                  <a href="/me">Manage Account</a>
                  <a href="javascript:void(0)">Become A Mentor</a>
                  <a href="javascript:void(0)">Logout</a>
                </button> */}

                {/* {!isAuthenticated && ( */}
                <button>
                  <a href="/login"> "Login / Register"</a>
                </button>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-cover">
        <div className="container-fluid">
          <div class="fixed-menu">
            <div class="title-text">
              <h3>FILTER</h3>
              <p>1038 MENTORS</p>
            </div>
            <form>
              <div class="fillter-cover">
                <div class="filter-input">
                  <label for="text">TECHNOLOGY</label>
                  <input type="text" />
                </div>
                <div class="filter-input">
                  <label for="text">COUNTRY</label>
                  <input type="text" />
                </div>
                <div class="filter-input">
                  <label for="text">NAME</label>
                  <input type="text" />
                </div>
                <div class="filter-input">
                  <label for="text">LANGUAGE </label>
                  <input type="text" />
                </div>
              </div>
            </form>
            <div class="myfavourits">
              <p>MY FAVORITES</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="social-icon">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="social-link">
              <ul>
                <li>
                  <a href="javascript:void(0)">Cookies policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Code of Conduct</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Terms & Conditions</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Privacy Statement</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side-section">
            <div className="row">
              <div className="col-lg-12">
                <div className="mentor-card">
                  <div>{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
