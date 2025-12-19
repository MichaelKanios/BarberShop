const Hero =()=>{
return(
    <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <h1 className="text-white mb-lg-3 mb-4"><strong>Barber <em>Shop</em></strong></h1>
                  <p className="text-black">Get the most professional haircut for you</p>
                  <br />
                  <a className="btn custom-btn custom-border-btn custom-btn-bg-white me-2 mb-2" href="#section_2">About Us</a>
                  <a className="btn custom-btn  mb-2" href="#section_3">What we do</a>
                </div>
              </div>
            </div>

            <div className="custom-block d-lg-flex flex-column justify-content-center align-items-center">
              <img src="images/vintage-chair-barbershop.jpg" className="custom-block-image img-fluid" alt="" />
              <h4><strong className="text-white">Hurry Up! Get good haircut.</strong></h4>
              <a href="#booking-section" className="btn custom-btn custom-btn-italic mt-3">Book a seat</a>
            </div>
          </section>
)
}

export default Hero