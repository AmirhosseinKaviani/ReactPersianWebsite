import React from 'react'
import './article.css'
import MyNavbar from '../../components/navbar/Navbar'
import { Link, Outlet } from 'react-router-dom'

const Article = () => {
  return (
    <div style={{textAlign: "center"}}>
      <MyNavbar/>
      <h1>صفحه مقالات</h1>
      <hr />
      <div className="btnContainer">
        <Link to='php' className='linkBtn'>php article</Link>
        <Link to='js' className='linkBtn'>js article</Link>
        <Link to='react' className='linkBtn'>react article</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Article
