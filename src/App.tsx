import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Nav from "./components/Nav";
import AutoSave from "./pages/AutoSavePage";
import CreatePage from "./pages/CreatePage";

const App: React.FC = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/posts" Component={PostsPage} />
                <Route path="/detail/:uuid" Component={DetailPage} />
                <Route path="/about" Component={AboutPage} />
                <Route path="/write" Component={WritePage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="/logout" Component={LogoutPage} />
                <Route path="/autosave" Component={AutoSave} />
                <Route path="/create" Component={CreatePage} />
            </Routes>
        </Router>
    );
};

export default App;
