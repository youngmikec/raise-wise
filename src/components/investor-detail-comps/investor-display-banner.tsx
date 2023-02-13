import React from 'react';

type Props = {
    coverImage?: String;
    profileImage: string;
    details: any
}

const InvestorDisplayBanner = ({ coverImage, profileImage, details }: Props) => {
    const styles = {
        background: `url('http://via.placeholder.com/1920x900')`
    }
    return (
        <>
            <section className="detail-section mb-4" style={styles}>
                <div className="overlay"></div>
                <div className="profile-cover-content">
                    <div className="container">
                        <div className="cover-buttons">
                            <ul>
                                <li><div className="buttons medium button-plain "><i className="fa fa-phone"></i>{ details.phone }</div></li>
                                <li><div className="buttons medium button-plain "><i className="fa fa-map-marker"></i>{ details.address }</div></li>
                                <li><a href="#add-review" className="buttons theme-btn"><i className="fa fa-paper-plane"></i><span className="hidden-xs">Apply Now</span></a></li>
                                <li><a href="#" data-job-id="74" data-nonce="01a769d424" className="buttons btn-outlined"><i className="fa fa-heart-o"></i><span className="hidden-xs">Bookmark</span> </a></li>
                            </ul>
                        </div>
                        <div className="job-owner hidden-xs hidden-sm">
                            <div className="job-owner-avater">
                                <img 
                                    src={details.profileImage ? details.profileImage : 'http://via.placeholder.com/120x120' } 
                                    className="img-responsive img-circle" 
                                    alt="profile" 
                                />
                            </div>
                            <div className="job-owner-detail">
                                <h4>{ details.name }</h4>
                                <span className="theme-cl">{ details.subTitle }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InvestorDisplayBanner;