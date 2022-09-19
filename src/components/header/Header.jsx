import React from 'react'
import styled from 'styled-components'
import './header.css'
const HeaderContainer = styled.div`
width: 100vw;
margin-top: 80px;
@media screen and (max-width:480px) {
  margin-top: 20px;
}

`
const HeaderTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: #c34c64;
@media screen and (max-width:480px) {
  display: none;
}

`
const HeaderTitleSm = styled.span`
font-family: 'Poppins', sans-serif;
font-size: 20px;
font-weight: 400;
position:absolute;
top:11%;
@media screen and (max-width:768px) {
  font-size: 20px;
font-weight: 400;
top:20%;
}
`
const HeaderTitleLg = styled.span`
font-family: 'Explora', cursive;
font-size: 100px;
font-weight: 400;
position:absolute;
top:12%;
@media screen and (max-width:768px) {
  font-size: 60px;
font-weight: 400;
top:24%;
}
`
const HeaderImg = styled.div`
width:99vw;
height: 450px;
margin: auto;
`
const Img= styled.img`
  width:100% ;
`


function Header() {
  return (
    <>
<HeaderContainer>
    <HeaderTitle>
        <HeaderTitleSm>
            React UI
        </HeaderTitleSm>
        <HeaderTitleLg>
            Blog
        </HeaderTitleLg>
    </HeaderTitle>
    <HeaderImg>
    < Img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </HeaderImg>
</HeaderContainer>
    </>
  )
}

export default Header