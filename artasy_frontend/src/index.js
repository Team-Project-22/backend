import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import ScrollToTop from './Components/ScrollToTop';

import {createStore} from "redux"
import { Provider } from "react-redux"; // 추가
import { composeWithDevTools } from "redux-devtools-extension";
// createSagaMiddleware import
import createSagaMiddleware from 'redux-saga'
// root Saga import
import rootReducer, {rootSaga} from './modules/index';
import { applyMiddleware } from "redux"


// saga middleware 생성
const sagaMiddleware = createSagaMiddleware();
// root Saga import 
const root = ReactDOM.createRoot(document.getElementById('root'));
// store 적용
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// saga 실행
sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <ScrollToTop /> */}
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
