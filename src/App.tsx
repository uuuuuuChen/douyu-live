import React, { useState,useEffect } from 'react'
import { GlobalStyle } from './style'
import Routes from '@/routes'

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Routes/>
        </div>
    )
}
export default App

