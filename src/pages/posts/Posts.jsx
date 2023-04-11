import React from "react";
import styled from "styled-components";
import Post from "../post/Post";
import "./posts.css";
import { useOutletContext } from "react-router-dom";

const PostContainer = styled.div`
  flex: 9;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Posts() {
  const [posts] = useOutletContext();
  return (
    <PostContainer>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </PostContainer>
  );
}

export default Posts;
