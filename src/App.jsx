import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import Register from "./pages/registration/Register";

import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import SinglePost from "./pages/single/SinglePost";
import ProtectedRoute from "./ProtectedRoute";

function App() {
    const [user, setUser] = useState(false);
    return (
        <div className="App">
            <NavBar user={user} setUser={setUser}/>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Posts/>}/>
                    <Route path="/post/:post_id" element={<SinglePost/>}/>
                </Route>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login setUser={setUser}/>}/>
                <Route path="/setting" element={<Settings/>}/>
                <Route path="/publish" element={<ProtectedRoute user={user}>
                    <Write/>
                </ProtectedRoute>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>

        </div>
    );
}

export default App;
