import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './main.css'

// 路由组件
import Index from "./common";
import ErrorPage from "./common/error-page.tsx";
import {Root, loader as rootLoader, action as rootAction} from "./common/root";
import {ContactDetail, loader as contactLoader, action as contactAction} from "./contact/detail";
import {EditContact, action as editAction} from "./contact/edit";
import {action as destroyAction} from "./contact/destroy";

// 创建路由器
const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
        {
            errorElement: <ErrorPage/>,
            children: [
                {index: true, element: <Index/>},
                {
                    path: "contacts/:contactId",
                    element: <ContactDetail/>,
                    loader: contactLoader,
                    action: contactAction,
                },
                {
                    path: "contacts/:contactId/edit",
                    element: <EditContact/>,
                    loader: contactLoader,
                    action: editAction,
                },
                {
                    path: "contacts/:contactId/destroy",
                    action: destroyAction,
                    errorElement: <div>删除失败！</div>,
                },
            ],
        },
    ],
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
