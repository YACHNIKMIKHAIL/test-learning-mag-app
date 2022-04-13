import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {Provider} from "react-redux";
import {store} from "./App/store";

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
        <Provider store={store}>
            <App/>
        </Provider>
);