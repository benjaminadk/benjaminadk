---
title: High School Clock
date: '2019-07-13'
---

This visualization was originally made on [Observable](https://observablehq.com) and is embedded into the [React](https://reactjs.org) application that runs my website. The coolest part is the ability to control state, in this case the size of the clock. Check out [🤔 How to: Embed a Notebook in a React App](https://observablehq.com/@observablehq/how-to-embed-a-notebook-in-a-react-app) to learn more about the process and shout-out to _Observable_ on creating an awesome tool.

<div class='center'>
  <img width='400' src="https://observable-notebooks.s3-us-west-1.amazonaws.com/high-school-clock/clock.jpg" alt="Original High School Clock">
</div>

The _High School Clock_ design is based on a photo I found after googling `high school clock`. I was intrigued by the clock hands and their various shapes. The hour hand is basic, the minute hand is tapered, and the second hand is mostly skinny, except for a trapeziod-like balancing feature. The implementation of these hands uses _SVG Polygon_ elements. Each hand requires its own function that outputs a set of points based on the `radius` of the clock.

```js
function hourHand() {
  var w = radius / 30
  var b = radius / 7.5
  var t = radius / 2.1
  return `${-w},${b} ${w},${b} ${w},${-t} ${-w},${-t} ${-w},${b}`
}
```

Check out the [source code](https://observablehq.com/@benjaminadk/high-school-clock) at _Observable_.
