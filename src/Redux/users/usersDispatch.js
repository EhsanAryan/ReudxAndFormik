import axios from "axios";


const usersDispatch = () => {
    return (dispatch) => {
        dispatch({type : "send-users-request"});

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            dispatch({type : "get-users-response" , payload : response.data});
        })
        .catch(error => {
            dispatch({type : "get-users-error" , payload : error.message});
        });
    }
}

export default usersDispatch;