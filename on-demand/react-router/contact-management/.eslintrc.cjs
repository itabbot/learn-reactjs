module.exports = {
    // 此配置文件是项目的根配置文件，ESLint将停止在父级目录中查找更多的配置文件
    root: true,
    // 代码运行环境设置项
    env: {
        // ESLint将会启用全局变量，这些全局变量是在浏览器环境中可用的
        browser: true,
        // ESLint将会启用ES2020到ES5的所有语法，包括例如Promise等全局变量
        es2020: true,
    },
    // 扩展的规则
    extends: [
        // ESLint将使用一组核心规则，这些规则被ESLint团队认为是所有JavaScript项目都应该遵循的
        'eslint:recommended',
        // ESLint将使用一组TypeScript特有规则，这些规则由TypeScript ESLint插件提供
        'plugin:@typescript-eslint/recommended',
        // ESLint将使用一组React Hooks特有规则，这些规则由React Hooks ESLint插件提供
        'plugin:react-hooks/recommended',
    ],
    // ESLint将忽略这些文件夹或文件中的代码
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    // ESLint将使用'@typescript-eslint/parser'作为解析器，以便理解TypeScript代码
    parser: '@typescript-eslint/parser',
    // ESLint将加载'react-refresh'插件，此插件可以提供一些特定的规则
    plugins: ['react-refresh'],
    // 定义和配置具体规则
    rules: {
        // 这是'react-refresh/only-export-components'规则的配置选项，
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true}, // 允许常量导出
        ],
    },
}
