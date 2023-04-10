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
        setTimeout(()=>{
            if(location.state && location.state.from === "#timetable"){
                timetable.scrollIntoView()
                // timetableRef.current.scrollIntoView()
            } else if (location.state && location.state.from === "#memberships"){
                memberships.scrollIntoView()
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
