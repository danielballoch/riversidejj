import React from "react"
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import logo from "../images/cover.png"

const FooterWrapper = styled.div`
width: 100%;
height: 100%;
/* background-color: #2c2868; */
z-index: 100;
background-color: #292864;
display: flex;
justify-content: center;
flex-direction: column;
img {
   max-width: 350px;
   width: 90%;
   margin: 0 20px;
}
.footer-main {
display: flex;
width: 100%;
max-width: 1200px;
margin: 0 auto;
align-items: center;
}
.footer-items {
    margin-left: 80px;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 18px;
    div {
        margin: 20px;
    }
    a {
        color: white;
        text-decoration: none;
    }
    :first-of-type {
        margin-top: -20px;
        margin-bottom: 20px;
    }
    div:nth-of-type(2){
        margin-left: 40px;
        justify-content: center;
    }
        
    :last-of-type{
        h3 {
            margin: 20px;
        }
    }
    
}
.footer-bottom {
    margin: auto;
    height: 50px;
    jusify-content: center;
    flex-wrap: wrap;
    a {
        margin: 20px;
        color: white;
        text-decoration: none;
    }
}
.footer-sub {
    display: flex;
    flex-direction: column;
}
@media(max-width: 1000px){
    .footer-main {
        flex-direction: column;
    }
    .footer-bottom {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        justify-content: center;
        /* flex-direction: column; */
    }
    .footer-sub {
        .footer-items {
            margin: 0 auto;
            display: flex;
            a {
                h3 {
                    margin: 0;
                }
            }
            div {
                max-width: 200px;
                width: 100%;
                /* width: 50%; */
            }
            :last-of-type {
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;
                margin: 40px 0;
                a {
                    padding: 10px;
                }
            }
        }
    }
}
`

export default function Footer(){
    return(
        <FooterWrapper>
            <div className="footer-main">
                <img src={logo}/>
                <div className="footer-sub">
                    <div className="footer-items">
                        <div>
                            <a href="#"><h3>Address:</h3></a>
                            <a href="#">3 Rawhiti Street, Frankton<br/>Hamilton, 3204<br/>New Zealand</a>
                        </div>
                        <div>
                            <a href="#"><h3>Open Hours:</h3></a>
                            <a href="#">Mon - Thur: 5.30 pm – 9:00 pm</a><br/>
                            <a href="#">Saturday: 10am (Confirmed weekly)</a>
                        </div>
                    </div>
                    <div className="footer-items">
                        <Link to="/#home"><h3>Home</h3></Link>
                        <Link to="/#timetable"><h3>Classes</h3></Link>
                        <Link to="/#memberships"><h3>Memberships</h3></Link>
                        <Link to="/contact#contact"><h3>Contact</h3></Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <Link to="/terms-and-conditions#terms">Terms & Conditions</Link>
                <a target="_blank" attribute href="https://www.thoughtfulhq.com/">Website Built by thoughtfulHQ</a>
            </div>
        </FooterWrapper>
    )
}