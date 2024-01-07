import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // const [loggedIn, setLoggedIn] = useState(false)

    // useEffect(() => {
    //     let token = localStorage.getItem('token')
    //     if (!token) {
    //         setLoggedIn(false);
    //     } else {
    //         setLoggedIn(true);
    //     }
    // }, [loggedIn])

    // const logoutHandler = () => {
    //     localStorage.clear
    //     setLoggedIn(false);
    // }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Goodreads</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">

                        {/* {
                            loggedIn ? (
                                <Link className="btn btn-danger" onClick={logoutHandler}>Logout</Link>
                            ) : (
                                <Link to='/login' className="btn btn-primary">LogIn</Link>
                            )
                        } */}
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar;