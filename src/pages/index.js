import * as React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.css'
import { Link } from "gatsby"

export default function Home() {
return (
    <Layout>
    <section className="header">
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Software Developer</p>
        <Link className='btn'to='/projects'>My Portfolio Projects</Link>
      </div>
      <img className='computer' src="/Computer Setup.png" alt="Laptop" />
    </section>
    </Layout>
  )
}

