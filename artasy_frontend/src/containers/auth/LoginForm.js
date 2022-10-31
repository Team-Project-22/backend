// useEffect, useState import
import React, {useEffect, useState} from 'react';
// useSelector, useDispatch import
import { useDispatch, useSelector } from 'react-redux';
// auth module 액션 생성함수 import
import { changeField, initializeForm, login } from '../../modules/auth';
// AuthForm import
import AuthForm from '../../Components/auth/AuthForm'

import { check } from '../../modules/user';
import { useNavigate } from "react-router-dom";


const LoginForm = ({history}) => {
    const [ error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form,auth, authError, user } = useSelector( ({ auth,user }) => ( {
        form : auth.login,
        auth:auth.auth,
        authError: auth.authError,
        user:user.user
    }));
    // input change event 로 액션 디스패치. 디스패치 : 액션을 발생시키는 것.
    const onChange = e => {
        const { value, name } = e.target;
        // 액션 생성 함수 import
        dispatch(
            changeField({
                form:'login',
                key:name,
                value
            })
        );
    };
    // form submit event
    // form submit event 로 login 함수에 현재 username, password 를 파라미터로 넣어서 액션 디스패치. 
    // 사가에 대한 API 요청 처리후, 이에 대한 결과를 auth/authError 를 통해 조회
    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form ;
        // login 함수 디스패치
        dispatch(login({username, password}));
    }
    // 컴포넌트 초기 렌더링시 form 초기화
    useEffect(()=>{
        // 액션 생성 함수 import
        dispatch(initializeForm('login'));
    },[dispatch]);

    useEffect(()=>{
        if (authError){
            console.log('오류 발생');
            console.log(authError);
            setError('로그인 실패. 아이디 또는 비밀번호를 확인해주세요.')
            return;
        }
        if (auth){
            console.log('로그인 성공')
            // login 성공하면 check 디스패치
            dispatch(check());
        }
    },[auth,authError, dispatch])

    const navigate = useNavigate();
    useEffect(()=>{
        if (user){
            // user 값이 제대로 들어갔으면 인덱스 페이지로
            navigate('/');
        }
    },[history,user]);



    return (
        
       <AuthForm
       type="login"
       form={form}
       onChange={onChange}
       onSubmit={onSubmit} 
       // error props add
       error={error}
       />
    );
};

// withRouter 로 컴포넌트 감싸기
export default LoginForm;