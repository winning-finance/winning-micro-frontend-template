# winning-micro-frontend-template
卫宁大HIS微前端项目模板

## 项目结构
```
project/
    ┣━ modules/ 
    ┃     ┣━ module-1/ 微应用子项目
    ┃     ┃      ┣━ ...
    ┃     ┃      ┗━ main.js
    ┃     ┣━ module-2/ 微应用子项目
    ┃     ┃      ┣━ ...
    ┃     ┃      ┗━ main.js
    ┃     ┗━ module-3/
    ┃            ┣━ ...
    ┃            ┗━ main.js
    ┣━ ...
    ┣━ lerna.json //lerna配置文件
    ┗━ package.json 
    ┗━ service.config.js //项目配置文件，具体配置见下文

```

##项目开发流程

### 安装依赖

```
npm install
```

### 启动开发服务器
```
npm run serve
```

随后访问： http://localhost:8080

### 新建子项目

暂不支持（支持中...）

### 构建生产版本
```
npm run build
```

### Service.config.js配置

此文件是用来配置项目相关测试数据和应用打包位置。当前使用脚手架命令新建子应用时，脚本会重写此文件。

**注意：每次修改配置文件之后必须重新启动**

```js
module.exports = {
  vueConfig: {},
  loginPluginOptions: {
    appSystemId: '153614388663152641' // 基础业务管理系统
  },
  menu: {
    appSystemId: '4302708202', //系统id，随意设置即可
    appSystemName: '门诊费用管理', //系统名称
    appMenuList: [ //当前系统的菜单（即子应用相关配置）
      {
        name: 'project1', //子应用项目名
        appMenuId: '4302708264', //子应用id，不能重复
        appMenuRelativeUri: '/fee-management-outp/project1', //子应用地址
        appMenuName: '测试页面', //子应用中文名（显示在导航条中的菜单名）
        appMenuList: [], 
        devEntry: 'http://localhost:3003' //子应用开发模式下访问地址
      }
    ]
  }
}

```
