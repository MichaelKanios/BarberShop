import { useState } from "react";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
import DiscountCoupon from "../components/DiscountCoupon";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import PriceList from "../components/PriceList";
import Services from "../components/Services";
import SideBar from "../components/SideBar";
import { FaTimes, FaBars } from "react-icons/fa";
import Footer from "../components/Footer";
import BookingSection from"../components/BookingSection"


const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <div className="container-fluid">
      <div className="row">       

        <nav id="sidebarMenu" className="col-md-4 col-lg-3 d-md-block sidebar collapse p-0">
         <SideBar/>
        </nav>

        <div className="col-md-8 ms-sm-auto col-lg-9 p-0">
         
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
                    <BookingSection/>
                    
                   
                </section>


                    <section className="price-list-section section-padding" id="section_4">
                        <PriceList/>
                    </section>


                <section className="contact-section" id="section_5">
                  <Contact/>
                </section>

                <Footer/>
            </div>
        </div>
      </div>
    
  );
};

export default Home;
