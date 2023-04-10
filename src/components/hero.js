import * as React from "react"
import styled from '@emotion/styled'
import Video from "../components/video"
import LogoCover from "../images/cover.png"
import HeroVideo from "../videos/CraigJonesHero.mp4"

const HeroWrapper = styled.div`
display: grid;
max-height: 90vh;
flex-direction: column;
background-color: black;
div {
    /* max-height: 100vh; */
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    opacity: 1;
    img {
        mix-blend-mode: lighten;
        z-index: 10;
        opacity: 1;
        max-height: 90vh;
        /* width: 100%; */
    }
}
@media(max-width: 900px){
    div {
        height: 80vh;
        img {
            max-width: 90%;
        }
    }
}
`

export default function Hero(){
    return(
        <HeroWrapper id="home">
        <Video videoSrcURL={HeroVideo} videoTitle="Riverside Hero Video"/>
        <div style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    maxHeight: "100%"
                    }}>
            <img src={LogoCover} alt="Riverside Jiu Jitsu Logo"/>
        </div>
    </HeroWrapper>
    )
}
