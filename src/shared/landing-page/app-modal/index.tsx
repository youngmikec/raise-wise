import React, { ReactNode } from "react";

type Props = {
    display: boolean,
    children: ReactNode
}

const AppModal = ({children, display}: Props) => {
    
    return (
        <>
            <div className={`modal ${ display ? 'fade in' : 'fade'}`} 
                style={{display: `${display ? 'block' : 'none'}`}} id="signin" tabIndex={-1} 
                role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content" id="myModalLabel1">
                        <div className="modal-body">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppModal;