import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({onFormSubmit}) => {



    return (
        <LoginForm onFormSubmit={onFormSubmit}/>
    )
}

export default LoginPage;