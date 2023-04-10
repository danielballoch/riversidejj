import React from "react"
import styled from '@emotion/styled'
import Marquee from "react-fast-marquee";


const SocialWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
z-index: 100;
.blue {
    background-color: blue;
}
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
    color: #222222;
    h2 {
        font-size: 30px;
    }
    h2,p {
        margin: 10px;
    }
    a {
        color: #292864;
        text-decoration: none;
        transition: .3s;
    }
    :hover {
        cursor: pointer;
        a {
            color: pink;
        }
    }
}
span {
    background-color: #222222;
    width: 40px;
    height: 10px;
}
@media(max-width: 750px){
    div {
        width: 180px;
        padding: 20px 0;
        h2 {
            font-size: 25px;
            margin: 0;
        }
        p {
            margin: 5px 0;
        }
    }
    span {
        width: 30px;
        margin: 5px;
        opacity: 0;
    }
    
}
`


export default function Social(){ 
    return(
        <Marquee>
            <SocialWrapper>
                <div>
                    <h2>Follow <a href="https://www.instagram.com/riversidejj/" target="_blank">@riversidejj</a> on Instagram</h2>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
                <div>
                    <h2>Follow <a href="https://www.instagram.com/riversidejj/" target="_blank">@riversidejj</a> on Instagram</h2>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
                <div>
                    <h2>Follow <a href="https://www.instagram.com/riversidejj/" target="_blank">@riversidejj</a> on Instagram</h2>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
                <div>
                    <h2>Follow <a href="https://www.instagram.com/riversidejj/" target="_blank">@riversidejj</a> on Instagram</h2>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
            </SocialWrapper>
        </Marquee>
    )
}