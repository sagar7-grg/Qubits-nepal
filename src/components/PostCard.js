import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `url('${props.image}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          borderTopRightRadius: "2px",
          borderTopLeftRadius: "2px",
        }}
      ></div>
      <div className="card-info">
        <div className="card-title">
          <Link to="/blog/123">
            <p>{props.title}</p>
          </Link>
        </div>
        <div className="card-author-section">
          <p>{props.author}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
