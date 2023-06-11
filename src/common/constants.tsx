import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
    {
        label:'余额监控',
        key:'/pay-monitor',
        icon:<PieChartOutlined />,
        children: [
            {
                label: '账户余额监控',
                key:'/pay-monitor/account',
            },
            {
                label: '单位余额监控',
                key:'/pay-monitor/unit',
            }
        ]
    },
    {
        label:'交易监控',
        key:'/transaction-monitor',
        icon:<PieChartOutlined />,
        children: [
            {
                label: '交易明细监控',
                key:'/transaction-monitor/detail',
            },
            {
                label: '境外交易明细监控',
                key:'/transaction-monitor/os-detail',
            }
        ]
    },
    {
        label:'监控配置',
        key:'/monitor-set',
        icon:<PieChartOutlined />,
        children: [
            {
                label: '监控配置',
                key:'/monitor-set/setting',
            }
        ]
    }
]