import React, {useState} from "react";
import styled from "styled-components";

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`


const LoginForm = ({onFormSubmit}) => {

    const [stateUsername, setUsername] = useState("");
    const [stateEmail, setEmail] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const login = {username: stateUsername, email: stateEmail};
        onFormSubmit(login);
    };


    return (

        <>
        <form onSubmit={handleLoginSubmit}>
            <InputsContainer>
                <input type="text" placeholder="User Name" value={stateUsername} onChange={handleUsername}/>
                <input type="text" placeholder="E-mail" value={stateEmail} onChange={handleEmail}/>
                <input className="btn" type="submit" value="Submit"/>
            </InputsContainer>
        </form>
        </>

    )
}

export default LoginForm;