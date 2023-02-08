import React from "react";

import './style.css';


const Banner = () => {

    const style = {
        background: `url('../../assets/img/banner-1.jpg')`
    }
    return (
        <>
            <div className="main-banner main-bg"  data-overlay="8">
                <div className="container">
                    <div className="col-md-12 col-sm-12">

                        <div className="caption text-center cl-white">
                            <h2>Find Your Career. You Deserve it.</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti atque corrupti quos dolores et quas molestias</p>
                        </div>

                        <form>
                            <fieldset className="home-form-1">

                                <div className="col-md-4 col-sm-4 padd-0">
                                    <input type="text" className="form-control br-1" placeholder="Skills, Designation, Companies" />
                                </div>

                                <div className="col-md-3 col-sm-3 padd-0">
                                    <select className="wide form-control br-1">
                                        <option data-display="Location">All Country</option>
                                        <option value="1">Allahabad</option>
                                        <option value="2">India</option>
                                        <option value="3" disabled>Australia</option>
                                        <option value="4">United State</option>
                                    </select>
                                </div>

                                <div className="col-md-3 col-sm-3 padd-0">
                                    <select className="wide form-control">
                                        <option data-display="Category">Show All</option>
                                        <option value="1">Web Design</option>
                                        <option value="2">Accountant</option>
                                        <option value="3" disabled>Marketting</option>
                                        <option value="4">Farmer</option>
                                    </select>
                                </div>

                                <div className="col-md-2 col-sm-2 padd-0 m-clear">
                                    <button type="submit" className="btn theme-btn cl-white seub-btn">FIND JOB</button>
                                </div>

                            </fieldset>
                        </form>

                        <div className="row">

                            <div className="col-md-4 col-sm-4">
                                <div className="cmp-overview">
                                    <div className="cmp-icon">
                                        <i className="cmp-i icon-profile-male"></i>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="cmp-detail">
                                        <h3>674.058</h3>
                                        <span>Active Workers</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <div className="cmp-overview">
                                    <div className="cmp-icon">
                                        <i className="cmp-i icon-desktop"></i>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="cmp-detail">
                                        <h3>74.587</h3>
                                        <span>Companies</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <div className="cmp-overview">
                                    <div className="cmp-icon">
                                        <i className="cmp-i icon-global"></i>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="cmp-detail">
                                        <h3>47</h3>
                                        <span>Countries</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;