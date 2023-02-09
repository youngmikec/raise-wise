import React from 'react';

// components
import AppPageTitle from '../../app-page-title'
import AppFilterDropdown from '../../app-filter-dropdown'
import AppSortComp from '../../app-sort-comp'
import { SORT_TYPE } from '../../../models'
import DisplayCard from '../../display-card';

//image
import pageBanner from '../../../assets/img/banner-4.jpg';

const InvestorsJobComp = () => {
  return (
    <>
        <AppPageTitle bannerUrl={pageBanner} pageTitle="Browse Jobs"  />

            <section className='gray'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 jv-side">
                            <div className="widget-boxed padd-bot-0 lg">
                                <div className="widget-boxed-body map-searches">
                                    <div className="icon-addon addon-lg">
                                        <input type="text" className="form-control" placeholder="Skills, Designation..." />
                                        <i className="ti-search"></i>
                                    </div>
                                    <div className="icon-addon addon-lg">
                                        <input type="text" className="form-control" placeholder="Location, USA" />
                                        <i className="ti-location-pin"></i>
                                    </div>
                                </div>
                            </div>

                            <AppFilterDropdown title='Offered Salary' />
                            <AppFilterDropdown title='Designation' />
                        </div>

                        <div className="col-md-9 col-sm-12">
                            <div className="row mrg-bot-20">
                                <div className="col-sm-5">
                                    <h4>98 Investors</h4>
                                </div>
                                
                                <div className="col-sm-7">
                                    <AppSortComp type={SORT_TYPE.DATE} />
                                </div>
                            </div>

                            <div className="my-3">
                                <DisplayCard />
                                <DisplayCard />
                                <DisplayCard />
                                <DisplayCard />
                                <DisplayCard />
                            </div>

                            <div className="text-center">
                                <button type="button" className="btn theme-btn btn-m">Load More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default InvestorsJobComp