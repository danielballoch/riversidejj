import React from "react"
import styled from '@emotion/styled'
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
   height: 400px;
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
    }
        
    
    :last-of-type{

    h3 {
        margin-right: 40px;
    }
    
}
    
}
.footer-bottom {
    margin: auto;
    height: 50px;
    jusify-content: center;
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
                        <a href="/#home"><h3>Home</h3></a>
                        <a href="/#timetable"><h3>Classes</h3></a>
                        <a href="/#memberships"><h3>Memberships</h3></a>
                        <a href="/contact"><h3>Contact</h3></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <a href="/terms-and-conditions">Terms & Conditions</a>
                <a target="_blank" attribute href="https://www.thoughtfulhq.com/">Website Built by thoughtfulHQ</a>
            </div>
        </FooterWrapper>
    )
}