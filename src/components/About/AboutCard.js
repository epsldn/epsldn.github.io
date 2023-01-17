import React from "react";
import Card from "react-bootstrap/Card";
import { BsAlignStart } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Efrain Saldana </span>
            from <span className="purple"> Austin, Texas.</span> I am an ex sales manager looking to break in to tech
            <br />
            <br />
            Apart from coding, here are some other things I like to do:
          </p>
          <ul>
            <li className="about-activity">
              <BsAlignStart /> Solving Puzzles
            </li>
            <li className="about-activity">
              <BsAlignStart /> Trying out new activities
            </li>
            <li className="about-activity">
              <BsAlignStart /> Traveling
            </li>
          </ul>

          <p style={{ color: "steelblue" }}>
            "Anyone Can Win A Fight When The Odds Are Easy! It's When The Going's Tough, When There Seems To Be No Chance, That's When It Counts!"{" "}
          </p>
          <footer className="blockquote-footer">Spider-Man, Stan Lee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
