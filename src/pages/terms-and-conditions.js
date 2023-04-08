import * as React from "react"
import styled from '@emotion/styled'
import Layout from "../components/layout"

const TermsWrapper = styled.div`
padding-top: 100px;
width: 900px;
margin: 0 auto 100px auto;
`



const IndexPage = () => {
  return (
    <Layout InvertNav={true}>
        <TermsWrapper id="terms">
            <h1>Terms & Conditions</h1>
            <div>
            <p>Welcome to our website! Here are the terms and conditions that apply to your use of our website. By using our website, you agree to these terms and conditions. Please read them carefully.</p>

            <p> Ownership of Content  All content, including but not limited to text, graphics, images, audio, video, software, data compilations, and code, is the property of our website or our licensors and is protected by United States and international copyright laws.</p>

            <p> Use of Content  You may use the content on our website for your personal, non-commercial use only. You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works, transmit, or in any way exploit any part of our website without our prior written consent.</p>

            <p> User Conduct  You agree not to use our website for any illegal or unauthorized purpose. You also agree to comply with all applicable laws and regulations regarding your use of our website. You may not use our website in any way that could damage, disable, overburden, or impair our website or interfere with any other party's use and enjoyment of our website.</p>

            <p> Links to Third-Party Websites  Our website may contain links to third-party websites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You agree that we are not responsible or liable for any loss or damage of any sort incurred as a result of your dealings with any third-party website.</p>

            <p> Disclaimer of Warranties  Our website is provided &quot;as is&quot; and without any warranty or condition, express, implied or statutory. We do not guarantee the accuracy, timeliness, completeness, reliability, suitability, availability, or usefulness of our website.</p>

            <p> Limitation of Liability  In no event shall we be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from your use of our website.</p>

            <p> Indemnification  You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our website, your violation of these terms and conditions, or your violation of any rights of another.</p>

            <p> Governing Law and Jurisdiction  These terms and conditions shall be governed by and construed in accordance with the laws of New Zealand, without giving effect to any principles of conflicts of law. Any dispute arising out of or related to these terms and conditions shall be resolved exclusively in the courts located in Hamilton, New Zealand.</p>

            <p> Changes to These Terms and Conditions  We reserve the right to change these terms and conditions at any time, without notice to you. Your continued use of our website after any such changes shall constitute your acceptance of the new terms and conditions.</p>

            <p> Contact Us  If you have any questions or concerns about these terms and conditions, please contact us at riversidejiiujitsu@gmail.com.</p>
            </div>
        </TermsWrapper>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Terms & Conditions | Riverside Jiu Jitsu</title>
