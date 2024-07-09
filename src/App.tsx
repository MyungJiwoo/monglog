import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";

const App: React.FC = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/posts" Component={PostsPage} />
                <Route path="/detail" Component={DetailPage} />
                <Route path="/about" Component={AboutPage} />
                <Route path="/" Component={MainPage} />
            </Routes>
        </Router>
    );
};

export default App;
