import { ErrorMessage, FastField } from "formik";
import React from "react";
import ShowError from "./ShowError";

const CustomTextarea = (props) => {
    const {name , placeholder , label} = props

    return (
        <>
            <label className="form-label" htmlFor={name}>{label}</label>
            <FastField className="form-control mb-1" placeholder={placeholder} id={name} name={name} component="textarea" />
            <ErrorMessage name={name} component={ShowError} />
        </>
    )
}

export default CustomTextarea;