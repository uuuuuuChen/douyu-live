import React, { useState,useEffect,Suspense } from 'react'
import { GlobalStyle } from './style'
import Routes from '@/routes'
import './App.css'
import Header from './components/Header'

const App = () => {
    return (
        <div className="App" style={{height:"100%"}}>
            <GlobalStyle />
            <Header/>
            <div className='content'>
            <Suspense fallback={<></>}>
              <Routes/> 
            </Suspense>
            </div>
        </div>
    )
}
export default App

