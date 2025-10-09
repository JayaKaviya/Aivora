import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="203031151959-pq4kfm9t53vthsg42d3mfp6g0m906qv9.apps.googleusercontent.com">
              <App />
    </GoogleOAuthProvider>
  </StrictMode>
)
