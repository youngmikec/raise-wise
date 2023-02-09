import React from "react";

type Props = {
    tag: string;
}

const AppTag = ({tag}: Props) => {
    return (
        <>
            <a className="tag-job" href="#">{tag}</a>
        </>
    )
}
export default AppTag;