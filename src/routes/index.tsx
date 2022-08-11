import React, { lazy } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
const Yanzhi = lazy(() => import ('@/pages/Yanzhi'))
const LOL = lazy(() => import ('@/pages/LOL'))
const WZ = lazy(() => import ('@/pages/WZ'))
const Hotgame = lazy(() => import ('@/pages/Hotgame'))
const Room = lazy(() => import ('@/pages/Room'))
const Search = lazy(() => import ('@/pages/Search'))

const RoutesConfig = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/yz" element={<Yanzhi />}/>
                <Route path="/LOL" element={<LOL />}/>
                <Route path="/wzry" element={<WZ />}/>
                <Route path="/room:id" element={<Room />}/>
                {/* <Route path="/search" element={<Search />}/> */}
                <Route path="/rmyx" element={<Hotgame />}/>
            </Routes>
        </>
    )
}

export default RoutesConfig

  
