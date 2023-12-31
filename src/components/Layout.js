import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import '../styles/custom.css'

export default function Layout({children}) {
  return (
    <div className="layout">
        <Navbar/>
        <div className="content">
            {children}
        </div>
        <footer className='footer'>
            <p>Copyright 2023 Personal Website</p>
        </footer>
    </div>
  )
}
