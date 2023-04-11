import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header";
import SideBar from "../siderbar/SideBar";

const HomeContainer = styled.div`
  display: flex;
  width: 98vw;
  margin: auto;
  margin-top: 30px;
`;

function Home({ posts, categories, auth, user }) {
  let params = useParams();

  return (
    <>
      {!params.post_id ? <Header /> : ""}
      <HomeContainer>
        <Outlet context={[posts, auth, user]} />
        <SideBar categories={categories} />
      </HomeContainer>
    </>
  );
}

export default Home;
