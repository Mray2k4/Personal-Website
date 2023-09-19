import React from 'react'
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
        <h1>Personal Website</h1>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/about'> About</Link>
            <Link to='/skill'>Skills</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </nav>
  )
}
