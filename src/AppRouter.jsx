import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {Header} from "../src/Components/Header";
import {Home, DetailPoke, Find} from "../src/pages";

export const AppRouter = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='pokemon/:id' element={<DetailPoke/>}/>
                <Route path='search' element={<Find/>}/>
            </Route>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    )
}