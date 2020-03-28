/**
 * @file blogs-detail
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

import * as React from 'react';
import { RouteComponentProps } from "react-router-dom"
import {BlogsDetailProps, BlogsRouterInfo} from '@types';

const BlogsDetail: React.FC<BlogsDetailProps & RouteComponentProps<BlogsRouterInfo>> = ({match}) => {
    const id: string = match.params.id

    return (
        <div>test: {id}</div>
    )
};

export default BlogsDetail;
