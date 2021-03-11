import React from 'react'
import './styles/Sidebar.css'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__main">
                <Link to='/home'><img className="home__image" src={'https://www.flaticon.com/svg/vstatic/svg/69/69524.svg?token=exp=1615462569~hmac=6fc28a4e1010517a2dcd8048966d09a0'}/>           <h3 className="h3" >Home</h3></Link>
                <Link to='/youtube'><img className="youtube__image" src={'https://www.flaticon.com/svg/vstatic/svg/1383/1383260.svg?token=exp=1615462716~hmac=c47e362feea3be39592d5b7ad26695b9'} /><h3 className="h3" >YouTube</h3></Link>
                <Link to='/about'><img className="about__image" src={"https://www.flaticon.com/svg/vstatic/svg/38/38923.svg?token=exp=1615462815~hmac=944703b9372780d2c540b9ab5edbc134"} />        <h3 className="h3" >About</h3></Link>
            </div>
        </div>
    )
}

export default SideBar
