import React from 'react';

type Props = {
    bannerUrl: string;
    pageTitle: string
}

const AppPageTitle = ({ bannerUrl, pageTitle }: Props) => {
    const styles = {
        background: `url(${bannerUrl})`
    }
    return (
        <>
            <div className="page-title light" style={styles}>
                <div className="container">
                    <div className="page-caption">
                        <h2>{ pageTitle }</h2>
                        <p><a href="#" title="Home">Home</a> <i className="ti-arrow-right"></i> {pageTitle}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppPageTitle;