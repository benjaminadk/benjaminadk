---
title: GifIt
description: Record from your desktop, webcam or white board
thumbnail: '../../../images/gifit.png'
source: 'https://github.com/benjaminadk/gifit'
---

[GifIt](https://github.com/benjaminadk/gifit) is a desktop application that allows users to record _GIFs_ from their desktop, webcam or a built in white board. This application is built with [Electron](https://electronjs.org/), [React](https://reactjs.org/) and [Node](https://nodejs.org/en/) and is available for Windows (there is a MacOS version compiled in the repository but I haven't been able to test it yet.) My aim for this project was to reverse engineer [ScreenToGif](https://www.screentogif.com/), a popular application built with _.NET_ and written in _C#_. I was able to build features by playing around with the original version and through a lot of trial and error. This project is not meant for distribution, but is a showcase of my problem solving skills and general _JavaScript_ ability.

<div class='center'>
<img src='minesweeper.gif'>
</div>

---

## Desktop Recorder

The _Desktop Recorder_ captures a series of images that can later be editted an encoded into a _GIF_. Possible use cases of this feature are to display the use an interactive component, record an animation or to demonstrate a step by step tutorial. Recently, I designed my own version of the classic game [Minesweeper](/visualizations/minesweeper). The _Desktop Recorder_ allows me to select the specific region of the screen I want to record so I can show off my skills as both a developer and as a sweeper of mines.

<div class='center'>
<img src="recorder-1.gif" style='max-width: 800px;'>
</div>

Images are captured by using `setInterval` to repeatedly fire a function at a user set framerate. The _Electron_ `desktopCapturer` exposes a video stream which is sent through an _HTML_ video element and drawn to a _Canvas_ element. The _Canvas_ API has a `toDataURL` method which is used to get the image data on each iteration of the interval. A reference to the `setInterval` is stored in a _React_ `ref` so the recording process can be paused and resumed. The image data is stored in an [Immutable]() list until the recording process is stopped. As each frame is captured the recorder also keeps track of the elapsed time and can listen for mouse and keyboard events. Each frame of the image data is saved as a _PNG_ file in a new project directory. A _JSON_ file containing important data such as the width, height and date of the recording as well as the filename, duration and user input data from each frame is also saved to the project directory. When the recording stops the _JSON_ and _PNG_ files are wrote to disk using standard _Node_ APIs.

---

## Editor

The _Editor_ has a multitude of features. This is where the image files collected by the various recorders can be editted, deleted or encoded into a _GIF_. When a recording ends the _Editor_ automatically opens a new project. The layout is intuitive with a row of thumbnails acting as navigation at the bottom of the page. The main portion of the screen is where the current image is displayed. The top of the _Editor_ uses a ribbon style menu with multiple tabs each containing multiple commands. Most of these commands require some degree of user input and interaction which takes place in an animated drawer that slides in and out from the right hand side of the screen. Other basic features include playback controls and zoom.

<div class='center'>
<img src="editor-1.gif" style='max-width: 800px;'>
</div>

---

### Selection

Many of the _Editor_ features involve manipulating one or more image. Multiple images can be selected at a time by using the standard `Ctl/Cmd` and `Shift` key modifiers. Holding `Ctl/Cmd` while clicking a thumbnail adds that thumbnail to the current selection. Holding the `Shift` key adds all thumbnail from the nearest selection through the current selection. `Ctl/Cmd + A` selects all thumbnails and `Ctl/Cmd + Delete` will delete selected thumbnails.

<div class='center'>
<img src="editor-2.gif" style='max-width: 800px;'>
</div>

### Canvas

The foundation of the _Editor_ is _HTML Canvas_. The main section is actually comprised on 5 _Canvas_ elements layered on top of each other. When the _Editor_ loads a new project the _JSON_ configuration file is read from every project directory is read into memory. Any project can now be opened via the _Recent Projects_ menu. The _Recorder_ saves the name of the directory it just created as state so when the _Editor_ comes across that _JSON_ file it uses it compute various settings. The `width` and `height` of the images are used to determine the dimensions of the thumbnails and the inital zoom level of the _Canvas_ `context`. The absolute paths to all the images are stored as an array in state and accessing each one is accomplished by matching the index of selected thumbnail to the array. The first or bottom _Canvas_ is the where the actual image is drawn.

The snippet of code in charge of drawing the main image in the _Editor_.

```js
useEffect(() => {
  if (imageIndex !== null) {
    // set the scale or zoom
    ctx1.scale(scale, scale)

    // create a new image
    const image = new Image()

    // when image loads draw to ctx1
    image.onload = () => {
      ctx1.drawImage(image, 0, 0)
    }

    // add hashModifier to trick cache on image changes
    // needed because filename remains the same but imagedata is overwritten
    image.src = images[imageIndex].path + hashModifier
  }

  // dependencies
}, [images, imageIndex, scale, hashModifier])
```

The scale, zoom level can easily be changed through various parts of the user interface. A _React Hook_ is used to watch for changes in the `scale` value and the `imageIndex`. Whenever a change is detected the image is redrawn. A `hashModifier` (I used the current timestamp) is added to the end of the image url to trick the browser cache. Whenever images are altered without the page reloading the browser tries to conserve requests via caching. Without this trick many images show up empty or not updated without a page reload. This `useEffect` hook is re-run any time one of its dependencies change.

<div class='center'>
<img src="editor-3.gif" style='max-width: 800px;'>
</div>
