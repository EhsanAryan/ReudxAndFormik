
// "Main" component without hooks

import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./StoreSection.css";


const StoreSection2 = (props) => {

    const [itemsCount , setItemsCount] = useState({
        sandwich : 1 ,
        pizza : 1 ,
        apple : 1 ,
        banana : 1 ,
        mango : 1
    })

    const {sandwich , pizza , apple , banana , mango , buySandwich , buyPizza , buyApple , buyBanana , buyMango} = props;

    return (
        <>
            <div className='h1 text-center mt-3'>With Functions and connect HOC</div>
            <div className="parent-div">
                <div className="food-section">
                    <h1>Foods :</h1>
                    <div className="food-div">Sandwich : {sandwich}</div>
                    <div className="food-div">Pizza : {pizza}</div>
                </div>
                <div className="buy-food-section">
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => buySandwich(itemsCount.sandwich)}>
                            Buy Sandwich
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount" 
                        value={itemsCount.sandwich} onChange={(event) => setItemsCount({...itemsCount , sandwich : event.target.value})} />
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => buyPizza(itemsCount.pizza)}>
                            Buy Pizza
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount"
                        value={itemsCount.pizza} onChange={(event) => setItemsCount({...itemsCount , pizza : event.target.value})} />
                    </div>
                </div>
                <div className="fruit-section">
                    <h1>Fruits :</h1>
                    <div className="fruit-div">Apple : {apple}</div>
                    <div className="fruit-div">Banana : {banana}</div>
                    <div className="fruit-div">Mango : {mango}</div>
                </div>
                <div className="buy-fruit-section">
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => buyApple(itemsCount.apple)}>
                            Buy Apple
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount"
                        value={itemsCount.apple} onChange={(event) => setItemsCount({...itemsCount , apple : event.target.value})} />
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => buyBanana(itemsCount.banana)}>
                            Buy Banana
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount"
                        value={itemsCount.banana} onChange={(event) => setItemsCount({...itemsCount , banana : event.target.value})} />
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => buyMango(itemsCount.mango)}>
                            Buy Mango
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount"
                        value={itemsCount.mango} onChange={(event) => setItemsCount({...itemsCount , mango : event.target.value})} />
                    </div>
                </div>
            </div>
        </>
    );
}


const stateToProps = (state) => {
    return {
        sandwich : state.food.sandwich ,
        pizza : state.food.pizza ,
        apple : state.fruit.apple ,
        banana : state.fruit.banana ,
        mango : state.fruit.mango
    }
}

const dispatchToProps = (dispatch) => {
    return {
        buySandwich : (count) => dispatch({type : "buy-sandwich" , payload : count}) ,
        buyPizza : (count) => dispatch({type : "buy-pizza" , payload : count}) ,
        buyApple : (count) => dispatch({type : "buy-apple" , payload : count}) ,
        buyBanana : (count) => dispatch({type : "buy-banana" , payload : count}) ,
        buyMango : (count) => dispatch({type : "buy-mango" , payload : count})
    }
}


export default connect(stateToProps , dispatchToProps)(StoreSection2);