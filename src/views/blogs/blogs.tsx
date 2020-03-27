/**
 * @file allenve
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

import * as React from 'react';
import './blogs.less';
// import urlMd from '../../assets/md/url.md';

const Blogs: React.FC = () => {
    const list = [
        {
            title: '从输入URL到页面加载完成发生了什么?',
            // md: urlMd
        },
        {
            title: '跨域'
        }
    ]
    return (
        <div className="app-blogs">
            <ul className="app-blogs-ul-wrapper">
                {
                    list.map((item, index) => {
                        return (
                            <li><a key={index}>{item.title}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Blogs;
