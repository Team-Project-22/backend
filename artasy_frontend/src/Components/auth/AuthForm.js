import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Button component import
import Button from '../common/Button';

// 회원가입 or 로그인폼 보여줌.

const AuthFormBlock = styled.div`
    h3{
        margin: 0;
        margin-bottom: 1rem;
    }
`;

// button margin
const ButtonWithMarinTop = styled(Button)`
margin-top: 1rem;
`

// styled input

const StyledInput = styled.input`
    font-size:1rem;
    border:none;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color: $oc-teal-7;
    }
    /* Scss 에서 쓰는 요소가 서로 반복될 때 margin-top 을 줌 >>> input 과 input 사이에 margin-top 줌. */
    &+&{
        margin-top: 1rem;
    }
`
// 폼 하단에 회원가입 링크 style
const Footer = styled.div`
    margin-top:2rem;
    text-align : right;
    a {
        text-decoration:underline;
    }

`

// 에러 보여주는 UI
const ErrorMessage = styled.div`
    color:red;
    text-align:center;
    font-size: 0.875rem;
    margin-top: 1rem;
`

const Text = {
    textAlign:'center'
}


const textMap = {
    login:'로그인',
    register : '회원가입'
}

const AuthForm = ({type , form , onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            {/* // form onSubmit */}
            <form onSubmit={onSubmit}>
                {/* // input onChange,value */}
                <StyledInput 
                autoComplete="username" 
                name="username" 
                placeholder="아이디"
                type="email"
                onChange={onChange}
                value = {form.username}
                 />
                 {/* // input onChange,value */}
                <StyledInput 
                autoComplete="current-password" 
                name="password" 
                placeholder="비밀번호" 
                type="password"
                onChange={onChange} 
                value ={form.password}
                
                />
                {/* type 이 회원가입이면, 비밀번호 확인 인풋 추가 */}
                {type === 'register' &&(
                // input onChange,value
                        <StyledInput 
                         autoComplete="new-password" 
                         name="passwordConfirm" 
                         placeholder="비밀번호 확인" 
                         type="password" 
                         onChange={onChange}
                         value={form.passwordConfirm}
                        />
                    )
                }
                <ButtonWithMarinTop fullWidth>{text}</ButtonWithMarinTop>
            </form>
            <Footer>
                    {type === 'login' ? (
                        <pre style={Text}>계정이 없으신가요? <Link to="/register">회원가입</Link></pre>
                    ):(
                        <pre style={Text}>계정이 이미 있으신가요? <Link to="/login">로그인</Link></pre>
                    )
                }
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;