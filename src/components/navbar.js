import React from "react"
import styled from '@emotion/styled'

const Nav = styled.div`
position: absolute;
width: 100%;
height: 100px;
/* background-color: #2c2868; */
z-index: 100;
.nav-items {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    height: 100%;
    color: white;
    font-size: 18px;
    div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
        border-top: 20px solid rgba(0,0,0,0);
        :hover {
            cursor: pointer;
            border-top: 30px solid rgba(255,255,255,1);
            
        }
    }
    a {
        color: white;
        text-decoration: none;
    }
}
`

export default function Navbar(){
    return(
        <Nav>
            <div className="nav-items">
                <div><a href="#">Home</a></div>
                <div><a href="#timetable">Classes</a></div>
                <div><a href="#memberships">Sign Up</a></div>
                <div><a href="#">Contact</a></div>
            </div>
        </Nav>
    )
}