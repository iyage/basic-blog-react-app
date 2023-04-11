import React from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
   min-width : 230px ;
   flex: 45%;
   flex-grow: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px 0;
   @media screen and (max-width:480px) {
    flex: 100%;
  }
`
const Img = styled.img`
    width: 100%;
    border-radius: 10px;
    height: 300px;
    object-fit: cover;
`
const Category = styled.span`
    color: #e29556;
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0;
`
const PostTitle = styled.h3`
font-size: 25px;
font-weight: 900;
margin: 10px 0;
`
const PostDate = styled.h5`
font-style: italic;
color: #c8c0c0;
`
const PostDesc = styled.span`
    padding: 5px;
    color: #c8c0c0;
`


const Post = () => {
    return (
        <PostContainer>
            <Img
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <Category>Musi Life</Category>
            <PostTitle>Lorem ipsum dolor sit amet</PostTitle>
            <PostDate>1 hour ago</PostDate>
            <PostDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptates neque dolor at aliquid
                natus voluptate ipsam illum quaerat animi a sint, exercitationem reprehenderit sit illo harum maiores?
                Praesentium, sequi.</PostDesc>
        </PostContainer>
    )
}

export default Post