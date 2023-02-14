import React from 'react';
import FrontLayout from '../../shared/front-layout';
import ProfileComp from '../../components/pages-comps/profile-comp';

const ProfilePage = () => {
    return (
        <>
            <FrontLayout>
                <ProfileComp />

                {/* profile settings */}
                <section>
                    <div className="container">
                        
                        <div className="row">
                            {/* <!-- col-md-6 --> */}
                            <div className="col-md-6 col-12">
                            
                                <div className="form-group">
                                    <div className="contact-img">
                                        <img src="http://via.placeholder.com/400x400" className="img-circle img-responsive" alt="profile" />
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" placeholder="Daniel" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" placeholder="Duke" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" className="form-control" placeholder="***********" />
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" placeholder="danielduke@gmail.com" />
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" placeholder="985 485 75895" />
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control" placeholder="#253 Joken Sliteer Shuit QCH12" />
                                    </div>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Nation</label>
                                        <input type="text" className="form-control" placeholder="Canada" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* <!-- col-md-6 --> */}
                            <div className="col-md-6 col-12 padd-top-20">
                                
                                {/* <!-- col-md-12 --> */}
                                <div className="col-md-12">
                                
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <select className="wide form-control">
                                                    <option data-display="Location">Gender</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Language</label>
                                                <select className="wide form-control">
                                                    <option data-display="Location">Language</option>
                                                    <option value="1">English</option>
                                                    <option value="2">Hindi</option>
                                                    <option value="4">British</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* <!-- col-md-12 --> */}
                                
                                {/* <!-- col-md-12 --> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <input 
                                            type="text" 
                                            id="dob" 
                                            data-lang="en" 
                                            data-large-mode="true" 
                                            data-min-year="2017" 
                                            data-max-year="2020" 
                                            data-disabled-days="08/17/2017,08/18/2017" 
                                            data-id="datedropper-0" data-theme="my-style" className="form-control" readOnly={true} 
                                        />
                                    </div>
                                </div>
                                {/* <!-- col-md-12 --> */}
                                
                                {/* <!-- col-md-12 --> */}
                                <div className="col-md-12">
                                
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Facebook</label>
                                                <input type="text" className="form-control" placeholder="https://facebook.com/daniel" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Twitter</label>
                                                <input type="text" className="form-control" placeholder="https://twitter.com/daniel" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* <!-- col-md-12 --> */}
                                
                                {/* <!-- col-md-12 --> */}
                                <div className="col-md-12">
                                
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Linkedin</label>
                                                <input type="text" className="form-control" placeholder="https://linkedin.com/daniel" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Google+</label>
                                                <input type="text" className="form-control" placeholder="+Daniel" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* <!-- col-md-12 --> */}
                                
                                {/* <!-- col-md-12 --> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Slogan</label>
                                        <input type="text" className="form-control" placeholder="World Most Popular Software Development Industry" />
                                    </div>
                                </div>
                                {/* <!-- col-md-12 --> */}
                                
                                {/* <!-- col-md-12 --> */}
                                <div className="col-md-12">
                                
                                    <label>Payment Methode</label>	
                                    <div className="row">

                                        <div className="col-md-4 col-12">
                                            <div className="form-group">
                                                
                                                <div className="payment-box">
                                                
                                                    <div className="padd-10">
                                                        <img src="assets/img/paypal.png" className="fl-left width-30" alt="" />
                                                        <h5 className="mb-0">Paypal</h5>
                                                        <small>daniel..@gmai</small>
                                                    </div>
                                                    
                                                    <div className="pay-box-footer bt-1">
                                                        <a href="#" data-toggle="tooltip" data-original-title="Remove" className="theme-cl font-13 fl-right">Remove</a>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4 col-12">
                                            <div className="form-group">
                                                
                                                <div className="payment-box">
                                                
                                                    <div className="padd-10">
                                                        <img src="assets/img/strip.png" className="fl-left width-30" alt="" />
                                                        <h5 className="mb-0">strip..456</h5>
                                                        <small>Expire 26/22</small>
                                                    </div>
                                                    
                                                    <div className="pay-box-footer bt-1">
                                                        <a href="#" data-toggle="tooltip" data-original-title="Remove" className="theme-cl font-13 fl-right">Remove</a>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-4 col-12">
                                            <div className="form-group">
                                                
                                                <div className="payment-box">
                                                
                                                    <div className="padd-10">
                                                        <img src="assets/img/debit.png" className="fl-left width-40" alt="" />
                                                        <h5 className="mb-0">Master..256</h5>
                                                        <small>Expire 26/22</small>
                                                    </div>
                                                    
                                                    <div className="pay-box-footer bt-1">
                                                        <a href="#" data-toggle="tooltip" data-original-title="Remove" className="theme-cl font-13 fl-right">Remove</a>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                {/* <!-- col-md-12 --> */}
                                
                                {/* <!-- col-md-12 --> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <a href="" className="btn outline-secondary" data-toggle="tooltip" data-original-title="Add Payment Method">
                                            <i className="ti-credit-card"></i> Add Payment Method
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- col-md-12 --> */}
                                
                            </div>
                            
                            <div className="col-md-12 col-12 padd-top-20 text-center">
                                <a href="#" className="btn btn-m theme-btn">Update & Exit</a>
                            </div>
                            
                        </div>
                        
                    </div>
                </section>
                {/* profile settngs */}
            </FrontLayout>
        </>
    )
}

export default ProfilePage;