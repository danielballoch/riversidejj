import * as React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Timetable from "../components/timetable"
import Memberships from "../components/memberships"
import Social from "../components/social.js"



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
    <Hero/>
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
