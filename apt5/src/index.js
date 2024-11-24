import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app'
import './components/app.css'
import './components/image.css'

const root = createRoot(document.getElementById('root'));
root.render(<App />);