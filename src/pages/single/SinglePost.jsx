import {Delete, Edit} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import './single.css'

const SinglePostContainer = styled.div`
    flex: 9;
   padding: 20px;
`
const PostImg = styled.img`
    width: 100%;
    object-fit: cover;
    height: 350px;
    border-radius: 10px;
`
const PostTitlecontainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'lobster';
    margin-top: 20px;
`
const PostTitle = styled.h3`
    text-align: center;
    flex :10;
    font-size:24px;
    font-weight: 600;
    color: #aea8a8;
`
const Editpost = styled.div`
    flex: 2;
    text-align: right;
`
const PostAuthor = styled.div`
margin-top: 20px;
    display: flex;
    justify-content: space-between;
    color: #e29556;
`
const AuthorName = styled.h4``
const PostDate = styled.h4``
const PostContent = styled.p`
    &::first-letter{
        margin-left: 20px;
        font-size: 25px;
        font-weight: 900;
    }
    padding: 10px;
    margin-top: 20px;
    line-height: 30px;
    color: grey;
    @media screen and (max-width:768px) {
        font-size:14px ;
        line-height: 25px;
        padding: 5px;
    }
    @media screen and (max-width:480px) {
        font-size:14px ;
        line-height: 25px;
        padding: 5px;
    }
`

function SinglePost() {
    return (


        <SinglePostContainer>
            < PostImg
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            <PostTitlecontainer>
                <PostTitle>Lorem ipsum dolor sit</PostTitle>
                <Editpost><Edit className='editIcon'/> <Delete className='delIcon'/> </Editpost>
            </PostTitlecontainer>
            <PostAuthor>
                <AuthorName>Author: Yage</AuthorName>
                <PostDate>1 hour ago</PostDate>
            </PostAuthor>
            <PostContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati alias, inventore quo itaque enim
                nihil aliquam dolores quae nemo quam et earum aperiam placeat ipsa beatae dolorem suscipit commodi?
            </PostContent>
        </SinglePostContainer>
    )
}

export default SinglePost