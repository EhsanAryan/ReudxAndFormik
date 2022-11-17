const foodState = {
    sandwich : 20 ,
    pizza : 10
}

const foodReducer = (prevState = foodState , action) => {
    switch (action.type) {
        case "buy-sandwich":
            if(action.payload <= prevState.sandwich) {
                return {...prevState , sandwich : prevState.sandwich - action.payload};
            }
            else {
                alert("The number of sandwiches is not enough!");
            }
            break;

        case "buy-pizza":
            if(action.payload <= prevState.pizza) {
                return {...prevState , pizza : prevState.pizza - action.payload};
            }
            else {
                alert("The number of pizzas is not enough!");
            }
            break;
        
        default:
            return prevState;
            break;
    }
}

export default foodReducer;