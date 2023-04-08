import React from "react"
import styled from '@emotion/styled'
import GymBackground from "../images/full-gym.jpg"

const AboutWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
z-index: 100;
text-align: center;
background-color: black;
background: linear-gradient(0deg, rgba(41, 40, 100, 0.9), rgba(41, 40, 100, 0.9)), url(${GymBackground});
/* background-position: center; */
background-repeat: repeat; 
background-size: 50vw;
.content {
    background-color: rgba(255,255,255,1);
    padding: 100px 30px;
    max-width: 47vw;
    height: 100%;
    margin: auto;
    h1 {
        font-size: 50px;
        color: #111;
    }
    p {
        font-size: 16px;
        color: #111;
        line-height: 24px;
    }
}
@media(max-width: 900px){
    .content {
        h1 {
            font-size: 40px;
        }
    }
}
@media(max-width: 750px){
    .content {
        max-width: 80%;
        margin: 20px auto;
        padding: 20px;
    }
}
`


export default function About(){
    return(
        <AboutWrapper id="about">
            <div className="content">
                <h1>No-Gi Brazillian Jiu Jitsu Hamilton New Zealand</h1>
                <p>Are you looking to improve your fitness, gain self-confidence, and learn self-defense skills? <br/>Look no further than Riverside Jiu Jitsu!</p>
                <p>At our gym, we offer top-notch instruction from experienced and highly skilled trainers. Our curriculum is designed to cater to students of all skill levels, from beginners to advanced practitioners. Whether you are looking to compete or simply want to improve your fitness, we have something for you.</p>
                <p>We believe in creating a welcoming and inclusive environment where everyone can feel comfortable and supported in their journey towards mastery. Our community is made up of individuals from all walks of life who share a passion for Jiu Jitsu and a commitment to personal growth.</p>
                <p>Join us in our new facility, equipped with everything you need to achieve your fitness and martial arts goals. Whether you are looking to get in shape, learn a new skill, or make new friends, we have everything you need to succeed. Come down to 3 Rawhiti Street, Frankton Hamilton at 5:30 or 6 Monday-Thursday and start your free trial at Hamiltons local Jiu Jitsu club!</p>
            </div>
        </AboutWrapper>
    )
}