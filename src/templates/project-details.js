import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styles from '../styles/details.css'

const ProjectDetails = () => {
  return (
    <Layout>
        <div className='details'>
            <h2>title</h2>
            <h3>stack</h3>
            <div className='featured'>
                {/* <Img fluid={} /> */}
            </div>
            {/* <div className='html' dangerouslySetInnerHTML={} /> */}
        </div>
    </Layout>
  )
}

export default ProjectDetails
