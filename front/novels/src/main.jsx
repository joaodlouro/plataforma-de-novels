import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/loginComponent/App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId=" ">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
