import * as React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"

const ContactWrapper = styled.div`
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

form {
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
        /* margin: 40px; */
    }
    input, textarea {
        font-size: 16px;
        margin-top: 5px;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }
    textarea {
        height: 100px;
        max-width: 900px;
    }
}
.button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 100%;
}

.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
@media(max-width: 1000px){
    form {
        margin: 20px 20px 50px 20px;
        width: auto;
    }
}
`

  


const ContactPage = () => {
  return (
    <Layout InvertNav={true}>
        <ContactWrapper id="contact">
            <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <h1>Contact Us</h1>
                <p>If you have any questions for the Riverside Jiu Jitsu team please email: <a href="mailto:riversidejiiujitsu@gmail.com">riversidejiiujitsu@gmail.com</a>, follow <a href="https://www.instagram.com/riversidejj/" target="_blank">@riversidejj</a> on Instagram and send us a message, or fill out the form below and we'll get back to you shortly!</p>
                <hr/>
                <p>
                    <label>Name: <br/><input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email: <br/><input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <br/><textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit" className="button-6">Send Message</button>
                </p>
            </form>
            
        </ContactWrapper>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Contact | Riverside Jiu Jitsu</title>