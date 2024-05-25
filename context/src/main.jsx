import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/Counter.jsx'
import { Cartprovider } from './context/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Cartprovider>
        <App />
    </Cartprovider>
    
  
)
