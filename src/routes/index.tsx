import React, { lazy } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
const Yanzhi = lazy(() => import ('@/pages/Yanzhi'))
const LOL = lazy(() => import ('@/pages/LOL'))
const Hotgame = lazy(() => import ('@/pages/Hotgame'))
const Search = lazy(() => import ('@/pages/Search'))

const RoutesConfig = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/yz" element={<Yanzhi />}/>
                <Route path="/LOL" element={<LOL />}/>
                {/* <Route path="/search" element={<Search />}/> */}
                <Route path="/rmyx" element={<Hotgame />}/>
            </Routes>
        </>
    )
}

export default RoutesConfig

  
