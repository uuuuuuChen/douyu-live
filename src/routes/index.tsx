import React, { lazy, Suspense } from "react"
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
const Yanzhi = lazy(() => import ('@/pages/Yanzhi'))
const LOL = lazy(() => import ('@/pages/LOL'))
const Hotgame = lazy(() => import ('@/pages/Hotgame'))

export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/search" element={<Search />}></Route> */}
                <Route path="/yz" element={<Yanzhi />}></Route>
                <Route path="/LOL" element={<LOL />}></Route>
                <Route path="/rmyx" element={<Hotgame />}></Route>
            </Routes>
        </>
    )
}

  
