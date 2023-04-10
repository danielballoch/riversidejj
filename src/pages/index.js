import React, { useEffect} from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Timetable from "../components/timetable"
import Memberships from "../components/memberships"
import Social from "../components/social.js"



const IndexPage = ({location}) => {
    
    useEffect(()=> {
        const timetable = document.getElementById("timetable");
        const memberships = document.getElementById("memberships");
        const home = document.getElementById("home");
        setTimeout(()=>{
            if(location.state && location.state.to === "#timetable"){
                timetable.scrollIntoView()
                // timetableRef.current.scrollIntoView()
            } else if (location.state && location.state.to === "#memberships"){
                memberships.scrollIntoView()
            } else if (location.state && location.state.to === "#home"){
                home.scrollIntoView()
            }
        },
            100
        )
        
    })

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
