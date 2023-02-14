import React from 'react';
import FrontLayout from '../../shared/front-layout';
import SignupComp from '../../components/auth/sign-up-comp';

const SignupPage = () => {
    return (
        <>
            <FrontLayout>
                <SignupComp />
            </FrontLayout>
        </>
    )
}

export default SignupPage;