import foodReducer from "./food/foodReducer";
import fruitReducer from "./fruit/fruitReducer";
import usersReducer from "./users/usersReducer";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    food : foodReducer ,
    fruit : fruitReducer ,
    users : usersReducer
});

export default allReducers;