import React from "react";
import "./MyForm.css";

const CustomFile = (props) => {
    const {name , formik , label , placeholder} = props;

    return (
        <div className="custom-container">
            <label htmlFor={name}>{label} : </label>
            <input type="text" className="file-view ms-3" placeholder={placeholder} disabled
            value={formik.values[name] ? formik.values[name].name : ""} />

            <input type="file" name={name} className="main-file-field" 
            onChange={(event) => {
                formik.setFieldValue(name , event.target.files[0])
                formik.setFieldTouched(name , true)
            }} />
            {formik.errors[name] && formik.touched[name] ? (
                <div className="mt-1 bg-light border border-danger rounded-pill text-danger text-center p-1 
                show-error">
                    <i className="bi bi-exclamation-diamond-fill me-2 fs-5"></i>
                    {formik.errors[name]}
                </div>
            ) : null}
        </div>
    )
}

export default CustomFile;