// register
import React from 'react';
import AuthTemplate from '../Components/auth/AuthTemplate';
import AuthForm from '../Components/auth/AuthForm';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div id="main" className="wrapper style0">
        <header className="major">
            <h2>회원가입</h2>
        </header>
        <AuthTemplate>
            <RegisterForm type='register'/>
        </AuthTemplate>
        </div>
  );
};

export default RegisterPage;