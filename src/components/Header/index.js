import React from 'react'
import "./styles.scss"
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo"/>
                    </Link>
                </div>
            </div>
            <div className="callToActions">
                <ul>
                    <li>
                        <Link to="/registration">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
