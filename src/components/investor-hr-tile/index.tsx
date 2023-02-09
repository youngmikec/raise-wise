import React from 'react';

//component
import AppTag from '../app-tag';

type Props = {
    title: string;
    subTitle?: string;
    isFeatured: boolean;
    imageUrl?: string;
    address: string;
    offerAmout?: number;
    category: string;
}

const InvestorHrTile = ({title, subTitle, isFeatured, imageUrl, address, offerAmout, category}: Props) => {
    return (
        <>
            <div className="job-verticle-list">
                {
                    isFeatured &&
                    <span className="urgent">Featured</span>
                }
                <div className="vertical-job-card">
                    <div className="vertical-job-header">
                        <div className="vrt-job-cmp-logo">
                            <a href="job-detail.html"><img src={ imageUrl ? imageUrl : "http://via.placeholder.com/120x120"} className="img-responsive" alt="" /></a>
                        </div>
                        <h4><a href="job-detail.html">{title}</a></h4>
                        {
                            subTitle && 
                            <span className="com-tagline">{subTitle}</span>
                        }
                        <span className="pull-right job-type full-type">{category}</span>
                    </div>
                    <div className="vertical-job-body">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <ul className="can-skils">
                                    {
                                        address &&
                                        <li><i className="ti-location-pin"></i>{ address }</li>
                                    }
                                    {
                                        offerAmout && 
                                        <li><i className="ti-credit-card"></i> ${ offerAmout }</li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="job-bottom-tags flex-middle">
                        <div className="job-tags">
                            <div className="job-tags with-title">
                                <strong>Tagged as:</strong>
                                <AppTag tag="css" />
                                <AppTag tag="php" />
                                <AppTag tag="wordPress" />
                            </div>
                        </div>
                        <div className="ali-right">
                            <div className="wrapper-shortlist">
                                <a href="javascript:void(0);" className="btn-action-job btn-add-job-shortlist" data-job_id="856" data-nonce="678580d52a"><i className="fa fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestorHrTile;