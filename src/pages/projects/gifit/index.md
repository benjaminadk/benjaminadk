---
title: GifIt
description: Record from your desktop, webcam or white board
thumbnail: '../../../images/gifit.png'
source: 'https://github.com/benjaminadk/gifit'
---

[GifIt]() is a desktop application that allows users to record _GIFs_ from their desktop, webcam or a built in white board. This application is built with [Electron](), [React]() and [Node]() and is available Windows. My goal was to reverse engineer [ScreenToGif](), a popular application built with _.NET_ and written in _C#_. I was able to build features by playing around with the original version and through a lot of trial and error. This project is not meant for distribution, but is a showcase of my problem solving skills and general _JavaScript_ ability.

One benefit of using _Electron_ as a desktop framework is the ability to create and manage multiple windows via the `BrowserWindow` api. When the app loads the user is shown a _BrowserWindow_ displaying various features.

<img src="gifit-1.png">

The _Recorder_ is designed to capture desktop content.
