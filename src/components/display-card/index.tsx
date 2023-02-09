import React from "react";
import { Link } from 'react-router-dom';

const DisplayCard = () => {
    return (
        <>
            <div className="job-verticle-list">
                <div className="vertical-job-card">
                    <div className="vertical-job-header">
                        <div className="vrt-job-cmp-logo">
                            <a href="job-detail.html"><img src="http://via.placeholder.com/120x120" className="img-responsive" alt="" /></a>
                        </div>
                        <h4><a href="job-detail.html">Apple LTD</a></h4>
                        <span className="com-tagline">Software Development</span>
                        <span className="pull-right vacancy-no">No. <span className="v-count">2</span></span>
                    </div>
                    <div className="vertical-job-body">
                        <div className="row">
                            <div className="col-md-9 col-sm-8">
                                <ul className="can-skils">
                                    <li><strong>Job Id: </strong>G58726</li>
                                    <li><strong>Job Type: </strong>Full Time</li>
                                    <li><strong>Skills: </strong>
                                        <span className="skill-tag">HTML</span>
                                        <span className="skill-tag">css</span>
                                        <span className="skill-tag">java</span>
                                        <span className="skill-tag">php</span>
                                        <span className="skill-tag">bootstrap</span>
                                    </li>
                                    <li><strong>Experience: </strong>3 Year</li>
                                    <li><strong>Location: </strong>2844 Counts Lane, KY 45241</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="vrt-job-act">
                                    <a href="#" data-toggle="modal" data-target="#apply-job" className="btn-job theme-btn job-apply">Apply Now</a>
                                    <Link to="/investor/detail/1" title="Investor details" className="btn-job light-gray-btn">View Investor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-job-footer">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="cmp-job-rating">
                                    <ul>
                                        <li><strong>Rating: </strong>
                                            <i className="rate fa fa-star"></i>
                                            <i className="rate fa fa-star"></i>
                                            <i className="rate fa fa-star"></i>
                                            <i className="rate fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <span className="rating-counter">4.7/5</span>
                                        </li>
                                        <li><a href="#" title="">(570 Review)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="cmp-job-review">
                                    <ul>
                                        <li><a href="#" title="">Write Review<i className="theme-color fa fa-pencil"></i></a></li>
                                        <li><a href="#" title="">Show Review<i className="theme-color fa fa-comments-o"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DisplayCard;