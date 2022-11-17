import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./StoreSection.css";


const StoreSection = () => {

    const [itemsCount , setItemsCount] = useState({
        sandwich : 1 ,
        pizza : 1 ,
        apple : 1 ,
        banana : 1 ,
        mango : 1
    })

    const {sandwich , pizza} = useSelector(state => state.food);
    const {apple , banana , mango} = useSelector(state => state.fruit);

    const dispatch = useDispatch();
    
    return (
        <>
            <div className='h1 text-center pt-3'>With Redux Hooks</div>
            <div className="parent-div">
                <div className="food-section">
                    <h1>Foods :</h1>
                    <div className="food-div">Sandwich : {sandwich}</div>
                    <div className="food-div">Pizza : {pizza}</div>
                </div>
                <div className="buy-food-section">
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => dispatch({type: "buy-sandwich" , payload : itemsCount.sandwich})}>
                            Buy Sandwich
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount" 
                        value={itemsCount.sandwich} onChange={(event) => setItemsCount({...itemsCount , sandwich : event.target.value})} />
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => dispatch({type: "buy-pizza" , payload : itemsCount.pizza})}>
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
                <diy className="buy-fruit-section">
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => dispatch({type: "buy-apple" , payload : itemsCount.apple})}>
                            Buy Apple
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount"
                        value={itemsCount.apple} onChange={(event) => setItemsCount({...itemsCount , apple : event.target.value})} />
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => dispatch({type: "buy-banana" , payload : itemsCount.banana})}>
                            Buy Banana
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount"
                        value={itemsCount.banana} onChange={(event) => setItemsCount({...itemsCount , banana : event.target.value})} />
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-dark" 
                        onClick={() => dispatch({type: "buy-mango" , payload : itemsCount.mango})}>
                            Buy Mango
                        </button>
                        <input type="number" min="1" className="form-control" placeholder="amount"
                        value={itemsCount.mango} onChange={(event) => setItemsCount({...itemsCount , mango : event.target.value})} />
                    </div>
                </diy>
            </div>
        </>
    );
}

export default StoreSection;