import React from "react";

const ShowError = ({children}) => {
    return (
        <div className="mt-1 bg-light border border-danger rounded-pill text-danger text-center p-1">
            <i className="bi bi-exclamation-diamond-fill me-2 fs-5"></i>
            {children}
        </div>
    )
}

export default ShowError