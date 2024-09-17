import React, { useEffect } from 'react'
import './Experience.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


function Experience() {
    useEffect(() => {
        AOS.init();
      }, []);



  return (
    <div className="experience-section mt-5">
          
            <Container className="text-center my-4">
                <h6 className="subtitle">Explore More</h6>
                <h2 className="main-heading">My Experience</h2>
            </Container>

          
            <Container>
                <Row className="justify-content-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" >
                   
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="experience-card">
                            <Card.Body>
                                <Card.Title className="card-title">UI/UX Design</Card.Title>
                               
                                <ul className="experience-list">
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>User Research</span>  - Experienced</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Information Architecture</span> - Experienced</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Wireframing</span> - Experienced</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Prototyping</span> - Experienced</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Visual and UI Design</span> - Experienced</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Figma/Adobe XD </span>- Experienced</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                  
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="experience-card">
                            <Card.Body>
                                <Card.Title className="card-title">Frontend Development</Card.Title>
                                <ul className="experience-list">
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>HTML</span>  - Experienced</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>CSS</span> - Experienced</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>JavaScript</span> - Basic</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>jQuery</span> - Intermediate</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>React JS </span>- Intermediate</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Bootstrap</span> - Intermediate</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                  
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <Card className="experience-card">
                            <Card.Body>
                                <Card.Title className="card-title">Backend Development</Card.Title>
                                <ul className="experience-list">
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Django</span> - Basic</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>SQL</span> - Basic</li>
                                    <li><img className='bullet' src={("./..//Images/bullet2.svg")} alt="bullet" /> <span className= 'txt'>Python</span> - Basic</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Experience