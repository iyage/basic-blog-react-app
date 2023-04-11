import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import Register from "./pages/registration/Register";

import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import SinglePost from "./pages/single/SinglePost";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";
import { allPosts, categories, users } from "./data/data";

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    setPosts(allPosts);
    setCategory(categories);
    setUserList(users);
  }, []);
  return (
    <div className="App">
      <NavBar auth={auth} setAuth={setAuth} user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <Home posts={posts} categories={category} auth={auth} user={user} />
          }>
          <Route index element={<Posts />} />
          <Route path="/post/:post_id" element={<SinglePost auth={auth} />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login setAuth={setAuth} userList={userList} setUser={setUser} />
          }
        />
        <Route path="/setting" element={<Settings />} />
        <Route
          path="/publish"
          element={
            <ProtectedRoute user={auth}>
              <Write />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
