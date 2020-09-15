# winning-micro-frontend-template
卫宁大HIS微前端项目模板

## 项目结构
```
project/
    ┣━ packages/ 
    ┃     ┣━ package-1/ 微应用子项目
    ┃     ┃      ┣━ ...
    ┃     ┃      ┗━ package.json
    ┃     ┣━ package-2/ 微应用子项目
    ┃     ┃      ┣━ ...
    ┃     ┃      ┗━ package.json
    ┃     ┗━ package-3/
    ┃            ┣━ ...
    ┃            ┗━ package.json
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

安装所有packages的依赖
```
lerna bootstrap
```

### 启动开发服务器
```
npm run serve
```

随后访问： http://localhost:8080

### 新建子项目

```
wms create vue <projectName>
```

### 构建生产版本
```
npm run build
```

### Service.config.js配置

此文件是用来配置项目相关测试数据和应用打包位置。当前使用脚手架命令新建子应用时，脚本会重写此文件。

```js
module.exports = {
  build: {
    dist: 'dist',  //生产包存放目录
    packages: 'packages' //子应用父文件夹
  },
  data: { //当前项目菜单配置
    applicationList: [ //只写入一个object
      {
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
    ],
    currentAppId: '4302708202' //当前系统的id（需与applicationList中的第一个appSystemId对应）
  }
}

```