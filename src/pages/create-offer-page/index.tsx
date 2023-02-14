import React from "react";
import FrontLayout from "../../shared/front-layout";

import bannerImage from '../../assets/img/banner-4.jpg';
import AppPageTitle from "../../components/app-page-title";

const CreateOfferPage = () => {
    const style = {
        background: `url(${bannerImage})`
    }
    return (
        <>
            <FrontLayout>
                {/* <Banner /> */}
                <AppPageTitle pageTitle="Create Company" bannerUrl={bannerImage} />

                <section className="create-company gray">
                    <div className="container">
                        <form className="c-form">
                            
                            {/* <!-- General Information --> */}
                            <div className="box">
                                <div className="box-header">
                                    <h4>General Information</h4>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                    
                                        <div className="col-sm-4">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Company Tagline</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Category</label>
                                            <select className="wide form-control">
                                                <option data-display="Location">Information Of Technology</option>
                                                <option value="1">Hardware</option>
                                                <option value="2">Machanical</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-sm-4 m-clear">
                                            <label>Owner Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Company Logo</label>
                                            <div className="custom-file-upload">
                                                <input type="file" id="file" name="myfiles[]" multiple />
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Established</label>
                                            <input type="text" id="reservation-date" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readOnly={true} />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- Company Address --> */}
                            <div className="box">
                                <div className="box-header">
                                    <h4>Company Address</h4>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        
                                        <div className="col-sm-4">
                                            <label>Email</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Phone No.</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Landline</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Website Link</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Address</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>City</label>
                                            <select className="wide form-control">
                                                <option data-display="City">Allahabad</option>
                                                <option value="1">Faizabad</option>
                                                <option value="2">Sultanpur</option>
                                                <option value="3" disabled>Pratapgarh</option>
                                                <option value="4">Basti</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-sm-4 m-clear">
                                            <label>State</label>
                                            <select className="wide form-control">
                                                <option data-display="State">Uttar Pradesh</option>
                                                <option value="1">Uttrakhand</option>
                                                <option value="2">Chandigarh</option>
                                                <option value="3" disabled>Punjab</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-sm-4 m-clear">
                                            <label>Country</label>
                                            <select className="wide form-control">
                                                <option data-display="Country">India</option>
                                                <option value="1">United Kingdom</option>
                                                <option value="2">Austrailia</option>
                                                <option value="3" disabled>New ZeLand</option>
                                            </select>
                                        </div>
                                        
                                        <div className="col-sm-4 m-clear">
                                            <label>Zip Code</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label>Employees</label>
                                            <select className="wide form-control">
                                                <option data-display="Employees">10 - 50</option>
                                                <option value="1">50 - 100</option>
                                                <option value="2">100 - 500</option>
                                                <option value="3" disabled>500 - 1000</option>
                                            </select>
                                        </div>
                                        
                                                                        
                                        <div className="col-sm-4 m-clear">
                                            <label>Working Time</label>
                                            <select className="wide form-control">
                                                <option data-display="Working Time">08:00AM To 5:00PM</option>
                                                <option value="1">10:00AM To 4:00PM</option>
                                                <option value="2">10:00AM To 6:00PM</option>
                                                <option value="3" disabled>11:00AM To 7:00PM</option>
                                            </select>
                                        </div>
                                        
                                                                        
                                        <div className="col-sm-4 m-clear">
                                            <label>Address 2</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- Social Accounts --> */}
                            <div className="box">
                                <div className="box-header">
                                    <h4>Social Accounts</h4>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        
                                        <div className="col-sm-4">
                                            <label><i className="fa fa-facebook mrg-r-5"></i>Facebook</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label><i className="fa fa-google-plus mrg-r-5"></i>Google +</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label><i className="fa fa-twitter mrg-r-5"></i>Twitter</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label><i className="fa fa-linkedin mrg-r-5"></i>LinkedIn</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label><i className="fa fa-pinterest mrg-r-5"></i>Pinterest</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <label><i className="fa fa-instagram mrg-r-5"></i>Instagram</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- Company Summery --> */}
                            <div className="box">
                                <div className="box-header">
                                    <h4>Company Summery</h4>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        
                                        <div className="col-sm-12">
                                            <label>About Company</label>
                                            <textarea className="form-control height-120 textarea" placeholder="About Company"></textarea>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <button type="submit" className="btn btn-m theme-btn">Submit & Exit</button>
                            </div>
                            
                        </form>
                    </div>
                </section>
            </FrontLayout>
        </>
    )
}

export default CreateOfferPage;