import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostContainer = styled.div`
  min-width: 230px;
  margin: 10px 0;
  flex: 45%;
  flex-grow: 0;
  @media screen and (max-width: 480px) {
    flex: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 300px;
  object-fit: cover;
`;
const Category = styled.span`
  color: #e29556;
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;
const PostTitle = styled.h3`
  font-size: 25px;
  font-weight: 900;
  margin: 10px 0;
`;
const PostDate = styled.h5`
  font-style: italic;
  color: #c8c0c0;
`;
const PostDesc = styled.span`
  padding: 5px;
  color: #c8c0c0;
`;

const Post = ({ post }) => {
  return (
    <PostContainer>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/post/${post.id}`}>
        <Wrapper>
          <Img src={post.img} />
          <Category>{post.category}</Category>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.postDate}</PostDate>
          <PostDesc>{post.desc}</PostDesc>
        </Wrapper>
      </Link>
    </PostContainer>
  );
};

export default Post;
