import React from "react";

type Props = {
    isFeatured: boolean;
    isChecked: boolean;
    title: string;
    subTitle?: string;
    btnLabel?: string;
    imageUrl?: string;
}

const InvestorTile = ({title, subTitle, btnLabel, isFeatured, isChecked, imageUrl}: Props) => {
    return (
        <>
            <div className="grid-job-widget">

                <span className="job-type full-type">Full Time</span>
                <div className="job-like">
                    <label className="toggler toggler-danger">
                        <input type="checkbox" checked />
                        {
                            isChecked && 
                            <i className="fa fa-heart"></i>
                        }
                    </label>
                </div>

                {
                    isFeatured && 
                    <div className="job-featured"></div>
                }

                <div className="u-content">
                    <div className="avatar box-80">
                        <a href="employer-detail.html">
                            <img 
                                className="img-responsive" 
                                src={ imageUrl ? imageUrl : "http://via.placeholder.com/120x120" } 
                                alt="" 
                            />
                        </a>
                    </div>
                    <h5><a href="employer-detail.html">{ title }</a></h5>
                    {
                        subTitle && 
                        <p className="text-muted">{ subTitle }</p>
                    }
                </div>

                <div className="job-type-grid">
                    <a href="job-detail.html" className="btn job-browse-btn btn-radius br-light">
                        { btnLabel ? btnLabel : "Browse now" }
                    </a>
                </div>

            </div>
        </>
    )
}

export default InvestorTile;