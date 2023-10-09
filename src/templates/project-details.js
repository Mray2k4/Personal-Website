import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styles from '../styles/details.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({data}) {
    const {html} = data.markdownRemark
    const {title, lang, feature} = data.markdownRemark.frontmatter
    
  return (
    <Layout>
        <div className='details'>
            <h2>{title}</h2>
            <h3>{lang}</h3>
            <div className='featured'>
                <Img fluid={feature.childImageSharp.fluid} />
            </div>
            <div className='html' dangerouslySetInnerHTML={{ __html: html}} />
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsDetails($paths: String) {
    markdownRemark(frontmatter: {paths: {eq: $paths}}) {
      html
      frontmatter {
        lang
        title
        feature {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }

`