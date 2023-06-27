import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post";
import Profile from "./components/profile";

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Link to="">Home</Link>
                <br />
                <Link to="posts">Posts</Link>
                <br />
                <Link
                    to={{
                        pathname: "profile",
                        hash: "#yash",
                        search: "?profile=true",
                    }}
                >
                    Profile
                </Link>
                <br />
                <br />
                <hr />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="posts" element={<Post />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
