import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles/LoginPageStyled";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // 로그인 성공
                const user = userCredential.user;
                console.log("Logged in user:", user);
                navigate("/write");
            })
            .catch((error) => {
                // 로그인 실패
                console.error("Login error:", error);
                alert("다시 한번 확인해주세요.");
            });
    };

    return (
        <Container>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </Container>
    );
}

export default Login;
