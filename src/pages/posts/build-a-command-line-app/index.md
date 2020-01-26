---
title: Build A Command Line Application
date: '2020-01-25'
thumbnail: '../../../images/node.png'
featured: './featured.png'
categories:
  - node
tags:
  - javascript
  - node
---

JavaScipt can do a lot more than just work in the browser. With the help of _Node_ you can build your own powerful command line tools. I recently created my own CLI to speed up repetitive tasks at work. The project we build in this article be a small portion of that and will do a lot more than print "Hello World".

If you don't have _Node_ installed on your local machine download it [HERE](https://nodejs.org/en/).

The first thing needed is a folder to store your project code in.

```bash
mkdir node-cli
cd node-cli
```

Lets initialize this folder as an _NPM_ project and create a file to write some code in.

```bash
npm init -y
touch index.js
```

If any of the instructions above were unfamiliar or didn't work you might want to do some googling now and learn about _Node_, _NPM_ and the command line.

<img src="intro.gif" style="max-width:800px;" />
