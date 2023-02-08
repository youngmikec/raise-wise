import React from "react";
import Navbar from "../../shared/landing-page/navbar";
import Footer from "../../shared/landing-page/footer";
import AppToggler from "../../components/app-toggler";
import Banner from "../../components/banner";
import AppModal from "../../shared/landing-page/app-modal";

const Home = () => {
    const tabs: string[] = ["Recent Jobs", "Featured Jobs"];
    return (
        <>
            <Navbar />
            <Banner />
            <AppModal display={false} />
            <div className="my-3">
                <AppToggler tabs={tabs} />
            </div>
            <Footer />
        </>
    )
}

export default Home;