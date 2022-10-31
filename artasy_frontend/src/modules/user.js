import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createRequestActionType } from "../lib/createRequestSaga";

//액션 타입 정의
const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// 액션 타입 정의 함수 가져와서 한번에 적어주기
const [CHECK,CHECK_SUCCESS,CHECK_FAILURE ] = createRequestActionType(
    'user/CHECK',
);


// 액션 생성 함수
export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);


// saga 생성
const checkSaga = createRequestSaga(CHECK,authAPI.check);

export function* userSaga(){
     // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리 하고 가장 마지막으로 실행된 작업만 수행.
    yield takeLatest(CHECK,checkSaga);
};

// 초기 상태 정의
const initailState = {
    user: null,
    checkError: null
};


// 리듀서 함수
export default handleActions(
    {
        [TEMP_SET_USER]:(state, {payload: user}) =>({
            ...state,
            user,
        }),

        [CHECK_SUCCESS]:(state, {payload : user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]:(state, {payload : error }) => ({
            ...state,
            user: null,
            checkError: null,
        }),
    },
    initailState,
)