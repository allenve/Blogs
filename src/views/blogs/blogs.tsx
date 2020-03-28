/**
 * @file allenve
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import COS from 'cos-js-sdk-v5';
import { cosKey, BucketConf } from '../../assets/config';
import {CosContentProps, BlogListProps} from '@types';
import './blogs.less';

const { useState, useEffect } = React;

const Blogs: React.FC = () => {
    const cos = new COS(cosKey);
    const [ list, setList] = useState([]);

    const getBucketListData = (): void => {
        cos.getBucket(BucketConf, ((err: any, data: any) => {
            const contents: CosContentProps[] = data.Contents;
            setList(contents.map((item: CosContentProps, index: number) => ({title: item.Key, id: index})));    
        }));
    }

    useEffect(() => {
        getBucketListData()
    }, ['list']);

    return (
        <div className="app-blogs">
            <ul className="app-blogs-ul-wrapper">
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}><Link to={`/blogs/${item.id}`}>{item.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Blogs;
