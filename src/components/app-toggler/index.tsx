import React from 'react';

type Props = {
    tabs: string[]
}

const AppToggler = ({ tabs }: Props) => {
    return (
        <>
            {/* <!-- Nav tabs --> */}
			<ul className="nav nav-tabs nav-advance theme-bg" role="tablist">
                {
                    tabs.length > 0 && 
                    tabs.map((item: string, idx: number) => {
                        return <li className="nav-item active" key={idx}>
                                    <a className="nav-link" data-toggle="tab" href="#recent" role="tab">
                                        { item }
                                    </a>
                                </li>
                    })
                }
			</ul>
        </>
    )
}

export default AppToggler;