import React from "react";

import bannerImage from '../../assets/img/banner-4.jpg';

import AppPageTitle from "../app-page-title";
import AppTable from "../../shared/app-table";

const SignupComp = () => {
    const headers: string[] = [
        'Title', 'Location', 'Email', 'Posted', 'Action'
    ];

    return (
        <>
            <AppPageTitle pageTitle="Create Account" bannerUrl={bannerImage} />

            {/* Sign up */}
            <section>
                <div className="container">
                    <div className="container">
                
                        <div className="log-box">
                            <form className="log-form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Your Email.." />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="********" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input type="password" className="form-control" placeholder="********" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group text-center mrg-top-15">
                                            <button type="submit" className="btn theme-btn btn-m">Create An Account</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                            
                            <div className="log-option"><span>OR</span></div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <a href="#" title="" className="fb-log-btn log-btn"><i className="fa fa-facebook"></i>SignUP With Facebook</a>
                                </div>
                                <div className="col-md-6">
                                    <a href="#" title="" className="gplus-log-btn log-btn"><i className="fa fa-google-plus"></i>SignUp With Google+</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* Sign up */}

        </>
    )
}

export default SignupComp;