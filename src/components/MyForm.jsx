import React from "react";
import "./MyForm.css";
import { Formik , Form } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { useState } from "react";
import { useEffect } from "react";
import GetField from "./GetField";


const ageOptions = [
    {value: "Less than 18" , id: "lt18"} ,
    {value: "18-29" , id: "18_29"} ,
    {value: "30-50" , id: "30_50"} ,
    {value : "Greater than 50" , id: "gt50"}
]

const genderOptions = [
    {value: "unknown" , id: "gender_unknown" , desc: "Unknown"} ,
    {value: "male" , id: "gender_male" , desc: "Male"} ,
    {value: "female" , id: "gender_female" , desc: "Female"}
]

const skillOptions = [
    {value: "HTML" , id: "skill_1" , desc: "HTML"} ,
    {value: "CSS" , id: "skill_2" , desc: "CSS"} ,
    {value: "JS" , id: "skill_3" , desc: "JavaScript"} ,
    {value: "ReactJS" , id: "skill_4" , desc: "React.JS"}
]


const initialValues = {
    name : "" ,
    password : "" ,
    email : "" ,
    bio : "" ,
    ageRange: "18_29",
    gender : "" ,
    skills: [] ,
    date: "" ,
    img : null
}

const onSubmit = (values , submitProps) => {
    swal({
        title : "Info" ,
        text : `Name: ${values.name}\nPassword: ${values.password}\nEmail: ${values.email}` ,
        icon : "info"
    })
    submitProps.setSubmitting(false);
    submitProps.resetForm();
}

const validationSchema = Yup.object({
    name : Yup.string().required("Fill the input field!").min(4 , "The name must have at least 4 characters!") ,
    password : Yup.string().required("Fill the input field!").min(10 , "The password must have at least 10 characters!") ,
    email : Yup.string().required("Fill the input field!").email("incorrect format! Email foramt must be Like:\nemail@example.com") ,
    bio : Yup.string().required("Fill the input field!").max(60 , "The biography must have a maximum of 60 characters!") , 
    date : Yup.string().required("Please specify your birth date!") ,
    img : Yup.mixed()
    .required("Pick up an avatar image!")
    .test("filesize" , "The maximum size for image is 300KB!" , value => value && value.size <= (300 * 1024))
    .test("format" , "Please choose an image with JPG format!" , value => value && value.type === "image/jpeg")
})


const MyForm = () => {
    const [savedData , setSavedData] = useState(null);
    const [myValues , setMyValues] = useState(null);

    useEffect(() => {
        if(localStorage.getItem("savedData")) {
            setSavedData(JSON.parse(localStorage.getItem("savedData")));
        }
    }, []);

    const handleSaveData = (formik) => {
        localStorage.setItem("savedData" , JSON.stringify(formik.values))
    }

    const handleGetData = () => {
        setMyValues(savedData);
    }

    return (
        <div className="pt-1">
            <Formik
            initialValues={myValues || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnMount
            enableReinitialize
            >
                {formik => {
                    return(
                        <div className="myForm-parent">
                            <Form className="myForm row w-50 mx-auto my-5 p-2 rounded-4">
                                <h2 className="col-12 text-center title mt-1">Register</h2>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="input" 
                                    type="text" 
                                    name="name" 
                                    label="Full name" 
                                    placeholder="Name"
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="input" 
                                    type="password" 
                                    name="password" 
                                    label="Password" 
                                    placeholder="Password"
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="input" 
                                    type="email" 
                                    name="email" 
                                    label="Email" 
                                    placeholder="Email"
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="textarea" 
                                    name="bio" 
                                    label="Biography" 
                                    placeholder="Biography"
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="select" 
                                    name="ageRange" 
                                    label="Age range" 
                                    options={ageOptions}
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="datepicker" 
                                    name="date"
                                    label="Birth Date"
                                    placeholder="Birth date"
                                    formik={formik}
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="file" 
                                    name="img"
                                    label="Avatar"
                                    placeholder="Choose Avatar Image..."
                                    formik={formik}
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="radio" 
                                    name="gender" 
                                    label="Gender" 
                                    options={genderOptions}
                                    />
                                </div>
                                <div className="col-12 my-3">
                                    <GetField 
                                    control="checkbox" 
                                    name="skills" 
                                    label="Skills" 
                                    options={skillOptions}
                                    />
                                </div>
                                <div className="mt-4 mb-2 text-center">
                                        <button type="submit" className="btn btn-light border-dark btn-lg" 
                                        disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}>
                                            Submit
                                        </button>
                                        <button type="reset" className="btn btn-dark border-light btn-lg ms-3">
                                            Reset
                                        </button>
                                        {formik.isValid && formik.dirty ? (
                                            <button type="button" className="btn btn-warning border-dark btn-lg ms-3"
                                            onClick={() => handleSaveData(formik)}>
                                                Save Data
                                            </button>
                                        ) : null}
                                        {savedData ? (
                                            <button type="button" className="btn btn-danger border-dark btn-lg ms-3"
                                            onClick={handleGetData}>
                                                Get Data
                                            </button>
                                        ) : null}
                                </div>
                            </Form>
                        </div>
                    )
                }}
            </Formik>
        </div>
    );
}

export default MyForm;