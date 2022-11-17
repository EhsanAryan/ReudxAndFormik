import { FastField } from "formik";
import React from "react";
import "./MyForm.css";

const CustomSelectBox = (props) => {
    const {type , name , label , options} = props;

    return (
        <>
            <label htmlFor={name} className="me-3">{label}</label>
            <FastField name={name} id={name} className="custom-selectbox" as="select">
                {options.map(option => {
                    return (
                        <option key={option.id} value={option.id}>{option.value}</option>
                    )
                })}
            </FastField>
        </>
    )
}

export default CustomSelectBox;