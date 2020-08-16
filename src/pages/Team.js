import React from "react";

import GlobalContext from "../context/globalContext";
import { useContext } from "react";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";

function Team(props) {
  const teamContext = useContext(GlobalContext);
  const { team, loading } = teamContext;

  return (
    <div className="team ">
      <div className="team-container">
        <Rotate top left>
          <div className="team-intro">
            <h1>Our team</h1>
            <p>
              Meat our team of specialized marketers and business developers
              which will help you research new products and launch them in new
              emerging markets
            </p>
          </div>
        </Rotate>

        {loading ? (
          <div className="members">
            {team.map((item) => {
              return (
                <>
                  <Flip left>
                    <div className="each-member">
                      <img src={item.image} alt="member" />
                      <h3>{item.name}</h3>
                      <p>{item.position}</p>
                    </div>
                  </Flip>
                </>
              );
            })}
          </div>
        ) : (
          <div>loading....</div>
        )}
      </div>
    </div>
  );
}

export default Team;
