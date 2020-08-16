import React from "react";
import img from "../images/testimonials-2-men-talking.svg";
import Carousel from "react-elastic-carousel";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";
import Slide from "react-reveal/Slide";
import Wobble from "react-reveal/Wobble";
import Jump from "react-reveal/Jump";

const breakPoints = [{ width: 1200, itemsToShow: 1 }];

function Portfolio() {
  const testimonialContext = useContext(GlobalContext);
  const { testimonials } = testimonialContext;

  return (
    <div className="portfolio">
      <div className="container testimonial">
        <div className="portfolio1">
          <Jump>
            <img src={img} alt="testimonials" />
          </Jump>
        </div>
        <div className="portfolio2 text-center">
          <Slide left>
            <h2>Testimonials</h2>
          </Slide>

          <Carousel breakPoints={breakPoints} className="mt-5">
            {testimonials.map((testimonial) => {
              return (
                <Wobble>
                  <div className="item">
                    <img src={testimonial.image} alt="customer" />
                    <p>{testimonial.content}</p>
                    <h3>
                      {testimonial.name} - {testimonial.profession}
                    </h3>
                  </div>
                </Wobble>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
