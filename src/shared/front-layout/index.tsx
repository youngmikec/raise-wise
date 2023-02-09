import React, { ReactNode } from 'react';
import Navbar from '../landing-page/navbar';
import Footer from '../landing-page/footer';

type Props = {
    children: ReactNode
}

const FrontLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            { children }
            <Footer />
        </>
    )
}

export default FrontLayout;