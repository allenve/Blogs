/**
 * @file App.tsx
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Blogs from './blogs/blogs';
import BlogsDetail from './blogs/partial/blogs-detail';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="main">
                <div className="nav">
                    <ul>
                        <li><Link to='/'>博客</Link></li>
                        <li><Link to='/test1'>其他</Link></li>
                    </ul>
                </div>
                <div className="router-wrapper">
                    <Route exact path="/" component={Blogs}></Route>
                    <Route exact path="/blogs/:id" component={BlogsDetail}></Route>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
