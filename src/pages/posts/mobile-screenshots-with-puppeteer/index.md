---
title: Mobile Screenshots With Puppeteer
date: '2020-02-08'
thumbnail: '../../../images/node.png'
featured: './featured.png'
categories:
  - node
tags:
  - javascript
  - node
---

Most experienced web developers are familiar with the term `responsive design`. With more and more users interacting with our websites from their phones, it is more important than ever to make sure your design renders correctly on mobile devices.

The other day at work my boss was clicking though our over 200 brand pages and checking the desktop and mobile versions. The kicker is that he was using both his desktop and his phone to do this. I shouldn't be too critical though, he isn't a developer, and our company pays out tons of money to _Google Ad Words_ in order to funnel customers to these brand pages. If they have broken image links or aren't sized properly it can negatively impact sales. That night I decided to a little _Node_ script to make his life a little easier. This tutorial will share the basic logic I used in my project for work and show you how to apply it to any site.

## Getting Started

To get started you will need _Node_ installed on your local machine. [Download Node Here]().

First, lets create a new directory for our project and initialize it with _NPM_. After running the commands below you should see `package.json` and `index.js` in your directory.

```bash
mkdir mobile-sceenshots
cd mobile-screenshots
npm init -y
touch index.js
```

Alternatively, you can clone or download my repository with the completed project.

```bash
git clone //TODO
```

Before we start coding lets install [Puppeteer](https://github.com/puppeteer/puppeteer). They have good documentation and I recommend you check it out.

```bash
npm install puppeteer
```

I like to think of _Puppeteer_ as allowing the programmer to control a web browser with code, almost like pulling the strings from behind the scenes. The creators of _Puppeteer_ describe it as follows.

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

## The Code

To keep things as simple as possible we will code this as a standalone _Node_ script. In reality, the version I use is part of a command line tool. Check out [Build A Command Line Tool With Node]() for information on that.

Open `index.js` and create a function that will encapsulate our functionality and allow us to use the `async/await` syntax. In my experience, using _Async/Await_ leads to more manageable and readable code.

```javascript
const puppeteer = require('puppeteer')
const path = require('path')

const main = async () => {
  const browser = await puppeteer.launch({ headless: false })

  await browser.close()
}

main()
```
