const usersState = {
    loading : false , 
    data : [] ,
    error : ""
}

const reducer = (prevState = usersState , action) => {
    switch (action.type) {
        case "send-users-request":
            return {...prevState , loading : true}
            break;
    
        case "get-users-response":
            return {loading : false , data : action.payload , error : ""}
            break;

        case "get-users-error":
            return {loading : false , data : [] , error : action.payload}
            break;
        
        default:
            return prevState;
            break;
    }
}

export default reducer;