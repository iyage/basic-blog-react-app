import {Add} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import './write.css'

const Writecontainer = styled.div`
    width: 97vw;
    margin: auto;
    @media screen and (max-width:480px) {
        width: 100vw;
    }
`
const WriteForm = styled.form`
    width: 100%;
`
const Label = styled.label`
&:first-child{
    cursor: pointer;
    font-size: 50px;
    color: grey;
    font-weight: 900;
}
height: 30px;
width: 30px;
border: solid 2px grey;
border-radius: 50%;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
`
const PostTitle = styled.input.attrs({type: 'text', placeholder: 'Post Title', autoFocus: 'true'})`
width: 70vw;
height: 50px;
border:none;
font-size: 30px;
&:focus{
    outline: none;
}
@media screen and (max-width:480px) {
    font-size: 18px;
    height: 30px;
    width: 60vw;
}

`
const FormGroup = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const TextArea = styled.textarea.attrs({
    placeholder: 'Write your thought.....'
})`
width: 70vw;
height:250px;
border:none;
font-size: 30px;
&:focus{
    outline: none;
}
@media screen and (max-width:480px) {
    width: 100vw;
    font-size: 20px;
}
`
const InsertImg = styled.input.attrs({type: 'file', accept: 'image/*'})
    ``
const SelectedImg = styled.img`
width: 70vw;
height:350px;
border-radius: 10px;
object-fit: cover;
@media screen and (max-width:480px) {
    width: 95vw;
    height:200px;
}
@media screen and (max-width:768px) {
    width: 95vw;
}
`
const PublishButton = styled.button`
padding:0.5em 2em;
background-color: teal;
border:none;
color:white;
border-radius:5px;
cursor:pointer;
@media screen and (max-width:480px) {
    padding: 0.5em  1em;
}
`

function Write() {
    return (
        <Writecontainer>
            <WriteForm>
                <FormGroup>
                    <SelectedImg
                        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="insert-image">
                        <Add/>
                    </Label>
                    <InsertImg id='insert-image' style={{display: 'none'}}/>
                    <PostTitle/>
                    <PublishButton>Publish</PublishButton>
                </FormGroup>

                <FormGroup>
                    <TextArea></TextArea>
                </FormGroup>

            </WriteForm>
        </Writecontainer>
    )
}

export default Write