import styled from "styled-components";
import "./navbar.css";

import { Pinterest, Search, Twitter } from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, NavLink } from "react-router-dom";
// import profileImg from "../../images/271871166_2044402485734007_7144193533059826889_n.jpeg";

<style></style>;
const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10000;
`;
const Wrapper = styled.div`
  width: min(92%, 92.2vw);
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
const NavRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  padding: 1px;
`;
const NavCenter = styled.div`
  flex: 6;
`;
const NavLeft = styled.div`
  flex: 3;
  & > * {
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;
const BlogContacts = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 0 5px;
  @media screen and (max-width: 480px) {
    margin: 5px 0;
    margin-left: 5px;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    margin: 5px 0;
    margin-left: 5px;
    justify-content: space-around;
  }
`;
const BlogContact = styled.li`
  text-decoration: none;
  flex: 1;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  & > a {
    text-decoration: none;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const ImgContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const SearchContainer = styled.div`
  width: 70%;
  height: 30px;
  margin: auto;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  @media screen and (max-width: 768px) {
    margin-left: 5px;
  }
`;
const SearchInput = styled.input`
  height: 100%;
  border: none;
  &:focus {
    outline: none;
    &::placeholder {
    }
  }
`;

function NavBar({ auth, setAuth, user }) {
  return (
    <Container>
      <Wrapper>
        <NavLeft>
          <FacebookOutlinedIcon className="NavIcon" />
          <InstagramIcon className="NavIcon" />
          <Twitter className="NavIcon" />
          <Pinterest className="NavIcon" />
        </NavLeft>
        <NavCenter>
          <BlogContacts>
            <BlogContact>
              {" "}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "active" : "in-active"
                }>
                HOME
              </NavLink>
            </BlogContact>
            <BlogContact>
              {" "}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : "in-active"
                }>
                ABOUT
              </NavLink>
            </BlogContact>
            <BlogContact>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : "in-active"
                }>
                CONTACT
              </NavLink>
            </BlogContact>
            <BlogContact>
              <NavLink
                to="/publish"
                className={({ isActive }) =>
                  isActive ? "active" : "in-active"
                }>
                PUBLISH
              </NavLink>
            </BlogContact>
            {auth && (
              <BlogContact onClick={() => setAuth(false)}>LOGOUT</BlogContact>
            )}
          </BlogContacts>
        </NavCenter>
        <NavRight>
          {auth ? (
            <ImgContainer>
              <img src={user.profilePics} alt="" className="profileImage" />
            </ImgContainer>
          ) : (
            <BlogContacts>
              <BlogContact>
                <Link to="login"> LOGIN</Link>
              </BlogContact>
              <BlogContact style={{ marginLeft: "5px" }}>
                <Link to="register"> REGISTER</Link>
              </BlogContact>
            </BlogContacts>
          )}
          <SearchContainer>
            <SearchInput placeholder="Search...." />
            <Search className="searchIcon" />
          </SearchContainer>
        </NavRight>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
