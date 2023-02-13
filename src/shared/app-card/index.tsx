import React, { ReactNode } from "react";

type Props = {
    children: ReactNode,
    hasHeader: boolean,
    title?: string,
}

const AppCard = ({ children, title, hasHeader }: Props) => {
    return (
        <>
            <div className="detail-wrapper">
                {
                    hasHeader && !!title &&
                    <div className="detail-wrapper-header">
                        <h4>{title}</h4>
                    </div>
                }
                <div className="detail-wrapper-body">
                    { children }
                </div>
            </div>
        </>
    )
}
export default AppCard;