import { useState } from "react";
import Booking from "./Booking";
import Contact from "./Contact";
import DiscountCoupon from "./DiscountCoupon";
import Hero from "./Hero";
import OurStory from "./OurStory";
import PriceList from "./PriceList";
import Services from "./Services";
import SideBar from "./SideBar";
import { FaTimes, FaBars } from "react-icons/fa";


const First = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <div className="container-fluid">
      <div className="row">       

        <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block sidebar collapse p-0">
         <SideBar/>
        </nav>

        <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
          {/* Hero Section */}
          <Hero/>

           <section className="about-section section-padding" id="section_2">
                        <OurStory/>
                    </section>

                    <section className="featured-section section-padding">
                      <DiscountCoupon/>
                    </section>


                    <section className="services-section section-padding" id="section_3">
                       <Services/>
                    </section>

                    <section className="booking-section section-padding" id="booking-section">
                    <Booking/>
                </section>


                    <section className="price-list-section section-padding" id="section_4">
                        <PriceList/>
                    </section>


                <section className="contact-section" id="section_5">
                  <Contact/>
                </section>

                <footer className="site-footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-12">
                                <h4 className="site-footer-title mb-4">Our Branches</h4>
                            </div>

                            <div className="col-lg-4 col-md-6 col-11">
                                <div className="site-footer-thumb">
                                    <strong className="mb-1">Grünberger</strong>

                                    <p>Grünberger Str. 31, 10245 Berlin, Germany</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-11">
                                <div className="site-footer-thumb">
                                    <strong className="mb-1">Behrenstraße</strong>

                                    <p>Behrenstraße 27, 10117 Berlin, Germany</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-11">
                                <strong className="mb-1">Weinbergsweg</strong>

                                <p>Weinbergsweg 23, 10119 Berlin, Germany</p>
                            </div>
                        </div>
                    </div>

                    <div className="site-footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-lg-8 col-12 mt-4">
                                    <p className="copyright-text mb-0">Copyright © 2036 Barber Shop 
                                    - Design: <a href="https://templatemo.com" rel="nofollow" target="_blank">TemplateMo</a></p>
                                </div>

                                <div className="col-lg-2 col-md-3 col-3 mt-lg-4 ms-auto">
                                    <a href="#section_1" className="back-top-icon smoothscroll" title="Back Top">
                                        <i className="bi-arrow-up-circle"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
      </div>
    
  );
};

export default First;
