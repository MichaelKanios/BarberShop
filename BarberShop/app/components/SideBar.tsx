const SideBar =()=>{
    return(
         <div className="position-sticky sidebar-sticky d-flex flex-column justify-content-center align-items-center">
            <a className="navbar-brand" href="index.html">
              <img src="images/templatemo-barber-logo.png" className="logo-image img-fluid" alt="" />
            </a>

            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link click-scroll" href="#section_1">Home</a></li>
              <li className="nav-item"><a className="nav-link click-scroll" href="#section_2">Our Story</a></li>
              <li className="nav-item"><a className="nav-link click-scroll" href="#section_3">Services</a></li>
               <li className="nav-item"><a className="nav-link click-scroll" href="#booking-section">Booking</a></li>
              <li className="nav-item"><a className="nav-link click-scroll" href="#section_4">Price List</a></li>
              <li className="nav-item"><a className="nav-link click-scroll" href="#section_5">Contact</a></li>
            </ul>
          </div>
    )
}

export default SideBar