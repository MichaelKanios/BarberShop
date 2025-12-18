import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="navbar-toggler d-md-none collapsed"
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar menu */}
    <nav
  id="sidebarMenu"
  className={`col-md-4 col-lg-3 d-md-block sidebar p-0 position-fixed top-0 start-0 h-100 ${
    menuOpen ? "translate-show" : "translate-hide"
  } custom-sidebar`} 
  style={{ zIndex: 1050, transition: "transform 0.3s ease-in-out" }}
>

        <div className="position-sticky sidebar-sticky d-flex flex-column justify-content-center align-items-center">
          <a className="navbar-brand" href="index.html">
            <img
              src="images/templatemo-barber-logo.png"
              className="logo-image img-fluid"
              alt=""
            />
          </a>

          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_1" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_2" onClick={handleLinkClick}>Our Story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_3" onClick={handleLinkClick}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#booking-section" onClick={handleLinkClick}>Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_4" onClick={handleLinkClick}>Price List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_5" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* CSS για slide animation */}
      <style>
        {`
          .translate-show { transform: translateX(0); }
          .translate-hide { transform: translateX(-100%); }
        `}
      </style>
    </>
  );
};

export default NavBar;
