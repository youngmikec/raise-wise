import React from "react";

//components
import Banner from "../../banner";
import AppModal from "../../../shared/landing-page/app-modal";
import LoginComponent from "../../auth/login";
import AppToggler from "../../app-toggler";
import InvestorTile from "../../investor-tile";
import InvestorHrTile from "../../investor-hr-tile";

const HomeComp = () => {
    const tabs: string[] = ["Recent Jobs", "Featured Jobs"];
    
    return (
        <>
            <Banner />
            <AppModal display={false}>
                <LoginComponent />
            </AppModal>
            <div className="my-3">
                <AppToggler tabs={tabs} />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <InvestorTile 
                            isFeatured={true} 
                            isChecked={true}
                            title="Product Redesign"
                            subTitle="2708 Scenic Way, IL 62373"
                            imageUrl=""
                            btnLabel=""
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <InvestorTile 
                            isFeatured={false} 
                            isChecked={true}
                            title="Product Redesign"
                            subTitle="2708 Scenic Way, IL 62373"
                            imageUrl=""
                            btnLabel=""
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <InvestorTile 
                            isFeatured={false} 
                            isChecked={false}
                            title="Product Redesign"
                            subTitle="2708 Scenic Way, IL 62373"
                            imageUrl=""
                            btnLabel=""
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <InvestorTile 
                            isFeatured={true} 
                            isChecked={true}
                            title="Product Redesign"
                            subTitle="2708 Scenic Way, IL 62373"
                            imageUrl=""
                            btnLabel=""
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <InvestorHrTile
                            title="Apple LTD"
                            subTitle="Software Development"
                            isFeatured={true}
                            category="Pre seed"
                            address="2708 Scenic Way, IL 62373"
                            offerAmout={1500}
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <InvestorHrTile
                            title="Sirix LTD"
                            subTitle="CMS Development"
                            isFeatured={false}
                            category="Series B"
                            address="2708 Scenic Way, IL 62373"
                            offerAmout={8000}
                        />
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}
export default HomeComp;