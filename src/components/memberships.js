import React from "react"
import styled from '@emotion/styled'
import Jack from "../images/Jack.jpg"

const MembershipsWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
z-index: 100;
background-color: #292864;
h1 {
    font-size: 70px;
    margin: 0;
}
h1, h2, p {
    color: white;
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
  width: auto;
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

.text-content{
    width: 700px;
    padding-left: 70px;
}
.trial-content {
    margin-top: 60px;
}
.memberships-content {
display: flex;
}
.membership-div {
    width: 350px;
    margin-top: 40px;
}
.membership-div:nth-of-type(2){
    margin-left: 40px;
}
img {
    width: 640px;
}
`


export default function Memberships(){
    return(
        <MembershipsWrapper id="memberships">
            <img src={Jack}/>
            <div className="text-content">
                <h1>Membership Options</h1>
                <div className="trial-content">
                    <h2>Free Trial: First Week Free</h2>
                    <p>We believe that everyone can benefit from practicing Jiu Jitsu, regardless of age or fitness level. That's why we are proud to offer a free trial to anyone who is interested in joining our community. You'll have the opportunity to experience our classes firsthand and see why so many people have fallen in love with this amazing martial art.</p>
                    <p>No sign up required, just come down to 3 Rawhiti Street, Frankton Hamilton at 5:30 or 6 Monday-Thursday (in shorts and a teeshirt or athletic gear) and our coaches will help you get started on you Jiu Jitsu journey.</p>
                </div>
                <div className="memberships-content">
                    <div className="membership-div">
                        <h2>Single Day Membership: $20 per Week</h2>
                        <p>This membership allows you to attend any classes at Riverside Jiu Jitsu for one day per week.</p>
                        <a href="https://oc.debitsuccess.com/DirectEntry/DirectDebitRequest/Form?brandtemplateid=9958909c-2551-4d41-a8f3-3a02db65af83"><button className="button-6">Sign Up</button></a>
                    </div>
                    <div className="membership-div">
                        <h2>Full Membership: $30 per Week</h2>
                        <p>This membership allows you to attend all classes at Riverside Jiu Jitsu.</p>
                        <a href="https://oc.debitsuccess.com/DirectEntry/DirectDebitRequest/Form?brandtemplateid=9958909c-2551-4d41-a8f3-3a02db65af83"><button className="button-6">Sign Up</button></a>
                    </div>
                </div>
            </div>
        </MembershipsWrapper>
    )
}