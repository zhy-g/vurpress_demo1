## 快速上手

### 全局安装
----
<p>如果只是想尝试一下VuePress, k可以试一下全局安装</p>

```
    # 安装
    npm install -g vuepress / yarn global add vuepress

    # 创建项目目录
    mkdir vuepress-starter && cd vuepress-starter

    # 新建一个 markdown 文件
    echo '# Hello VuePress!' > READNE.md

    # 开始写作
    vuepress dev .

    # vuepress build
```
### 现有项目
```
    将VuePress作为一个本地依赖安装
    yarn add -D vuepress # 或者: npm install -D vuepress # 或者: npm install vuepress --save

    # 新建一个 markdowm 文件
    echo '# Hello VuePress!' > docs/README.md

    # 开始运行
    npm run docs:dev
```

```
{
    "script":{
        "docs:dev": vuepress dev docs,
        :
    }
}
```