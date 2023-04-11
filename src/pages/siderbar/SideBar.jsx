import {
  FacebookOutlined,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import sideimg from "../../images/271871166_2044402485734007_7144193533059826889_n.jpeg";
import "./sidebar.css";

const SideBarContainer = styled.div`
  flex: 3;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const SideBarTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
  margin: 30px 0;
  border-top: 2px solid #a7a4a4;
  border-bottom: 2px solid #a7a4a4;
  padding: 5px;
  width: 80%;
  text-align: center;
`;
const SideBarImg = styled.img`
  width: 100%;
`;
const SideBarDesc = styled.p`
  padding: 10px;
  margin-top: 20px;
  text-align: justify;
  max-width: 300px;
`;
const Category = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const CategoryItem = styled.li`
  flex: 50%;
  list-style: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 400;
`;
const SideBarImageContainer = styled.div`
  width: 80%;
`;
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function SideBar({ categories }) {
  return (
    <SideBarContainer>
      <SideBarTitle>ABOUT ME</SideBarTitle>
      <SideBarImageContainer>
        <SideBarImg src={sideimg} />
      </SideBarImageContainer>

      <SideBarDesc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        repellendus porro quis quod, consequatur magnam totam inventore
        exercitationem, voluptatem nam facilis
      </SideBarDesc>
      <SideBarTitle>CATEGORIES</SideBarTitle>
      <Category>
        {categories.map((category, index) => {
          return <CategoryItem key={index}>{category}</CategoryItem>;
        })}
      </Category>
      <SideBarTitle>FOLLOW US</SideBarTitle>
      <SocialMediaContainer>
        <FacebookOutlined className="SiderIcon" />
        <Instagram className="SiderIcon" />
        <Twitter className="SiderIcon" />
        <Pinterest className="SiderIcon" />
      </SocialMediaContainer>
    </SideBarContainer>
  );
}

export default SideBar;
