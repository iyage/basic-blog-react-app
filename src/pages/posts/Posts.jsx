import React from 'react'
import styled from 'styled-components'
import Post from '../post/Post'
import './posts.css'
const PostContainer = styled.div`
    flex: 9;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    flex-wrap: wrap;
`

function Posts() {
  return (
    <PostContainer>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </PostContainer>
  )
}

export default Posts