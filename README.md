# know-share
### 项目搭建 、使用的技术
     vue全家桶
### 分析项目、要实现的需求
    创建路由：
    用户请求某页面，根据分析请求url，‘指挥’显示哪个页面
    
    ui框架： ElementUI

   
    用不用vuex? 一般不是特别复杂的项目不会用。但是基于分析 有 一些用户信息 贯穿始终 耦合度比较高 so vuex进行统一管理吧

    分析每个页面结构：
    根据每个页面的分布情况，可以优先考虑有没有公共部分，每个页面的公共部分可以被提取出来作为单独的组件
    公共部分：
    header（头部） 
    footer（底部）


    功能业务分析： 
    大体可以分为对用户信息的处理(注册（增）、登录、登出) 和 对 文章的处理（创建、编辑、删除、查询）
    
    封装数据请求接口：
     那每一个功能实现都离不开 请求后台并返回最新数据，经常用到 request, so 封装数据请求接口，方便多处调用

    封装api接口
    主要对用户、文章分别做统一功能处理




    

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
"# share-konw" 
