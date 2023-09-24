import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import cookie from "cookie";


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}
const logOut = () => {
    document.cookie = cookie.serialize("loggedIn", null, {
        maxAge: 0,
    });
}

const Navigation = (props) => {

    return (
        <AppBar position="relative" color='primary'>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    New Braunfels Small Businesses
                </Typography>
                
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/business">LISTING</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add">ADD</Link>
                    </li>
                    {checkAuth() ? 
                        (<li className="nav-list-item">
                            <Link to="/login" onClick={() => {
                                logOut()
                                props.setUser(null)
                                }}>LOG OUT</Link>
                        </li>) 
                        : 
                        (<li className="nav-list-item">
                                <Link to="/login">LOG IN</Link>
                        </li>)} 
                </ul>

            </Toolbar>
        </AppBar>
    )
}

export default Navigation