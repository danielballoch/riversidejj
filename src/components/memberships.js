import React, {useRef, useLayoutEffect} from "react"
import { gsap } from 'gsap';
import styled from '@emotion/styled'
import Jack from "../images/Jack.jpg"
import Grit from "../images/grit.png"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const MembershipsWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
z-index: 100;
background-color: #292864;
/* br {
    display: none;
} */
h2 {
    font-size: 70px;
    margin: 0;
}
h3 {
    font-size: 24px;
    margin: 0;
}
h2, h3, p {
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
  /* padding: calc(.875rem - 1px) calc(1.5rem - 1px); */
  padding: 25px;
  width: 300px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  /* width: auto; */
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
    max-width: 700px;
    /* padding: 0 70px; */
    margin: 10px 70px;
    font-size: 16px;
    color: #111;
    p {
        line-height: 24px;
    }
    
}
.trial-content {
    margin-top: 60px;
    overflow: hidden;
}
.memberships-content {
display: flex;
overflow: hidden;
}
.membership-div {
    width: 300px;
    margin: 40px 0;
    padding: 10px;
    a {
        text-decoration: none;
    }
}
.membership-div:nth-of-type(2){
    margin-left: auto;
}
img {
    max-width: 700px;
    width: 100%;
    object-fit: cover;
}
@media(max-width: 1240px){
flex-direction: column;
.text-content {
    margin-bottom: 40px;
}
img {
    height: 70vh;
}
h2 {
    margin: 0;
}
}
@media(max-width: 800px){
br {
    display: block;
}
h2 {
    text-align: center;
    font-size: 50px;
    margin-top: 40px;
}
.trial-content {
    text-align: center;
}
.memberships-content {
    flex-wrap: wrap;
    text-align: center;
    /* flex-direction: column; */
}
.membership-div:nth-of-type(2){
    margin: 40px 0 40px 0;
}
.button-6 {
    padding: 25px 60px;
    width: 90%;
}
}
`


export default function Memberships(){
    gsap.registerPlugin(ScrollTrigger);
    const membershipRef = useRef(null);
        useLayoutEffect(() => {
            let ctx = gsap.context(() => {
                const element2 = membershipRef.current;
                let scrollSettings1 = {
                    trigger: ".title",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings2 = {
                    trigger: ".trial-content",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings3 = {
                    trigger: ".m1",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                let scrollSettings4 = {
                    trigger: ".m2",
                    start: "center bottom",
                    toggleActions: "play none none reverse",
                    // markers: true
                };
                setTimeout(()=>{
                    gsap.fromTo(element2.querySelector(".title"),{opacity: 0, x: -10},{opacity: 1, x: 0, scrollTrigger: scrollSettings1});
                    gsap.fromTo(element2.querySelector(".trial-content"),{opacity: 0, x: -10},{opacity: 1, x: 0, scrollTrigger: scrollSettings2});
                    gsap.fromTo(element2.querySelector(".m1"),{opacity: 0, x: -10,},{opacity: 1, x: 0, scrollTrigger: scrollSettings3});
                    gsap.fromTo(element2.querySelector(".m2"),{opacity: 0, x: -10,},{opacity: 1, x: 0, scrollTrigger: scrollSettings4});
                },100)
                
            });
            return () => ctx.revert(); // <- cleanup!
    }, []);
    return(
        <MembershipsWrapper >
            <img src={Jack} onLoad={() => ScrollTrigger.refresh()} alt="Riverside Jiu Jitsu Crew In Training Room"/>
            <div className="text-content" ref={membershipRef}>
                <h2 className="title" id="memberships">Membership Options</h2>
                <div className="trial-content">
                    <h3>Free Trial: First Week Free</h3>
                    <p>We believe that everyone can benefit from practicing Jiu Jitsu, regardless of age or fitness level. That's why we are proud to offer a free trial to anyone who is interested in joining our community. You'll have the opportunity to experience our classes firsthand and see why so many people have fallen in love with this amazing martial art.</p>
                    <p>No sign up required, just come down to 3 Rawhiti Street, Frankton Hamilton at 5:30 or 6 Monday-Thursday (in shorts and a teeshirt or athletic gear) and our coaches will help you get started on you Jiu Jitsu journey.</p>
                </div>
                <div className="memberships-content">
                    <div className="membership-div m1">
                        <h3>Single Day Membership: <br/>$20 per Week</h3>
                        <p>This membership allows you to attend any classes at Riverside Jiu Jitsu for one day per week.</p>
                        <a href="https://oc.debitsuccess.com/DirectEntry/DirectDebitRequest/Form?brandtemplateid=9958909c-2551-4d41-a8f3-3a02db65af83" target="_blank"><button className="button-6"><b>SIGN UP</b></button></a>
                    </div>
                    <div className="membership-div m2">
                        <h3>Full Membership: <br/>$30 per Week</h3>
                        <p>This membership allows you to attend all classes at Riverside Jiu Jitsu.</p>
                        <a href="https://oc.debitsuccess.com/DirectEntry/DirectDebitRequest/Form?brandtemplateid=9958909c-2551-4d41-a8f3-3a02db65af83" target="_blank"><button className="button-6"><b>SIGN UP</b></button></a>
                    </div>
                </div>
            </div>
        </MembershipsWrapper>
    )
}