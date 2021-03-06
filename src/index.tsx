import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RootStore} from './store'

const rootStore = new RootStore();

const stores = {
    categoryStore: rootStore.categoryStore
}

ReactDOM.render(
    <React.StrictMode>
        <Provider {...stores}>
            <App/>
        </Provider>
    </React.StrictMode>,

    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
