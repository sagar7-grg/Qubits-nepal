import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";
import PostCard from "../components/PostCard";
import Shake from "react-reveal/Shake";

function Blog() {
  const blogContext = useContext(GlobalContext);
  const { blogPosts, loading } = blogContext;

  return (
    <div className="posts">
      <div className="container">
        <h1>Posts</h1>
        {loading ? (
          <div className="posts-grid-container">
            {blogPosts.map((post, i) => {
              return (
                <Shake>
                  <PostCard
                    key={i}
                    title={post.title}
                    image={post.image}
                    author={post.author}
                    date={post.date}
                    id={post.id}
                  />
                </Shake>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Blog;
