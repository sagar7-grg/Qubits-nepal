import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="about">
      <div className="about-container container">
        <Fade left>
          <h1>About us</h1>
        </Fade>

        <Fade right>
          <p>
            Welcome to Qubits, your number one source for all things [product].
            We're dedicated to providing you the best of [product], with a focus
            on dependability. customer service, and [store characteristic].
            We're working to turn our passion for [product] into a booming
            online store. We hope you enjoy our products as much as we enjoy
            offering them to you. <br></br>Sincerely, Mr.Arjun Sharma
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default About;
