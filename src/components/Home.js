import React from 'react'
import cookie from 'cookie'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Home = (props) => {
    return (
        <div >
            {checkAuth() ? (
            <h2> You are now logged in,
                <br/> {props.user.username}!
                <br/>
                <br/>Please click on the "Listing" link in the above Menu
                <br/>to view & edit a list of businesses in New Braunfels, Texas.
            </h2>) : 
            (<h2>Hello! Please log in.</h2>)}
        </div>
    )
}

export default Home