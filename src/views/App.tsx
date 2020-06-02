/**
 * @file App.tsx
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

import * as React from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import Blogs from './blogs/blogs';
import BlogsDetail from './blogs/partial/blogs-detail';
import AntdDemo from './antd/Antd-demo';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="main">
                <div className="nav">
                    <ul>
                        <li><NavLink to='/' exact activeClassName="active">博客</NavLink></li>
                        <li><NavLink to='/antd'>Antd Demo</NavLink></li>
                    </ul>
                </div>
                <div className="router-wrapper">
                    <Route exact path="/" component={Blogs} />
                    <Route exact path="/antd" component={AntdDemo} />
                    <Route exact path="/blogs/:id" component={BlogsDetail} />
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
