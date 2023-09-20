# 使用官方脚手架创建一个 React 项目

## 1. 创建项目

1. 安装项目： 执行以下命令，将创建一个项目目录，包含基本的 React 项目结构，并自动安装依赖。

```shell
$ npx create-react-app create-react-app
```

2. 启动开发： 执行以下命令，进入目录并启动开发服务，且会自动打开 `http://localhost:3000`，修改代码后会实时更新。

```shell
$ cd create-react-app
$ npm run start
```

3. 编译项目： 执行以下命令，会编译项目代码并输出到 `./build` 文件夹中。

```shell
$ npm run build
```

## 2. 理解

1. React 脚手架中默认预设并隐藏了 webpack、Babel 等工具，以便可以专注于代码。
2. 文件 `./src/index.js` 是项目的入口点。
