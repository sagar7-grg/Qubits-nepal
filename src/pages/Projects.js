import React, { useContext, useState } from "react";
import GlobalContext from "../context/globalContext";
import Zoom from "react-reveal/Zoom";

function Projects() {
  const projectContext = useContext(GlobalContext);
  const { projects } = projectContext;
  let [data, setData] = useState(projects);

  const btns = ["all", "html", "javascript", "react"];
  const handleClick = (e) => {
    let filteredProjects = [];
    if (e.target.value === "all") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter(
        (item) => item.name === e.target.value
      );
    }
    setData(() => (data = filteredProjects));
  };

  return (
    <>
      <div className="projects container">
        <div className="projects-container">
          <h1>Our Works</h1>
          <div className="button-container">
            {btns.map((btn, index) => {
              return (
                <Zoom left>
                  <button
                    key={index}
                    className="each-btn"
                    value={btn}
                    onClick={handleClick}
                  >
                    {btn}
                  </button>
                </Zoom>
              );
            })}
          </div>
          <div className="each-project">
            {data.map((project) => {
              return (
                <>
                  <Zoom right>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={project.image}
                        alt="projects"
                      />
                      <div className="card-body">
                        <h2>{project.title}</h2>
                      </div>
                    </div>
                  </Zoom>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
