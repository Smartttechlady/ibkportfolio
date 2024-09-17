import React, { useEffect } from 'react'
import './Projects.css';  
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Projects() {
    useEffect(() => {
        AOS.init();
      }, []);
    

  return (
    <div className="projects-section mt-5">
   
    <Container className="text-center my-4">
        <h6 className="subtitle">Browse My Recent</h6>
        <h2 className="main-heading">Projects</h2>
    </Container>

   
    <Container className="my-5">
        <h2 className="section-heading">UI/UX Projects</h2>
        <hr className="underline" />

        <Row className="justify-content-center">
            
            <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="project-card">
                    <Card.Img variant="top" src={("./..//Images/megabank.svg")} className="card-image" data-aos="zoom-out-up" data-aos-duration="3000" />
                    <Card.Body>
                        <Card.Title className="project-title">Project One</Card.Title>
                        <div className="button-group">
                            <Button className="btn-white" href="https://www.behance.net/gallery/140519563/UIUX-FOR-A-BANK-MOBILE-APP" target="_blank">Behance</Button>
                            <Button className="btn-transparent" href="https://www.behance.net/gallery/207716843/Megabank-Demo?" target="_blank">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

           
            <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="project-card">
                    <Card.Img variant="top" src={("./..//Images/Beautify.svg")} className="card-image" data-aos="zoom-out-up" data-aos-duration="3000"/>
                    <Card.Body>
                        <Card.Title className="project-title">Project Two</Card.Title>
                        <div className="button-group">
                            <Button className="btn-white" href="https://www.behance.net/gallery/165557359/UI-DESIGN-OF-A-SKINCARE-WEBSITE" target="_blank">Behance</Button>
                            <Button className="btn-transparent" href="https://www.behance.net/gallery/207718109/Beautify-Demo?" target="_blank">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="project-card">
                    <Card.Img variant="top" src={("./..//Images/Vinoluxe.svg")} className="card-image" data-aos="zoom-out-up" data-aos-duration="3000" />
                    <Card.Body>
                        <Card.Title className="project-title">Project Three</Card.Title>
                        <div className="button-group">
                            <Button className="btn-white" href="https://www.behance.net/gallery/182092483/LANDING-PAGE-FOR-A-WINE-BRAND" target="_blank">Behance</Button>
                            <Button className="btn-transparent" href="https://www.behance.net/gallery/207718539/Vinoluve-Demo?" target="_blank">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>


    <Container className="my-5">
        <h2 className="section-heading">Frontend Development Projects</h2>
        <hr className="underline" />

        <Row className="justify-content-center">
           
            <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="project-card">
                    <Card.Img variant="top" src={("./..//Images/Fashion World1.svg")} className="card-image" data-aos="zoom-out-up" data-aos-duration="3000" />
                    <Card.Body>
                        <Card.Title className="project-title">Project One</Card.Title>
                        <div className="button-group">
                            <Button className="btn-white" href="#github" target="_blank">Github</Button>
                            <Button className="btn-transparent" href="#live-demo" target="_blank">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

           
            <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="project-card">
                    <Card.Img variant="top" src={("./..//Images/dailyworkhero.svg")} className="card-image" data-aos="zoom-out-up" data-aos-duration="3000" />
                    <Card.Body>
                        <Card.Title className="project-title">Project Two</Card.Title>
                        <div className="button-group">
                            <Button className="btn-white" href="https://github.com/Smartttechlady/Daily-Work-Project" target="_blank">Github</Button>
                            <Button className="btn-transparent" href="#live-demo" target="_blank">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

           
            <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="project-card">
                    <Card.Img variant="top" src={("./..//Images/twitter.png")} className="card-image" data-aos="zoom-out-up" data-aos-duration="3000" />
                    <Card.Body>
                        <Card.Title className="project-title">Project Three</Card.Title>
                        <div className="button-group">
                            <Button className="btn-white" href="#github" target="_blank">Github</Button>
                            <Button className="btn-transparent" href="#live-demo" target="_blank">Live Demo</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Projects