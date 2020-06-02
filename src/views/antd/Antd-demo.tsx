/**
 * @file antd-demo.tsx 
 *
 * @author allenve(allenve.fe@gmail.com)
 * @created: 2020/06/02
 */

import * as React from 'react';
import { Button, Timeline } from 'antd';
import './antd-demo.less';

interface ItemProps {
    name: string;
    mode?: string;
};
interface DataProps {
    label: string;
    value: ItemProps[]
};

const COLORS: string[] = [
    '#108cee',
    '#545fc8',
    '#f38900',
    '#ea2e2e',
    '#8a58bc',
    '#5fb333',
    '#fbbe04',
    '#04c1ba',
    '#0a7eb4',
    '#304069'
];

export const AntdDemo: React.FC = () => {

    const data: DataProps[] = [
        {
            label: '2020-01',
            value: [
                {name: '快照商用', mode: 'CDS'},
                {name: '关机不计费取消白名单', mode: 'BCC'},
                {name: '部署集取消白名单', mode: 'BCC'}
            ]
        },
        {
            label: '2020-02',
            value: [
                {name: 'AS技术栈升级', mode: 'AS'}
            ]
        },
        {
            label: '2020-03',
            value: [
                {name: 'DCC服务器创建页重构/改版', mode: 'DCC'},
                {name: '快照商用提示', mode: 'BCC/CDS'},
                {name: 'ARM云服务器', mode: 'BCC'},
                {name: 'BCC订单确认页优化', mode: 'BCC'},
                {name: 'BBC创建子网优化', mode: 'BBC'}
            ]
        },
        {
            label: '2020-04',
            value: [
                {name: 'CDS系统盘容量计费', mode: 'BCC/CDS/COS/AS'},
                {name:　'BCC套餐支持筛选', mode: 'BCC'}
            ]
        },
        {
            label: '2020-05',
            value: [
                {name: '更换console引流链接', mode: 'BCC'},
                {name: 'BCC/DCC/CDS模块升级', mode: 'BCC/DCC/CDS'},
                {name: '虚机新增关机中状态', mode: 'BCC'}
            ]
        },
        {
            label: '2020-06',
            value: [
                {name: '实例级别快照', mode: 'BCC/CDS'}
            ]
        }
    ];

    return (
        <div className="antd-demo">
            <h3>Antd Demo</h3>
            <div className="wrapper">
                <Button>按钮</Button>
                <div className="timeline-wrapper">
                    <Timeline mode="left">
                        {
                            data.map((item, i) => {
                                return (
                                    <Timeline.Item label={item.label} color={COLORS[i]} key={i}>
                                        {
                                            item.value.map((row, index) => {
                                                return (
                                                    <span className="item-detail" key={index}>
                                                        <span className="item-detail-mode">{row.mode}</span>
                                                        <span className="item-detail-item">{row.name}</span>
                                                    </span>
                                                )
                                            })
                                        }
                                    </Timeline.Item>
                                )
                            })
                        }
                    </Timeline>
                </div>
            </div>
        </div>
    )
};

export default AntdDemo;
