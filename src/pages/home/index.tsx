import React from "react";

//components
import Navbar from "../../shared/landing-page/navbar";
import Footer from "../../shared/landing-page/footer";
import AppToggler from "../../components/app-toggler";
import Banner from "../../components/banner";
import AppModal from "../../shared/landing-page/app-modal";
import LoginComponent from "../../components/auth/login";
import InvestorTile from "../../components/investor-tile";

const Home = () => {
    const tabs: string[] = ["Recent Jobs", "Featured Jobs"];
    return (
        <>
            <Navbar />
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
                            isFeatured={false} 
                            isChecked={true}
                            title="Product Redesign"
                            subTitle="2708 Scenic Way, IL 62373"
                            imageUrl=""
                            btnLabel=""
                        />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;