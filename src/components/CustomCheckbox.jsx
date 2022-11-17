import React, { Fragment } from "react";
import { FastField } from "formik";

const CustomCheckbox = (props) => {
    const {name , label , options} = props;

    return (
        <>
            {label ? <label htmlFor={name}>{label} :</label> : null}
            <FastField name={name} id={name}>
                {({field}) => {
                    return options.map(option => {
                        return (
                            <Fragment key={option.id}>
                                <input type="checkbox" className={`${label ? "ms-3" : null} me-2`} id={option.id} {...field} value={option.value} 
                                checked={field.value.includes(option.value)} />
                                <label htmlFor={option.id}>{option.desc}</label>
                            </Fragment>
                        )
                    })
                }}
            </FastField>
        </>
    )
}

export default CustomCheckbox;