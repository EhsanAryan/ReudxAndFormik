import React from 'react'
import moment from 'moment-jalaali';
import { useState } from 'react';
import "./MyForm.css";
import { FastField } from 'formik';

const days = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31]
const months = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12]

const nowDate = moment();


const CustomDatePicker = (props) => {
    const {name , placeholder , label , formik} = props;
    
    const [day , setDay] = useState(nowDate.jDate())
    const [month , setMonth] = useState(nowDate.jMonth() + 1)
    const [year , setYear] = useState(nowDate.jYear())
    const [allYears , setAllYears] = useState([])
    const [showSelecbox , setShowSelectbox] = useState(false)

    const handleShowSelectboxes = () => {
        let allYearsArr = [];
        for(let newYear = year - 50 ; newYear <= year ; newYear++) {
            allYearsArr = [...allYearsArr , newYear];
        }
        setAllYears(allYearsArr);
        setShowSelectbox(true);
    }

    const handleHideSelectboxes = () => {
        formik.setValues({
            ...formik.values ,
            [name] : `${year} / ${month} / ${day}`
        });
        setShowSelectbox(false);
    }


  return (
    <div className="custom-container">
        <label htmlFor={name}>{label} : </label>
        <span onClick={handleShowSelectboxes}>
            <FastField type="text" className="custom-datepicker" name={name} id={name} placeholder={placeholder} 
            disabled />
        </span>

        {showSelecbox ? (
            <div className="selectboxes-parent row">

                <div className="selectbox-parent col-3">
                    <select className="date-selectbox" value={year} onChange={(event) => setYear(event.target.value)}>
                        {allYears.map(y => {
                            return (
                                <option key={`year_${y}`} value={y}>{y}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="selectbox-parent col-3">
                    <select className="date-selectbox" value={month} onChange={(event) => setMonth(event.target.value)}>
                        {months.map(m => {
                            return (
                                <option key={`month_${m}`} value={m}>{m}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="selectbox-parent col-3">
                    <select className="date-selectbox" value={day} onChange={(event) => setDay(event.target.value)}>
                        {days.map(d => {
                            return (
                                <option key={`day_${d}`} value={d}>{d}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-3">
                    <i className="bi bi-check-lg check-icon" onClick={() => {
                        handleHideSelectboxes();
                        formik.setFieldTouched(name , true);
                    }}></i>
                </div>
            </div>
        ) : null}

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

export default CustomDatePicker;
