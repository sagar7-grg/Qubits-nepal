import React from "react";
import GlobalContext from "./globalContext";

import { team, posts, testimonials, projects } from "../components/data";

const GlobalProvider = (props) => {
  const state = {
    blogPosts: posts,
    team: team,
    testimonials,
    projects,

    loading: true,
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
