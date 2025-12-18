const Booking=()=>{
return(
    <div className="container">
                        <div className="row">

                            <div className="col-lg-10 col-12 mx-auto">
                                <form action="#" method="post" className="custom-form booking-form" id="bb-booking-form" role="form">
                                    <div className="text-center mb-5">
                                        <h2 className="mb-1">Book a seat</h2>

                                        <p>Please fill out the form and we get back to you</p>
                                    </div>

                                    <div className="booking-form-body">
                                        <div className="row">

                                            <div className="col-lg-6 col-12">
                                                <input type="text" name="bb-name" id="bb-name" className="form-control" placeholder="Full name" required/>
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <input type="tel" className="form-control" name="bb-phone" placeholder="Mobile 010-020-0340" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                                            </div>
                                        
                                            <div className="col-lg-6 col-12">
                                                <input className="form-control" type="time" name="bb-time" value="18:30" />
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <select className="form-select form-control" name="bb-branch" id="bb-branch" aria-label="Default select example">
                                                    <option >Select Branches</option>
                                                    <option value="Grünberger">Grünberger</option>
                                                    <option value="Behrenstraße">Behrenstraße</option>
                                                    <option value="Weinbergsweg">Weinbergsweg</option>
                                                </select>

                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <input type="date" name="bb-date" id="bb-date" className="form-control" placeholder="Date" required/>
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <input type="number" name="bb-number" id="bb-number" className="form-control" placeholder="Number of People" required/>
                                            </div>
                                        </div>

                                        <textarea name="bb-message"  className="form-control" id="bb-message" placeholder="Comment (Optionals)"></textarea>

                                        <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                            <button type="submit" className="form-control">Submit</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                    </div>
)
}
export default Booking