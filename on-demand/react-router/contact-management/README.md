# 学习官方教程 “联系人管理” 程序<!-- omit in toc -->

## 目录<!-- omit in toc -->

- [1. 初始化项目](#1-初始化项目)

## 1. 初始化项目

执行脚手架命令

```shell
$ npm create vite@latest

✔ Project name: … contact-management
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /xxx/contact-management...

Done. Now run:

  cd contact-management
  npm install
  npm run dev
```

安装依赖

```shell
$ cd contact-management
$ npm install react-router-dom localforage match-sorter sort-by
```

启动项目

```shell
$ npm run dev

> contact-management@0.0.0 dev
> vite

  VITE v4.4.9  ready in 223 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
