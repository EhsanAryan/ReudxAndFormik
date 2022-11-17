import React, { Fragment } from "react";
import { FastField } from "formik";

const CustomRadio = (props) => {
    const {name , label , options} = props;

    return (
        <>
            <label htmlFor={name}>{label} :</label>
            <FastField name={name} id={name}>
                {({field}) => {
                    return options.map(option => {
                        return (
                            <Fragment key={option.id}>
                                <input type="radio" className="ms-3 me-1" id={option.id} {...field} value={option.value} 
                                checked={field.value === option.value} />
                                <label htmlFor={option.id}>{option.desc}</label>
                            </Fragment>
                        )
                    })
                }}
            </FastField>
        </>
    )
}

export default CustomRadio;