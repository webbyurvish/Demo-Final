import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (user) {
    console.log(user.sub);
    console.log(user);
  }

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
                      <a href="javascript:void(0)">About</a>
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
                {isAuthenticated && (
                  <button>
                    <img src="img/user.png" alt="" />

                    <a href="/me">Manage Account</a>
                    <a href="javascript:void(0)">Become A Mentor</a>
                    <a onClick={logout} href="javascript:void(0)">
                      Logout
                    </a>
                  </button>
                )}
                {!isAuthenticated && (
                  <button onClick={handleLogin}>
                    <a> "Login / Register"</a>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- /header --> */}
    </div>
  );
}
