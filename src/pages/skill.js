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
      {/* <li className='html'><i className='h'>HTML</i></li>
      <li className='css'>CSS</li>
      <li className='java'>Javascript</li>
      <li className='react'>React</li>
      <li className='git'>Github</li>
      <li className='boot'>Bootstrap</li>
      <li className='bash'>Bash</li>
      <li className='post'>Postman</li>
      <li className='hero'>Heroku</li> */}

      <div className='container'>
        <div className='flexbox'>
        <img src="/HTML.png" alt="" />
        </div>
        <div className='s'>
       <p>HTML</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/CSS.png" alt="" />
        </div>
        <div className='s'>
       <p>CSS</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/JS.png" alt="" />
        </div>
        <div className='s'>
       <p>Javascript</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/REACT.png" alt="" />
        </div>
        <div className='s'>
       <p>React</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/GIT.png" alt="" />
        </div>
        <div className='s'>
       <p>Github</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/BASH.png" alt="" />
        </div>
        <div className='s'>
       <p>Bash</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/POST.png" alt="" />
        </div>
        <div className='s'>
       <p>Postman</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/HERO.png" alt="" />
        </div>
        <div className='s'>
       <p>Heroku</p>
       </div>
        </div>

      <div className='container'>
        <div className='flexbox'>
        <img src="/GATS.png" alt="" />
        </div>
        <div className='s'>
       <p>Gatsby</p>
       </div>
        </div>
    </ul>
    </Layout>
  )
}
