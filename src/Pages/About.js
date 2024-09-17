import React,  { useEffect } from 'react'
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    useEffect(() => {
        AOS.init();
      }, []);

      

    return (
        <div className="about-me-section mt-5">
           
            <Container className="text-center my-4">
                <h6 className="subtitle">Get To Know Me</h6>
                <h2 className="main-heading">About Me</h2>
            </Container>

           
            <Container>
                <Row className="align-items-center">
                
                    <Col lg={6} md={12} className="text-center profile-pic-container">
                        <img
                            src={("./..//Images/ibk 2.png")}
                            alt="Profile"
                            className="img-fluid profile-pic"
                        />
                    </Col>

                
                    <Col lg={6} md={12} className="info-column">
                        <Row className='' data-aos="zoom-in" data-aos-duration="3000" >
                            <Col md={6} sm={12} className="mb-4">
                                <div className="info-box experience-box">
                                    <img src={("./..//Images/award-symbol 2.png")} alt="Experience Icon" className="info-icon1" />
                                    <h5>Experience</h5>
                                    <p>2+ years</p>
                                    <p>UI/UX Design | Frontend Development</p>
                                </div>
                            </Col>
                            <Col md={6} sm={12} className="mb-4">
                                <div className="info-box education-box">
                                    <img src={("./..//Images/graduate-hat.png")} alt="Education Icon" className="info-icon2" />
                                    <h5>Education</h5>
                                    <p>B.Sc. in Industrial & Labour Relations</p>
                                    <p>M.Sc. in Human Resource and Personnel Management</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className="info-box description-box">
                                    <p>
                                        As a UI/UX designer and entry-level frontend developer with a background in human resources, I
                                        bring a unique perspective to the world of design and development. My course of study in human
                                        resources has equipped me with a deep understanding of user behavior, psychology, and effective
                                        communication, which are essential elements in creating intuitive and user-friendly interfaces.
                                        I leverage my knowledge of human resource principles to craft designs that not only look
                                        visually appealing but also resonate with users on a deeper level, enhancing their overall
                                        experience. Additionally, my background enables me to collaborate effectively with teams,
                                        understand user needs and business goals, and contribute to creating solutions that are not only
                                        aesthetically pleasing but also functionally efficient.

                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About