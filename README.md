# 林义凯的博客

### [浏览博客 →](http://externie.github.io/externieblog)

## 文档

#### 环境

如果你安装了jekyll（这是一款很简单的搭建静态网站以及个人博客的工具），在终端中输入 jekyll serve
注意⚠️//:在EI Capitan中安装jekyll的命令为 sudo gem install -n /usr/local/bin jekyll

#### 开始

你可以修改 `_config.yml`:

``` 
# Site settings
title: externIE’s Blog
SEOTitle: 林义凯的博客|externIE's Blog
header-img: img/common/home-bg.jpg
email: daiweilai@foxmail.com
description: "在这里探索iOS的一切。"
keyword: "林义凯, 林义凯的博客, externIE, externie, linyikai, lyk, 义凯, 个人博客, 个人网站, 技术博客, iOS, Cocoa, Apple, WWDC, iPone, develop, 移动开发, APP, 设计模式, 最佳实践"
url: "http://externie.github.io"              # your host, for absolute URL
baseurl: "/externieblog"                             # for example, '/blog' if your blog hosted on 'host/blog'



# SNS settings
RSS: true
weibo_username:     ielinyikai
#zhihu_username:     externIE
github_username:    externIE
#twitter_username:  daiweilai
#facebook_username:  daiweilai



# Build settings
gems: [jekyll-paginate]
#highlighter: pygments
permalink: pretty
paginate: 10
exclude: ["less","node_modules","Gruntfile.js","package.json","README.md"]
anchorjs: true                          # if you want to customize anchor. check out line:181 of `post.html`



# Markdown settings
# replace redcarpet to kramdown,
# although redcarpet can auto highlight code, the lack of header-id make the catalog impossible, so I switch to kramdown
# document: http://jekyllrb.com/docs/configuration/#kramdown
markdown: kramdown
kramdown:
  input: GFM                            # use Github Flavored Markdown !important



# Duoshuo settings
duoshuo_username: externIE # Share component is depend on Comment so we can NOT use share only.
duoshuo_share: true                     # set to false if you want to use Comment without Sharing




# Analytics settings
# Baidu Analytics
#ba_track_id: 4cc1f2d8f3067386cc5cdb626a202900
# Google Analytics
#ga_track_id: 'UA-49627206-1'            # Format: UA-xxxxxx-xx
#ga_domain: huangxuan.me



# Sidebar settings
sidebar: true                           # whether or not using Sidebar.
sidebar-about-description: "逼优鸡杀手"
sidebar-avatar: http://externie.github.io/img/common/avatar.jpg      # use absolute URL, seeing it's used in both `/` and `/about/`



# Featured Tags
featured-tags: true                     # whether or not using Feature-Tags
featured-condition-size: 0             # A tag will be featured if the size of it is more than this condition value



# Friends
#friends: [
#    {
#        title: "",
#        href: ""
#    },{
#        title: "",
#        href: ""
#    }
#]

```





#### 写博文

看看_post/目录下的文件你就知道该怎么写博文了，以后你写的博文都放在这里就行

下面是个例子

``` 
---
layout:     post
title:      "半年的iOS代码生活"
subtitle:   "加班的领悟"
date:       2015-11-11 12:00:00
speaker:     "externIE"
header-img: "img/post/2015-11-11-bg.jpg"
tags:
    - 闲暇集
---

内容...
```

#### 代码高亮

用 [Prism.js](http://prismjs.com/)，你可以轻易让代码高亮


## LICENSE

``` 
The MIT License (MIT)

Copyright (c) 2015 林义凯

版权什么的我不懂，随便吧
```

