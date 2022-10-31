// login
import React from 'react';
import AuthTemplate from '../Components/auth/AuthTemplate';
import AuthForm from '../Components/auth/AuthForm';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  return(
    <div id="main" className="wrapper style0">
        <header className="major">
            <h2>Login</h2>
        </header>
        <AuthTemplate>
            <LoginForm type='login' />
        </AuthTemplate>
    </div>
  );
};

export default LoginPage;