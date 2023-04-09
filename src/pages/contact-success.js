import * as React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import { Link } from "gatsby"

const ContactSuccessWrapper = styled.div`
background-color: #e4e4e4;
display: flex;
flex-direction: column;
padding-top: 200px;
margin: auto;
h1{
    font-size: 60px;
    color: white;
} 
a {
    color: pink;
    text-decoration: none;
}
hr {
    color: white;
    margin-bottom: 40px;
}

div {
    max-width: 900px;
    width: 100%;
    min-height: 300px;
    margin: auto;
    background-color: #292864;
    border-radius: 5px;
    padding: 20px 20px;
    margin-bottom: 140px;
    p {
        color: white;
    }
}
`

  


const ContactSuccessPage = () => {
  return (
    <Layout InvertNav={true}>
        <ContactSuccessWrapper id="contact-success">
            <div>
                <h1>Your Message Has Been Sent!</h1>
                <p>If you have any other questions for the Riverside Jiu Jitsu team please email: <a href="mailto:riversidejiiujitsu@gmail.com" target="_blank">riversidejiiujitsu@gmail.com</a>, follow <a href="https://www.instagram.com/riversidejj/" target="_blank">@riversidejj</a> on Instagram and send us a message, or fill out the form on the <Link to="/contact">contact page</Link>.</p>
                <hr/>
                <p>Thanks for getting in touch! We'll get back to you as soon as possible.</p>
            </div>
            
        </ContactSuccessWrapper>
    </Layout>
  )
}

export default ContactSuccessPage

export const Head = () => <title>Your Message Was Sent! | Riverside Jiu Jitsu</title>