import * as React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.css'
import { Link, graphql } from "gatsby"
// import Img from 'gatsby-plugin-image'

export default function Home({data}) {
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
      {/* <Img fluid={data.file.childImageSharp.fluid}/> */}
    </section>
    </Layout>
  )
}

export const query = graphql `
query Computer {
  file(relativePath: {eq: "Black & Red Laptop.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`