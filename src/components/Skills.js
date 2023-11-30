import meterHtml from "../assets/img/meterHtml.svg";
import css from "../assets/img/css.svg"
import javascript from "../assets/img/javascript.svg"
import reactjs from "../assets/img/reactjs.svg"
import bootstrap from "../assets/img/bootstrap.svg"
import antdesign from "../assets/img/antdesign.svg"
import typescript from "../assets/img/typescript.svg"
import nodejs from "../assets/img/nodejs.svg"
import nestjs from "../assets/img/nestjs.svg"
import express from "../assets/img/express.svg"
import graphql from "../assets/img/graphql.svg"
import prisma from "../assets/img/prisma.svg"
import firebase from "../assets/img/firebase.svg";
import mongodb from "../assets/img/mongodb.svg";
import github from "../assets/img/github.svg";
import postman from "../assets/img/postman.svg";
import API from "../assets/img/API.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>✨ Full-Stack Prowess: From conceptualization to deployment, I've got the full-stack covered. Whether it's front-end magic with React  or back-end wizardry with Node.js , I thrive on turning ideas into seamless, user-friendly experiences.
</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meterHtml} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={reactjs} alt="Image" />
                                <h5>React.Js</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={antdesign} alt="Image" />
                                <h5>Ant Design</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={nestjs} alt="Image" />
                                <h5>Nest Js</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express Js</h5>
                            </div>
                            <div className="item">
                                <img src={graphql} alt="Image" />
                                <h5>GraphQl</h5>
                            </div>
                            <div className="item">
                                <img src={prisma} alt="Image" />
                                <h5>Prisma</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>Mongo Db</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>Git & Github</h5>
                            </div>
                            <div className="item">
                                <img src={postman} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            
                            <div className="item">
                                <img src={API} alt="Image" />
                                <h5>API</h5>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
