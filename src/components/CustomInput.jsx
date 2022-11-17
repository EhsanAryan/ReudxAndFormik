import { ErrorMessage, FastField } from "formik";
import React from "react";
import ShowError from "./ShowError";

const CustomInput = (props) => {
    const {type , name , placeholder , label} = props;

    return (
        <>
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField type={type} className="form-control" name={name} id={name} placeholder={placeholder} />
            <ErrorMessage name={name} component={ShowError} />
        </>
    )
}

export default CustomInput;