import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'

export default function skill() {
  return (
    <Layout>
    <h2>Skills</h2>
    <br />
    <br />
    <ul>
      <li className='html'>HTML</li>
      <li className='css'>CSS</li>
      <li className='java'>Javascript</li>
      <li className='react'>React</li>
      <li className='git'>Github</li>
      <li className='boot'>Bootstrap</li>
      <li className='bash'>Bash</li>
      <li className='post'>Postman</li>
      <li className='hero'>Heroku</li>
      <li className='gats'>Gatsby</li>
    </ul>
    </Layout>
  )
}
