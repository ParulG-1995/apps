import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
class Page extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="headerMenu">
                        <a href="#"><NavLink to="/user">User</NavLink></a>
                        <a href="#"> <NavLink to="/">Sign-out</NavLink> </a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Page