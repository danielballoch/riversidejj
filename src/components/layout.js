import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import styled from '@emotion/styled'

const Wrapper = styled.div`
margin: 0;
padding: 0;
font-family: 'helvetica', sans-serif; 
`

export default function Layout({ children }) {
  return (
    <Wrapper>
        <Navbar/>
        {children}
        <Footer/>
    </Wrapper>
  )
}