/**
 * @file types
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

export interface BlogsRouterInfo {
    id: string;
}

export interface BlogsDetailProps {
    key?: number;
    title?: string;
}

export interface BlogListProps {
    title?: string;
    id: number;
    lastModified: string;
}

export interface CosContentProps {
    Key?: string;
    LastModified: string;
}
