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
`


export default function Social({blue}){ 
    return(
        <Marquee>
            <SocialWrapper className={blue? "blue": "blue"}>
                <div>
                    <h1>Follow <a href="https://www.instagram.com/riversidejj/">@riversidejj</a> on Instagram</h1>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
                <div>
                    <h1>Follow <a href="https://www.instagram.com/riversidejj/">@riversidejj</a> on Instagram</h1>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
                <div>
                    <h1>Follow <a href="https://www.instagram.com/riversidejj/">@riversidejj</a> on Instagram</h1>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
                <div>
                    <h1>Follow <a href="https://www.instagram.com/riversidejj/">@riversidejj</a> on Instagram</h1>
                    <p>Open Mat Confirmations, Gym Updates & BJJ Content</p>
                </div>
                <span/>
            </SocialWrapper>
        </Marquee>
    )
}