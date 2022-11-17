import React from 'react';
import { Routes , Route } from 'react-router-dom';
import StoreSection from './StoreSection';
// import StoreSection2 from './StoreSection2';
import Users from './Users';
import MyForm from './MyForm';
import Login from "./Login"
import "./Main.css";


const Main = () => {

    return (
        <div className="div-parent">
            <Routes>
                <Route path="/" element={<StoreSection />} />
                <Route path="/shop" element={<StoreSection />} />
                <Route path="/users" element={<Users />} />
                <Route path="/form" element={<MyForm />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default Main;