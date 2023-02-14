import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    headers: string[];
}

const AppTable = ({ children, headers }: Props) => {
    return (
        <>
            <div className="table-responsive"> 
                <table className="table table-lg table-hover">
                    <thead>
                        <tr>
                            {
                                headers.length > 0 ? 
                                headers.map((item: string, idx: number) => {
                                    return ( 
                                        <th key={idx}>{item}</th>
                                    )
                                }) :
                                <th>No headers found</th>

                            }
                        </tr>
                    </thead>
                    
                    <tbody>
                        { children }
                    </tbody>
                </table>
                
                {/* <!-- flexbox --> */}
                <div className="flexbox padd-10">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- /.flexbox --> */}
        
            </div>
        </>
    )
}

export default AppTable;