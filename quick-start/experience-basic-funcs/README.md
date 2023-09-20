# 体验 React 的基本功能<!-- omit in toc -->

- [1. 创建和嵌套组件](#1-创建和嵌套组件)
- [2. 添加样式](#2-添加样式)
- [3. 显示数据](#3-显示数据)

## 1. 创建和嵌套组件

React 应用程序是由组件组成的，React 组件是返回标记的 JavaScript 函数。

```JavaScript
// Header.js
export default function Header() {
    return (
        <div className="Header">
            Header
        </div>
    );
};
```

使用类似 `<Header />` 的方式在组件中引用另外的组件。React 组件名称必须始终以大写字母开头，而 HTML 标签必须小写。

```JavaScript
// App.js
export default function App() {
    return (
        <div className="App">
            <Header />
            App
        </div>
    );
};
```

上述的标记语法称为 JSX，它比 HTML 更严格。必须关闭诸如 `<br />` 之类的标签。组件不能返回多个 JSX 标记，必须将它们包装到父级中，例如一个 `<div>...</div>` 或一个空 `<>...</>` 包装器：

```JavaScript
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

## 2. 添加样式

在 React 中，可以使用 `className` 来添加类名，它的工作方式与 HTML 的 `class` 属性相同。然后在单独的 CSS 文件中为其编写 CSS 规则：

```JavaScript
// Avatar.js
import './avatar.css';
export default function Avatar() {
    return (
        <img className="avatar" />
    );
};
```

```css
/* avatar.css */
.avatar {
  border-radius: 50%;
}
```

在 React 中，没有内置的类似于 Vue 的 `scoped` 属性的直接将样式限定在组件作用域内的功能。可以使用 `CSS Modules` 来实现类似的功能：

```JavaScript
// Avatar.js
import styles from './avatar.module.css';
export default function Avatar() {
    return (
        <img className={styles.avatar} />
    );
};
```

```css
/* avatar.module.css */
.avatar {
  border-radius: 50%;
}
```

```html
<!-- 编译后如下 -->
<img class="avatar_avatar__1RS4G" />
```

## 3. 显示数据

JSX 允许将标记放入 JavaScript 中。大括号让您 “转回” JavaScript，这样您就可以从代码中嵌入一些变量并将其显示给用户，以下演示文本、普通属性，以及特别的 style 属性：

```JavaScript
const user = {
    name: 'itabbot',
    imageUrl: '/logo.png',
    imageSize: 192,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}
```
