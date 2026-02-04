import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import './src/styles.css'

const rootEl = document.getElementById('root')
const root = createRoot(rootEl)
root.render(<App />)
