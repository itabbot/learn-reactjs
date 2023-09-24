import {JSX} from "react";

export default function Index(): JSX.Element {
    return (
        <p id="zero-state">
            这是 React Router 的一个 “联系人管理” 演示项目。
            <br/>
            请参阅 {" "}
            <a href="https://reactrouter.com">reactrouter.com</a>
            {" "}上的文档。
        </p>
    );
}