import React from "react";

import AppCard from "../../shared/app-card";
import FrontLayout from "../../shared/front-layout";
import InvestorDisplayBanner from "../../components/investor-detail-comps/investor-display-banner";

const InvestorsDetailPage = () => {
    const investorDetail: any = {
        name: "Angel Investor",
        subTitle: "Google PVT",
        phone: "+2348108816975",
        address: "#2852, SCO 20 Chandigarh"
    }
    return (
        <>
            <FrontLayout>
                <InvestorDisplayBanner 
                    profileImage="http://via.placeholder.com/120x120" 
                    details={ investorDetail } 
                />

                {/* page body */}

                <div className="gray" style={{ padding: '6em 0'}}>
                    <div className="container">
                        {/* stats */}
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="my-3">
                                    <AppCard hasHeader={false}>
                                        <div className="job-title-bar">
                                            <h3>Web Design <span className="mrg-l-5 job-tag bg-success-light">Full Time</span></h3>
                                            <div>
                                                <p className="mrg-bot-0">
                                                    <i className="ti-location-pin mrg-r-5"></i>
                                                    2726 Shinn Street, New York
                                                </p>
                                                
                                                <p><strong>Roles</strong>975 : UX/UI Designer, Web Designer, Graphic Designer</p>
                                            </div>
                                        </div>
                                    </AppCard>

                                    <AppCard hasHeader={true} title="Overview">
                                        <div className="detail-wrapper-body">
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                                        </div>
                                    </AppCard>

                                    <AppCard hasHeader={true} title="Responsibilities">
                                        <ul className="detail-list">
                                            <li>Execute all visual design stages from concept to final hand-off to engineering</li>
                                            <li>Conceptualize original website design ideas that bring simplicity and user friendliness to complex roadblocks</li>
                                            <li>Create wireframes, storyboards, user flows, process flows and site maps to communicate interaction and design ideas</li>
                                            <li>Present and defend designs and key deliverables to peers and executive level stakeholders</li>
                                            <li>Establish and promote design guidelines, best practices and standards</li>
                                        </ul>
                                    </AppCard>

                                    <AppCard hasHeader={true} title="Requirements">
                                        <ul className="detail-list">
                                            <li>Proven work experienceas a web designer</li>
                                            <li>Demonstrable graphic design skills with a strong portfolio</li>
                                            <li>Proficiency in HTML, CSS and JavaScript for rapid prototyping</li>
                                            <li>Experience working in an Agile/Scrum development process</li>
                                            <li>Excellent visual design skills with sensitivity to user-system interaction</li>
                                            <li>Ability to solve problems creatively and effectively</li>
                                            <li>Up-to-date with the latest Web trends, techniques and technologies</li>
                                            <li>BS/MS in Human-Computer Interaction, Interaction Design or a Visual Arts subject</li>
                                        </ul>
                                    </AppCard>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="widget-boxed">
                                    <div className="widget-boxed-header">
                                        <h4><i className="ti-location-pin padd-r-10"></i>Location</h4>
                                    </div>
                                    <div className="widget-boxed-body">
                                        <div className="side-list no-border">
                                            <ul>
                                                <li><i className="ti-credit-card padd-r-10"></i>Package: 20K To 50K/Month</li>
                                                <li><i className="ti-world padd-r-10"></i>https://www.jobhill.com</li>
                                                <li><i className="ti-mobile padd-r-10"></i>91 234 567 8765</li>
                                                <li><i className="ti-email padd-r-10"></i>suppoer@listinghub.com</li>
                                                <li><i className="ti-pencil-alt padd-r-10"></i>Bachelor Degree</li>
                                                <li><i className="ti-shield padd-r-10"></i>3 Year Exp.</li>
                                            </ul>
                                            <h5>Share Job</h5>
                                            <ul className="side-list-inline no-border social-side">
                                                <li><a href="#"><i className="fa fa-facebook theme-cl"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus theme-cl"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter theme-cl"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin theme-cl"></i></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest theme-cl"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End: Job Overview --> */}
                                
                                {/* <!-- Start: Opening hour --> */}
                                <div className="widget-boxed">
                                    <div className="widget-boxed-header">
                                        <h4><i className="ti-time padd-r-10"></i>Opening Hours</h4>
                                    </div>
                                    <div className="widget-boxed-body">
                                        <div className="side-list">
                                            <ul>
                                                <li>Monday <span>9 AM - 5 PM</span></li>
                                                <li>Tuesday <span>9 AM - 5 PM</span></li>
                                                <li>Wednesday <span>9 AM - 5 PM</span></li>
                                                <li>Thursday <span>9 AM - 5 PM</span></li>
                                                <li>Friday <span>9 AM - 5 PM</span></li>
                                                <li>Saturday <span>9 AM - 3 PM</span></li>
                                                <li>Sunday <span>Closed</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* stats */}

                        {/* related offers */}
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="mrg-bot-20">More Jobs</h4>
                            </div>
                        </div>
                        {/* related offers */}
                    </div>
                </div>

                


                {/* page body */}
            </FrontLayout>
        </>
    )
}

export default InvestorsDetailPage;