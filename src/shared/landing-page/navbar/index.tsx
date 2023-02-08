import React from "react";
// import { Link } from 'react-router-dom';

//styles
import '../../../assets/css/style.css';
import "../../../assets/plugins/bootstrap/css/bootstrap.min.css";
import "../../../assets/plugins/bootstrap/css/bootstrap-select.min.css"
import "../../../assets/plugins/icons/css/icons.css";
import "../../../assets/plugins/animate/animate.css";
import "../../../assets/plugins/bootstrap/css/bootsnav.css";
import "../../../assets/plugins/nice-select/css/nice-select.css";
// import "../../../assets/plugins/aos-master/aos.css";
import "../../../assets/plugins/slick-slider/slick.css";
import "../../../assets/css/style.css";
import "../../../assets/css/responsiveness.css";
import "../../../assets/css/skin/default.css";

//logo
import logo from '../../../assets/img/logo.png';
import logoLight from '../../../assets/img/logo-light.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-default navbar-mobile navbar-fixed white no-background bootsnav">
                <div className="container">

                    {/* <!-- Start Logo Header Navigation --> */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="index.html">
                            <img src={logoLight} className="logo logo-display" alt="logo-white" />
                            <img src={logo} className="logo logo-scrolled" alt="logo" />
                        </a>

                    </div>
                    {/* <!-- End Logo Header Navigation --> */}

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse" id="navbar-menu">

                        <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                                <ul className="dropdown-menu animated fadeOutUp">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="home-2.html">Home 2</a></li>
                                    <li><a href="home-3.html">Home 3</a></li>
                                    <li><a href="home-4.html">Home 4</a></li>
                                    <li><a href="freelancer.html">Freelancer</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Employer</a>
                                <ul className="dropdown-menu animated fadeOutUp">
                                    <li><a href="create-company.html">Create Company</a></li>
                                    <li><a href="manage-resume.html">Manage Resume</a></li>
                                    <li><a href="browse-employer.html">Browse Employer</a></li>
                                    <li><a href="browse-employer-grid.html">Browse Employer Grid</a></li>
                                    <li><a href="create-job.html">Create Job</a></li>
                                    <li><a href="resume-detail.html">Resume Detail</a></li>
                                    <li><a href="employer-detail.html">Employer Detail</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Candidate</a>
                                <ul className="dropdown-menu animated fadeOutUp">
                                    <li><a href="browse-job.html">Browse Jobs</a></li>
                                    <li><a href="browse-job-with-map.html">Browse Jobs With Map</a></li>
                                    <li><a href="browse-grid-job-with-map.html">Browse Grid Jobs on Map</a></li>
                                    <li><a href="browse-candidate.html">Browse candidate</a></li>
                                    <li><a href="browse-candidate-grid.html">Browse candidate Grid</a></li>
                                    <li><a href="browse-candidate-with-map.html">Search candidate With Map</a></li>
                                    <li><a href="manage-job.html">Manage Jobs</a></li>
                                    <li><a href="browse-category.html">Browse Categories</a></li>
                                    <li><a href="create-resume.html">Create Resume</a></li>

                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Extra</a>
                                <ul className="dropdown-menu animated fadeOutUp">
                                    <li><a href="candidate.html">Candidate</a></li>
                                    <li><a href="profile-settings.html">Profile Settings</a></li>
                                    <li><a href="employer.html">Employer</a></li>
                                    <li><a href="featured-job.html">Featured Job</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="job-view-cart.html">Job View Cart</a></li>
                                    <li><a href="job-detail-2.html">Job Detail 2</a></li>
                                    <li><a href="job-layout-one.html">Job Layout One</a></li>
                                    <li><a href="job-layout-two.html">Job Layout Two</a></li>
                                    <li><a href="job-layout-three.html">Job Layout Three</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Elements</a>
                                <ul className="dropdown-menu animated fadeOutUp">
                                    <li><a href="icons.html">Icons</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="job-detail.html">Job Detail</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-detail.html">Blog Detail</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="component.html">Component</a></li>
                                    <li><a href="typography.html">Typography</a></li>
                                </ul>
                            </li>

                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="br-right text-primary"><a href="javascript:void(0)" data-toggle="modal" data-target="#signin"><i
                                        className="login-icon ti-user"></i>Login</a></li>
                            <li className="sign-up"><a className="btn-signup red-btn" href="signup.html"><span
                                        className="ti-briefcase"></span>Sign Up</a></li>
                        </ul>

                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </div>
            </nav>
        </>
    )
}
export default Navbar;

