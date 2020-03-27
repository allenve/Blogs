/**
 * @file App.tsx
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import {AuditOutlined} from '@ant-design/icons';
import Blogs from './blogs/blogs';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="main">
                <div className="nav">
                    <ul>
                        <li><Link to='/'><AuditOutlined />博客</Link></li>
                        <li><Link to='/test1'>其他</Link></li>
                    </ul>
                </div>
                <div className="router-wrapper">
                    <Route exact path="/" component={Blogs}></Route>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
