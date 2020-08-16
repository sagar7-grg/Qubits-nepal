import React from "react";
import teamwork from "../images/header-teamwork.svg";
import Button from "../components/Button";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

function Home() {
  return (
    <>
      <div className="about-section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-5">
              <div className="text-container ">
                <Fade left>
                  <h1>
                    <span className="turquoise d-block">Qubits Nepal</span>
                  </h1>
                </Fade>
                <Fade right>
                  <h1>Your idea, our service!!</h1>
                </Fade>

                <Button name="DISCOVER" />
              </div>
            </div>
            <div className="col-lg-6">
              <Bounce top>
                <div className="image-container">
                  <img className="img-fluid" src={teamwork} alt="alternative" />
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
