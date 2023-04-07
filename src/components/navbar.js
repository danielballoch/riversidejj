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
.invert {
        background-color: white;
        color: black;
        div {
            a {
                color: black;
                transition: .3s;
            }
            :hover {
                cursor: pointer;
                border-top: 30px solid rgba(41, 40, 100,1);
                a {
                    color: rgb(41, 40, 100);
                }
            }
        }
       
    }
`

export default function Navbar({invert}){
    console.log(invert)
    return(
        <Nav>
            <div className={invert? "nav-items invert" : "nav-items"}>
                <div><a href="/#home">Home</a></div>
                <div><a href="/#timetable">Classes</a></div>
                <div><a href="/#memberships">Sign Up</a></div>
                <div><a href="/contact">Contact</a></div>
            </div>
        </Nav>
    )
}