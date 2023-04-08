import * as React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"

const ContactWrapper = styled.div`
padding-top: 100px;
width: 900px;
margin: auto;
`



const ContactPage = () => {
  return (
    <Layout InvertNav={true}>
        <ContactWrapper>
            <h1>Contact</h1>
            <p>If you have any questions for the Riverside Jiu Jitsu team please email <a href="mailto:riversidejiiujitsu@gmail.com">riversidejiiujitsu@gmail.com</a>, follow <a href="https://www.instagram.com/riversidejj/" target="_blank">@riversidejj</a> on instagram and send us a message, or fill out the form below and we'll get back to you shortly!</p>
        </ContactWrapper>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Contact | Riverside Jiu Jitsu</title>