import * as React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import Video from "../components/video"
import About from "../components/about"
import Timetable from "../components/timetable"
import Memberships from "../components/memberships"
import Social from "../components/social.js"
import LogoCover from "../images/cover.png"
import timetable from "../images/timetable.jpg"
import HeroVideo from "../videos/CraigJonesHero.mp4"

const Hero = styled.div`
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
`

const Wrapper = styled.div`
display: flex;
/* background-color: #292864; */
img {
    margin: auto;
}

`


const IndexPage = () => {
  return (
    <Layout>
    <Hero id="home">
        <Video videoSrcURL={HeroVideo} videoTitle="Riverside Hero Video"/>
        <div style={{
                    gridArea: "1/1",
                    position: "relative",
                    placeItems: "center",
                    display: "grid",
                    maxHeight: "100%"
                    }}>
            <img src={LogoCover}/>
        </div>
    </Hero>
    <About/>
    <Social/>
    <Timetable/>
    <Memberships/>
    <Social/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
