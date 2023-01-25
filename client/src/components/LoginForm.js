import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: baseline;
`


const LoginForm = ({onFormSubmit}) => {
    const navigate = useNavigate();

    const [stateEmail, setEmail] = useState("");
    const [statePassword, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const login = {email: stateEmail, password: statePassword};
        onFormSubmit(login);
        navigate('/discover');
    };


    return (

        <>
        <form onSubmit={handleLoginSubmit}>
            <InputsContainer>
                <input type="email" placeholder="Email" value={stateEmail} onChange={handleEmail} required/>
                <input type="password" placeholder="Password" value={statePassword} onChange={handlePassword}/>
                <input className="btn" type="submit" value="Submit" required/>
            </InputsContainer>
        </form>
        </>

    )
}

export default LoginForm;