const PriceList =()=>{
return(
    <div className="container">
                            <div className="row">

                                <div className="col-lg-8 col-12">
                                    <div className="price-list-thumb-wrap">
                                        <div className="mb-4">
                                            <h2 className="mb-2">Price List</h2>

                                            <strong>Starting at $25</strong>
                                        </div>

                                        <div className="price-list-thumb">
                                            <h6 className="d-flex">
                                                Haircut
                                                <span className="price-list-thumb-divider"></span>

                                                <strong>$32.00</strong>
                                            </h6>
                                        </div>

                                        <div className="price-list-thumb">
                                            <h6 className="d-flex">
                                                Beard Trim
                                                <span className="price-list-thumb-divider"></span>

                                                <strong>$26.00</strong>
                                            </h6>
                                        </div>

                                        <div className="price-list-thumb">
                                            <h6 className="d-flex">
                                                Razor Cut
                                                <span className="price-list-thumb-divider"></span>

                                                <strong>$36.00</strong>
                                            </h6>
                                        </div>

                                        <div className="price-list-thumb">
                                            <h6 className="d-flex">
                                                Shaves
                                                <span className="price-list-thumb-divider"></span>

                                                <strong>$30.00</strong>
                                            </h6>
                                        </div>

                                        <div className="price-list-thumb">
                                            <h6 className="d-flex">
                                                Styling / Color
                                                <span className="price-list-thumb-divider"></span>

                                                <strong>$25.00</strong>
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-12 custom-block-bg-overlay-wrap mt-5 mb-5 mb-lg-0 mt-lg-0 pt-3 pt-lg-0">
                                    <img src="images/vintage-chair-barbershop.jpg" className="custom-block-bg-overlay-image img-fluid" alt=""/>
                                </div>

                            </div>
                        </div>
)
}
export default PriceList