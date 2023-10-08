import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/projects.css'
import { Link, graphql } from 'gatsby'

export default function projects({data}) {
  // console.log(data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
    <div className='porfolio'>
        <h2>Projects</h2>
        <h3>My projects goes here!!!</h3>
        <br /><br /><br />
        <div className='projects'>
          {projects.map(project => (
            <Link to={'/projects' + project.frontmatter.path} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.lang}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
    </Layout>
  )
}

export const query = graphql `
query ProjectsPage {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        path
        lang
      }
      id
    }
  }
}
`