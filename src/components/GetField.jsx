import React from "react";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomRadio from "./CustomRadio";
import CustomSelectBox from "./CustomSelectBox";
import CustomTextarea from "./CustomTextarea";
import CustomDatePicker from "./CustomDatePicker";
import CustomFile from "./CustomFile";

const GetField = (props) => {
    const {control} = props;

    switch (control) {
        case "input":
                return (
                    <>
                        <CustomInput {...props} />
                    </>
                )
            break;
        
        case "textarea" :
            return (
                <>
                    <CustomTextarea {...props} />
                </>
            )
            break;
        
        case "select" :
            return (
                <CustomSelectBox {...props} />
            )
            break;

        case "radio" :
            return (
                <CustomRadio {...props} />
            )
            break;

        case "checkbox" :
            return (
                <CustomCheckbox {...props} />
            )
            break;

        case "datepicker" :
            return (
                <CustomDatePicker {...props} />
            )
            break;

        case "file" :
            return (
                <CustomFile {...props} />
            )
            break;

        default:
            return null;
            break;
    }

}

export default GetField;