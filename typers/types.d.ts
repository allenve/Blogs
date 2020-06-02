/**
 * @file types
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/03/21
 */

interface BlogsRouterInfo {
    id: string;
}

interface BlogsDetailProps {
    key?: number;
    title?: string;
}

interface BlogListProps {
    title?: string;
    id: number;
    lastModified?: string;
}

interface CosContentProps {
    Key?: string;
    LastModified: string;
}
