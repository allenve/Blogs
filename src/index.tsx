/**
 * @file index.tsx 
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

import * as React from 'react';
import * as ReactDOM from "react-dom";

import './assets/style/reset.css';
import './assets/style/app.less';

import App from './views/App';

ReactDOM.render(
    <App />,
    document.getElementById('App')
);
