Tips : 参考B站 大圣的教程 
[手把手教你使用Github Action进行自动化部署前端项目](https://www.bilibili.com/video/BV1Ca411h7rx?spm_id_from=333.337.search-card.all.click)

##  1、deploy.doc

* 本地开发的代码=》 build成上线的dist包=》打包or scp命令上传到服务器
本地开发的代码=“构建成上线的Dist包=”打包或scp命令上传到服务器

* 服务器上的nginx配置好文件夹=》域名的配置文件(域名映射)
(服务器上的nginx配置好文件夹=“域名的配置文件(域名映射)

* github action支持push驱动，启动一小虚拟机，帮助我们跑build和scp的过程
GitHub action支持Push驱动，启动一小虚拟机，帮助我们跑Build和scp的过程


## 2、workflow_dispatch

1. 我们点击了action之后，会有很多的部署配置的所选的项目，这边我们部署的是一个vue的项目，所以我们会使用自己创建一个workflow的方式进行

>set up a workflow yourself，
点击上面的按钮创建完成之后，会进入到一个目录，名为 "项目名称/.github/workflows/main.yml"的路径下面进行修改我们相应的配置。
![workflow_dispatch](./noteimages/%E5%A4%A7%E5%9C%A3%20github%20action%20%E8%B5%84%E6%96%99/workflow_dispatch.png)



2. name.yml   


   yml为后缀名称是什么？其实是YAML的配置文件。

   YAML 是 "YAML Ain't a Markup Language"（YAML 不是一种标记语言）的递归缩写。在开发的这种语言时，YAML 的意思其实是："Yet Another Markup Language"（仍是一种标记语言）。

   YAML 的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、各种配置文件、倾印调试内容、文件大纲（例如：许多电子邮件标题格式和YAML非常接近）。

   YAML 的配置文件后缀为 **.yml**，如：**runoob.yml** 。

yml为后缀的名称是什么东西呢？可以参考下菜鸟教程:
[YAML 入门教程](https://www.runoob.com/w3cnote/yaml-intro.html)


* 在marketplace搜索node -> Setup Node.js environment,点击进入之后，Installation下有对应的配置的代码，可以进行copy后进行修改相应的。  这里用到的插件 node,scp
```yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.

```


### yml文件相应的字段：
    - biuld
        - run-ons

        - steps
            - uses
            - name
              uses
              with


### 具体的case
参照：[大圣的yml](https://github.com/shengxinjing/it-roadmap/actions/runs/1890874321/workflow)

# This is a basic workflow to help you get started with Actions

name: deploy

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
      - name: install Node.js
        uses: actions/setup-node@v2.5.0
        with:
          node-version: "14.X"
      - name: install dep
        run: npm install
      - name: build app
        run: npm run build
      - name: copy file via ssh password
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.REMOTE_HOST }}
          username: ${{ secrets.REMOTE_USER }}
          password: ${{ secrets.REMOTE_PASS }}
          port: 22
          source: "docs/"
          target: ${{ secrets.REMOTE_TARGET }}



### 设置相应的变量
* 模板所用到的变量存在以下位置: 
    actions -> setting -> Secrets -> Actions ->  Reponsitory secrets
    比如上方的变量  
    REMOTE_HOST
    REMOTE_USER
    REMOTE_PASS
    REMOTE_TARGET 等等
