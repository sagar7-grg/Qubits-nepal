import React from "react";
import img1 from "../images/services-icon-1.svg";
import img2 from "../images/services-icon-2.svg";
import img3 from "../images/services-icon-3.svg";
import Bounce from "react-reveal/Bounce";

function Services() {
  return (
    <div className="services container">
      <div className="services-container">
        <Bounce bottom>
          <div className="services-header">
            <h1>What we do?</h1>
            <p>
              We serve small and medium sized companies in all tech related
              industries with high quality growth services which are presented
              below
            </p>
          </div>
        </Bounce>

        <Bounce top>
          <div className="services-body">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="services" />
                <h2 className="mt-5">Web Development</h2>
                <p className="mt-5">
                  Our team of enthusiastic marketers will analyse and evaluate
                  how your company stacks against the closest competitors
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="services" />
                <h2 className="mt-5">App Developemnt</h2>
                <p className="mt-5">
                  Our team of enthusiastic marketers will analyse and evaluate
                  how your company stacks against the closest competitors
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={img3} alt="services" />
                <h2 className="mt-5"> Web Desigining</h2>
                <p className="mt-5">
                  Our team of enthusiastic marketers will analyse and evaluate
                  how your company stacks against the closest competitors
                </p>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Services;
