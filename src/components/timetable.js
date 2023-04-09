import React, {useRef, useEffect} from "react"
import styled from '@emotion/styled'
import timetable from "../images/timetable.jpg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TimetableWrapper = styled.div`
height: 100%;
/* background-color: #2c2868; */
z-index: 100;
/* background-color: #292864; */
background: linear-gradient(
    to right,
    paleturquoise 0%,
    paleturquoise 25%,
    pink 25%,
    pink 50%,
    paleturquoise 50%,
    paleturquoise 75%,
    pink 75%,
    pink 100%
);
/* background: linear-gradient(
    to left,
    #336fb7 0%,
    #336fb7 25%,
    #375a90 25%,
    #375a90 50%,
    #336fb7 50%,
    #336fb7 75%,
    #375a90 75%,
    #375a90 100%
); */
/* background: linear-gradient(
    to left,
    #336fb7 0%,
    #336fb7 10%,
    #375a90 10%,
    #375a90 20%,
    #336fb7 20%,
    #336fb7 30%,
    #375a90 30%,
    #375a90 40%,
    #336fb7 40%,
    #336fb7 50%,
    #375a90 50%,
    #375a90 60%,
    #336fb7 60%,
    #336fb7 70%,
    #375a90 70%,
    #375a90 80%,
    #336fb7 80%,
    #336fb7 90%,
    #375a90 90%,
    #375a90 100%
); */
padding-top: 10px; 
padding-bottom: 40px;
display: flex;
justify-content: center;

.day-column {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 10px;
    
}
.title-div{
    background-color: black;
    padding: 0 40px;
    text-align: center;
    h2 {color: white;}
    
}
.content-div{
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 20px;
    background-color: #727274;
    padding: 15px;
}
.times-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #e4e4e4;
    padding: 50px 20px;
    height: 100%;
    margin: 10px 0;
    .class-text {font-size: 1em; color: #333333; margin: 1px;}
    .time-text {font-size: 1.2em; margin: 1px;}
}
@media(max-width: 1150px){
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    .day-column {
        
        /* flex-direction: row; */
        /* margin: 10px auto; */
        .content-div {
            padding: 0;
            margin: 0;
            /* flex-direction: row; */
            .times-div {
                height: fit-content;
                margin: 0 2px 2px 2px;
                padding: 8px;
                :last-of-type {
                    height: 100%;
                }
            }
        }
        .title-div {
            height: fit-content;
            width: 250px;
            padding: 0;
            h2 {
                font-size: 22px;
                width: fit-content;
                margin: 10px auto;
            }
        }
    }
}
@media(max-width: 540px){
.day-column {
    min-width: 150px;
    width: 45%;
    margin: 5px;
    .title-div {
        min-width: 150px;
        width: 100%;
    }
}
}
@media(max-width: 315px){
    .day-column {
        width: 90%;
    }
}
`


export default function Timetable(){
        // gsap.registerPlugin(ScrollTrigger);
        // const main = useRef(null);
        // useEffect(() => {
        //   const element1 = main.current;
        //   let scrollSettings = {
        //     trigger: "#timetable",
        //     start: "top bottom",
        //     end: "center center",
        //     scrub: true
        //   };
        //   gsap.fromTo(element1.querySelector(".column0"),{opacity: 1, x: -200},{opacity: 1, x: 0, scrollTrigger: scrollSettings});
        //   gsap.fromTo(element1.querySelector(".column1"),{opacity: 1, x: -50,},{opacity: 1, x: 0, scrollTrigger: scrollSettings});
        //   gsap.fromTo(element1.querySelector(".column2"),{opacity: 1, x: 0,},{opacity: 1, x: 0, scrollTrigger: scrollSettings});
        //   gsap.fromTo(element1.querySelector(".column3"),{opacity: 1, x: 50,},{opacity: 1, x: 0, scrollTrigger: scrollSettings});
        //   gsap.fromTo(element1.querySelector(".column4"),{opacity: 1, x: 200,},{opacity: 1, x: 0, scrollTrigger: scrollSettings});
        //   gsap.fromTo(element1.querySelector(".title-div"),{color: "black"},{color:"white", scrollTrigger: scrollSettings});
        // }, []);
    const DaysArray = [
        {title: "MONDAY", content: [["NO-GI FUNDAMENTALS", "5:30 - 6:00PM"],["NO-GI", "6:00 - 7:00PM"],["ROLLING", "7:00 - 8:00PM"]]},
        {title: "TUESDAY", content: [["NO-GI FUNDAMENTALS", "5:30 - 6:00PM"],["NO-GI", "6:00 - 7:00PM"],["ROLLING", "7:00 - 8:00PM"]]},
        {title: "WEDNESDAY", content: [["NO-GI FUNDAMENTALS", "5:30 - 6:00PM"],["SUBMISSION WRESTLING", "6:00 - 7:00PM"],["ROLLING", "7:00 - 8:00PM"]]},
        {title: "THURSDAY", content: [["NO-GI FUNDAMENTALS", "5:30 - 6:00PM"],["NO-GI", "6:00 - 7:00PM"],["ROLLING", "7:00 - 8:00PM"]]},
        {title: "SATURDAY", content: [["MORNING OPEN MAT", "CONFIRMED WEEKLY"]]}
    ]
    console.log(DaysArray)
    return(
        <TimetableWrapper id="timetable"
        //  ref={main}
        >
            {DaysArray.map((Day,i) => 
                <div className={"day-column column"+i}>
                    <div className="title-div">
                        <h2>{Day.title}</h2>
                    </div>
                    <div className="content-div">
                        {Day.content.map((content) => 
                        <div className="times-div">
                            <p className="class-text">{content[0]}</p>
                            <p className="time-text"><b>{content[1]}</b></p>
                        </div>
                        )} 
                    </div>
                </div>
            )}
        </TimetableWrapper>
    )
}