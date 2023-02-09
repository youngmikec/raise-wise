import React from 'react';

//components
import FrontLayout from '../../shared/front-layout';
import InvestorsJobComp from '../../components/pages-comps/investors-job-comps';


const InvestorsPage = () => {
    return (
        <>
            <FrontLayout>
                <InvestorsJobComp />
            </FrontLayout>
        </>
    )
}

export default InvestorsPage;