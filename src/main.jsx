import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-eznxpp0e8k3w2tkj.us.auth0.com"
    clientId="NjoEqFCcRbQtdTe1bedJzamwXVMp4Bj4"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/" 
    
    }}
  >
    <App />

    </Auth0Provider>
  </React.StrictMode>,
)
