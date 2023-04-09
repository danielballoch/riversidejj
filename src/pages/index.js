import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Timetable from "../components/timetable"
import Memberships from "../components/memberships"
import Social from "../components/social.js"



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

export const Head = () => <title>No-Gi Jiu Jitsu Hamilton | Riverside Jiu Jitsu</title>
