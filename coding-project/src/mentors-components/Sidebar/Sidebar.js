import React from "react";
import Mentors from "../profiles/Mentors";

export default function Sidebar() {
  return (
    <>
      <main>
        <div className="fixed-menu">
          <div className="title-text">
            <h3>FILTER</h3>
            <p>1038 MENTORS</p>
          </div>
          <form>
            <div className="fillter-cover">
              <div className="filter-input">
                <label htmlFor="text">TECHNOLOGY</label>
                <input type="text" />
              </div>
              <div className="filter-input">
                <label htmlFor="text">COUNTRY</label>
                <input type="text" />
              </div>
              <div className="filter-input">
                <label htmlFor="text">NAME</label>
                <input type="text" />
              </div>
              <div className="filter-input">
                <label htmlFor="text">LANGUAGE </label>
                <input type="text" />
              </div>
            </div>
          </form>
          <div className="myfavourits">
            <p>MY FAVORITES</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="social-icon">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="social-link">
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
      </main>
    </>
  );
}
