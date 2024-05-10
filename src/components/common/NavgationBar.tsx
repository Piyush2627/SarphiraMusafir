import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function NavgationBar() {
  const [header, setHeader] = useState("header");
  const [checked, setChecked] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      setHeader("header");
    } else if (window.scrollY > 70) {
      setHeader("header-fix");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={`header ${header}`}
      style={{
        backgroundColor: checked ? "#0b1d26" : "",
      }}>
      <nav>
        <div className="navigation-logo-container">
          <div>
            <Link to="/">
              <img
                src="https://i.ibb.co/19VvYC9/LOGO1.jpg"
                width="40px"
                height="40px"
                alt=""
                style={{ borderRadius: "50%" }}
              />
            </Link>
          </div>
          <div>
            <div
              className="
            ">
              Sarphira Musafir
            </div>
            <div>
              <p className="navigarion-slogon">
                Saath Jaayenge Khoob Machayenge
              </p>
            </div>
          </div>
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <li className="navigation-menu-li">Home</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/upcoming">
            <li className="navigation-menu-li">Upcoming events</li>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/about">
            <li className="navigation-menu-li">About Us</li>{" "}
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/memories">
            <li className="navigation-menu-li">Memories</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default NavgationBar;
