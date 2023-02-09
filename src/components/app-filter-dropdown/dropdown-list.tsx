import React from "react";

type Props = {
    label: string;
    amount: number
}

const DropdownList = ({ label, amount }: Props) => {
    return (
        <>
            <li>
                <span className="custom-checkbox">
                    <input type="checkbox" id="a" />
                    <label htmlFor="a"></label>
                </span>
                { label }
                <span className="pull-right">
                    { amount }
                </span>
            </li>
        </>

    )
}

export default DropdownList;