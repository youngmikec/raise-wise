import React from 'react';
import { SORT_TYPE } from '../../models';

type Props = {
    type: SORT_TYPE
}

const AppSortComp = ({ type }: Props) => {
    return (
        <>
            <div className="fl-right">
                <div className="search-wide">
                    <h5>Sort By</h5>
                </div>

                {
                    (type === SORT_TYPE.DATE || type === SORT_TYPE.ALL) &&
                    <div className="search-wide full">
                        <select className="wide form-control">
                            <option value="1">Most Recent</option>
                            <option value="2">Most Viewed</option>
                            <option value="4">Most Search</option>
                        </select>
                    </div>
                }

                {
                    (type === SORT_TYPE.PAGES || SORT_TYPE.ALL) &&
                    <div className="search-wide full">
                        <select className="wide form-control">
                            <option>10 Per Page</option>
                            <option value="1">20 Per Page</option>
                            <option value="2">30 Per Page</option>
                            <option value="4">50 Per Page</option>
                        </select>
                    </div>
                }
                
                
            </div>
        </>
    )
}

export default AppSortComp;