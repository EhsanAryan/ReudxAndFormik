import React from "react";
import "./Login.css";
import { Formik , Form } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import GetField from "./GetField";
import { Link } from "react-router-dom";


const initialValues = {
    username : "" ,
    password : "" ,
    remember : []
}

const onSubmit = (values , submitProps) => {
    swal({
        title: "Done" ,
        text : `username : ${values.username} \n password : ${values.password}` ,
        icon : "success" ,
        button: "OK"
    })
    submitProps.resetForm()
}

const validationSchema = Yup.object({
    username : Yup.string().required("Fill the field!").matches(/[0-9]/ , "The username must contain at least a number!") ,
    password : Yup.string().required("Fill the field!").min(8 , "The password must be longer than 7 characters!").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/ , "The password must contain at least an uppercase character and a number and a symbol!")
})

const Login = () => {
    return (
        <div className="form-container">
            <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                {formik => {
                    return (
                        <Form className="loginForm w-75 mx-auto rounded-3 p-3 row">
                            <div className="col-6 flex-column d-flex justify-content-center align-items-center text-center fs-3">
                                <div>
                                    <i className="bi bi-person-circle large-icon"></i>
                                </div>
                                <div>
                                    Welcome!
                                </div>
                            </div>
                            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                                <div className="my-3 w-100">
                                    <GetField 
                                    control="input"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    label="Username"
                                    />
                                </div>
                                <div className="mt-3 w-100">
                                    <GetField 
                                    control="input"
                                    type="text"
                                    name="password"
                                    placeholder="Password"
                                    label="Password"
                                    />
                                </div>
                                <div className="mt-3 w-100">
                                    <GetField 
                                    control="checkbox"
                                    name="remember"
                                    options={[{value: "rememberMe" , id: "remember_checkbox" , desc: "Remember me."}]}
                                    />
                                </div>
                                <div className="mt-4 w-100">
                                    <a><Link to="/form">I have not registered yet.</Link></a>
                                </div>
                                <div className="text-center mt-4 mb-2">
                                    <button type="submit" className="btn btn-success btn-lg">Submit</button>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Login;