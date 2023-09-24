import {JSX} from "react";
import {useRouteError, isRouteErrorResponse} from "react-router-dom";

// 错误页面组件
export default function ErrorPage(): JSX.Element {
    // 返回最近的祖先路由错误
    const error = useRouteError();
    console.error('路由错误：', error);

    // 识别错误消息
    let msg: string
    if (isRouteErrorResponse(error)) {
        msg = error.statusText
    } else {
        const err: Error = error as Error
        msg = err.message
    }

    return (
        <div id="error-page">
            <h1>哎哟！</h1>
            <p>对不起，发生了意想不到的错误。</p>
            <p>
                <i>{msg}</i>
            </p>
        </div>
    );
}