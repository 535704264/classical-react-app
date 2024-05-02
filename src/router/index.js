import {createBrowserRouter, Navigate} from 'react-router-dom'
import Main from '../pages/main' // 
import Home from '../pages/home' // 
import Mall from '../pages/mall' // 
import User from '../pages/user' // 
import PageOne from '../pages/other/pageOne' // 
import PageTwo from '../pages/other/pageTwo' // 


const routes = [
    {
        path: '/',
        Component: Main, // 主路由
        children: [ // 子路由
            // 重定向, 当访问根路径，跳转到home
            {
                path: '/',
                element: <Navigate to="home" replace/>
            },
            {
                path: 'home',
                Component: Home,
            },
            {
                path: 'user',
                Component: User,
            },
            {
                path: 'mall',
                Component: Mall,
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'pageOne',
                        Component: PageOne,
                    },
                    {
                        path: 'pageTwo',
                        Component: PageTwo,
                    }
                ]
            },
        ]
    }
]

export default createBrowserRouter(routes)