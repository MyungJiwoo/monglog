import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Container } from "../styles/LoginPageStyled";

function Logout() {
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("User signed out");
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <Container>
            <button onClick={handleLogout}>Logout</button>
        </Container>
    );
}

export default Logout;
