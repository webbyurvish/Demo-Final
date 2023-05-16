import { Children } from "react";
import Header from "../mentors-components/Header/Header";
import Sidebar from "../mentors-components/Sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main-cover">
        <div className="container-fluid">
          <div className="right-side-section">
            <div className="row">
              <div className="col-lg-12">
                <div className="mentor-card">
                  <Sidebar />
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
