import { lazy } from "react"
// import About from "@/pages/about"
import Home from "@/pages/home"
import { Navigate } from "react-router-dom"
import React from "react"
const About = lazy(() => import("../pages/about"))
const User = lazy(() => import("../pages/user"))
const MonitorSet = lazy(()=> import("../pages/monitorSet/index"))
const PayMonitorQuery = lazy(() => import("../pages/payMonitorQuery/index"))
const AccountMonitor = lazy(() => import("../pages/transMonitorQuery/accountMonitor"))
const UnitMonitor = lazy(()=>import("../pages/transMonitorQuery/unitMonitor"))
const TransMonitorQuery = lazy(() => import("../pages/transMonitorQuery/index"))
const DetailMinitor = lazy(() => import("../pages/payMonitorQuery/payDetailMonitor"))
const OverseasDetailMonitor = lazy(()=>import("../pages/payMonitorQuery/osPayDetailMonitor"))
const withLoadingComponent = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
)

const routes = [
    {
        path: '/',
        element:<Navigate to="/home" />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/pay-monitor',
                element: withLoadingComponent(<PayMonitorQuery />)
            },
            {
                path: '/pay-monitor/account',
                element: withLoadingComponent(<AccountMonitor />),
            },
           {
                path: '/pay-monitor/unit',
                element: withLoadingComponent(<UnitMonitor />),
            },
            {
                path: '/transaction-monitor',
                element: withLoadingComponent(<TransMonitorQuery />)
            },
            {
                path: '/transaction-monitor/detail',
                element: withLoadingComponent(<DetailMinitor />),
            },
            {
                path: '/transaction-monitor/os-detail',
                element: withLoadingComponent(<OverseasDetailMonitor />),
            },
            {
                path: '/monitor-set',
                element: withLoadingComponent(<MonitorSet />),
            },
            {
                path: '/monitor-set/setting',
                element: withLoadingComponent(<MonitorSet />), 
            }
        ],
    }, 
    {
    path:"*",
    element:<Navigate to="/pay-monitor'"/>
  },
]

export default routes