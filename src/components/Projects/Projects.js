import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import abcf from "../../Assets/Projects/abcf.png";
import strive from "../../Assets/Projects/Strive.png";
import rockethood from "../../Assets/Projects/rockethood.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          The <strong className="purple">Musuem</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abcf}
              isBlog={false}
              title="AirBnCF"
              description="Airbncf is a vacation rental platform that closely mimics the functionality of airbnb.com. It allows users to fully manage their listings, including the ability to create, read, update and delete spots, as well as add spot images. Furthermore, it enables the creation, reading, updating and deletion of reviews, ensuring a transparent and reliable platform for all users."
              ghLink="https://github.com/epsldn/AirBnB"
              demoLink="https://airbncf.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={strive}
              isBlog={false}
              title="Strive"
              description="Strive is a web app that allows users to create and manage their own clubs, join and leave groups and track their activities. It also provides the ability to update club images and avatar with AWS, search for clubs using Google Places API and updating user profile picture with AWS. It is designed to be similar to Strava.com and provide a similar experience."
              ghLink="https://github.com/epsldn/strive"
              demoLink="https://strive.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockethood}
              isBlog={false}
              title="RocketHood"
              description="Rockethood is a web-based stock trading application that allows users to buy and sell stocks, search for stocks, and view real-time data with updated graphs. It also includes features such as bookmarking news articles and creating watchlists with stock information. This app was built by 4 people in one week with careful planning and efficient execution."
              ghLink="https://github.com/kmaikat/robinhood-clone"
              demoLink="https://rockethood.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
