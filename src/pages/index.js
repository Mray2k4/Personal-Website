import * as React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.css'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

export default function Home({data}) {

  console.log(data)
return (
    <Layout>
    <section className="header">
      <div>
        <h2>A Fullstack</h2>
        <h3>Software Developer</h3>
        <p>Design, Develop & Deploy</p>
        <Link className='btn'to='/projects'>My Portfolio Projects</Link>
      </div>
      {/* <img className='computer' src="/Computer Setup.png" alt="Laptop" /> */}
      <Img fluid={data.file.childImageSharp.fluid}/>
    </section>
    </Layout>
  )
}

export const query = graphql `
query Computer {
  file(relativePath: {eq: "Computer Setup.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`