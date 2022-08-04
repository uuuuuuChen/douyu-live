import React, { lazy,Suspense } from 'react'
import { GlobalStyle } from './style'
import { Routes, Route, useLocation } from 'react-router-dom'
import RoutesConfig from '@/routes'
import './App.css'
import Header from './components/Header'
const Search = lazy(() => import ('@/pages/Search'))


const App = () => {
    const { pathname } = useLocation()
    return (
        <div className="App" style={{height:"100%"}}>
            <Suspense fallback={<></>}>
            <Routes>
                <Route path="/search" element={<Search />}/>
            </Routes>
            </Suspense>
            <GlobalStyle />
            { pathname == '/search' ? '' : <Header/> }
            <div className='content'>
            <Suspense fallback={<></>}>
              <RoutesConfig/> 
            </Suspense>
            </div>
        </div>
    )
}
export default App

