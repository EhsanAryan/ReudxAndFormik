const fruitState = {
    apple : 20 ,
    banana : 10 ,
    mango : 5
}

const fruitReducer = (prevState = fruitState , action) => {
    switch (action.type) {
        case "buy-apple":
            if(action.payload <= prevState.apple) {
                return {...prevState , apple : prevState.apple - action.payload};
            }
            else {
                alert("The number of apples is not enough!");
            }
            break;

        case "buy-banana":
            if(action.payload <= prevState.banana) {
                return {...prevState , banana : prevState.banana - action.payload};
            }
            else {
                alert("The number of bananas is not enough!");
            }
            break;

        case "buy-mango":
            if(action.payload <= prevState.mango) {
                return {...prevState , mango : prevState.mango - action.payload};
            }
            else {
                alert("The number of mangos is not enough!");
            }
            break;
    
        default:
            return prevState;
            break;
    }
}

export default fruitReducer;