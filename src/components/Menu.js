import React from "react";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import './css/Menu.css'

function Menu(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-success">
            <div className="container">
                <NavLink className="navbar-brand fw-bolder fs-2" to={`/`} > Slider Navigation</NavLink>

                <div className="collapse navbar-collapse" id="menu">
                    {/* <MenuContainer className="menu"> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link fs-6 text-danger fw-bolder" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-6 text-danger fw-bolder" to={"/login"}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-6 text-danger fw-bolder" to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                    {/* </MenuContainer> */}
                </div>
            </div>
        </nav>
    )
}

// custom style component 
// // Sass 
// const MenuContainer = styled.div`{
//     .menu-link{
//         font-weight:bold;
//     }
// }`

export default Menu;