import React from 'react'
import './styles/Sidebar.css'
import { Link } from 'react-router-dom'
import home from '../images/home.png'
import youtube_red from '../images/youtube_red.png'
import question from '../images/question.png'
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__main">
                <Link to='/home'><img className="home__image" src={home}/>           <h3 className="h3" >Home</h3></Link>
                <Link to='/youtube'><img className="youtube__image" src={youtube_red} /><h3 className="h3" >YouTube</h3></Link>
                <Link to='/about'><img className="about__image" src={question} />        <h3 className="h3" >About</h3></Link>
            </div>
        </div>
    )
}

export default SideBar
