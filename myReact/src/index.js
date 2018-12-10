import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/reset.css';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
