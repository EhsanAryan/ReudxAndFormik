import React from "react";
import { useSelector , useDispatch } from "react-redux";
import "./Users.css";
import usersDispatch from "../Redux/users/usersDispatch";
import moment from "moment-jalaali";

const Users = () => {

    const {loading , data , error} = useSelector(state => state.users);
    const dispatch = useDispatch();


    const getUsersHandler = () => {
        dispatch(usersDispatch());
    }

    const now = moment();

    return (
        <div className="pt-5">
            <div className="mt-2 mb-5 text-center fs-4">
                {/* {now.format("YYYY/MM/DD")} Miladi <br /> */}
                {`${now.jYear()} / ${now.jMonth() + 1} / ${now.jDate()}`}
            </div>

            <div className="text-center">
                <button type="button" className="btn btn-outline-dark btn-lg"
                onClick={getUsersHandler}>
                    Get Users
                </button>
            </div>

            {loading ? (
                <div className="text-center mt-5">
                    <div className="spinner-border text-dark">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : data.length > 0 ? (
                <ul className="text-center mt-5 list-unstyled">
                    {data.map(user => {
                        return <li key={user.id} className="my-2 fs-4">{user.id} - {user.username}</li>
                    })}
                </ul>
            ) : error ? (
                <h1 className="my-4 text-center">Something is wrong with API connection!</h1>
            ) : (
                <div className="fs-2 text-center mt-5 px-4">You can get the users by clicking on the button above.</div>
            )}
        </div>
    );
}

export default Users;