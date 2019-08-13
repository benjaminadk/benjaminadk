---
title: How To Build A Color Picker
date: '2019-08-12'
thumbnail: '../../../images/react.png'
featured: './featured.jpg'
categories:
  - react
tags:
  - javascript
  - react
  - color
---

Building a color picker was one of the first projects I tried my hand at once I knew how to string together a couple lines of _JavaScript_. They were total abombinations if my memory serves me correctly. Recently, I needed a simple color picker for my lastest project [Palette Pal](). This article will cover the step by step process.

Start by creating a new [Code Sandbox]() with the _React_ template. This tutorial will use [Styled Components]() so install it and delete the `.css` file and its `import` statement. Here is some basic starter code.

- `index.js` is the root of our application

<div class='filename'>index.js</div>

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Picker from './Picker'
import { GlobalStyle } from './GlobalStyle'

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Picker />
      </AppWrapper>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

- `GlobalStyle.js` holds our project wide style

<div class='filename'>GlobalStyle.js</div>

```js
import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 10px;
}
body {
  margin: 0;
}
*, *:before, *:after {
    box-sizing: inherit;
}
`
```

- `Picker.js` is where the magic will happen

<div class='filename'>Picker.js</div>

```js
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

export const PickerWrapper = styled.div`
  .swatch {
    width: 100px;
    height: 50px;
    background: ${p => p.color};
  }
`

const Picker = () => {
  const [color, setColor] = useState('#000000')

  return (
    <>
      <PickerWrapper color={color}>
        <div className='swatch' />
      </PickerWrapper>
    </>
  )
}

export default Picker
```

This boilerplate should result in a black rectangle in the middle of the screen. The goal to have the color picker appear when this rectangle is clicked and for its background color to be dynamically set based on user input. The first thing needed is some sort of container to hold the color picker that acts like a Modal, opening when the rectangle is clicked and having the ability to close via a button or clicking the screen outside the Picker.

<div class='filename'>Modal.js</div>

```js
import React from 'react'
import styled, { keyframes } from 'styled-components'

const zoom = keyframes`
  from {
    transform: scale(0) translate(-50%, -50%);
  }
  to {
    transform: scale(1) translate(-50%, -50%);
  }
`

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${p => (p.show ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.3);
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  max-width: 100%;
  height: auto;
  display: ${p => (p.show ? 'block' : 'none')};
  animation: ${zoom} 0.2s;
`
const Modal = ({ modal, show, onClose, children }) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <ModalWrapper ref={modal} show={show}>
        {children}
      </ModalWrapper>
    </>
  )
}

export default Modal
```

The Modal component works by layering a backdrop and an inner container. The backdrop is fixed behind the modal using the `z-index` property. This allows the backdrop to listen for clicks and close the entire component while the foreground can be clicked without triggering a close. The funny looking brackets `<></>` are shorthand for `React.Fragment` and allow sibling elements to be returned by a component. The `show` prop is a `Boolean` passed down from Picker to control the `display` style. _Styled Components_ also comes with a `keyframes` helper function which is used with `transform: scale()` to give a zoom effect when the Picker appears. The `children` prop is available on all parent components in _React_ and allows the Modal to be a wrapper component. Finally, the `modal` prop is a `ref` that will be used later in positioning calculations.

```js
const Picker = () => {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState("#000000")

  const modal = useRef(null)

  return (
    <>
      <PickerWrapper color={color}>
        <div className="swatch" onClick={() => setShow(true)} />
        <Modal modal={modal} show={show} onClose={() => setShow(false)}>
          <div>😎</div>
        </Modal>
      </PickerWrapper>
    </>
  )
}v
```

Make sure to `import` the Modal component into Picker. Create `show` and `setShow` with `useState` and `modal` with `useRef`. Now clicking the rectangle will open the modal and we will see the 😎. This `div` becomes the `children` props referenced in the last step.

<img src='picker-1.png'/>

This color picker can incorporate various color formats but for now _HSL_ or _Hue, Saturation, Lightness_ works the best for user input. The _Hue_ component is a rectangular bar displaying the full range of hues from 0 to 360. Before implementing this create a `config.js` file to hold a few constants.

<div class='filename'>config.js</div>

```js
export default {
  squareSize: 200,
  barHeight: 20,
  delay: 150
}
```

The `squareSize` will be both the width and height of the _Saturation_ / _Lightness_ square. `barHeight` is the height of the _Hue_ component and is also used to calculate other values. The `delay` value will be used together with `lodash.throttle`, which should be added as a dependency. This component will implement various mouse event listeners that can be trigger too often, slowing the overall application down. These callback functions will literally be throttled so they can only execute once every `delay` seconds.

The _Hue_ component has a handle that is actually an _Svg_ I made using [Boxy Svg](). Check out [Svg Icons With No Artistic Ability]() for more information on my _Svg_ work flow. For now this project only needs a few _Svg_ icons.

<div class='filename'>Svg.js</div>

```js
import React from 'react'

const Svg = ({ name, ...rest }) => {
  const getPath = p => {
    switch (p) {
      case 'check':
        return (
          <>
            <path d='M2.2326 30.1008l3.7139-5.9333L23.072 34.8882l19.2522-30.41 5.914 3.744-23.001 36.3315-5.914-3.744.0037-.0067z' />
          </>
        )
      case 'cross':
        return (
          <>
            <path
              d='M34.3656 3.0593000000000004A24.084 24.084 0 1 0 15.166 47.2354 24.084 24.084 0 1 0 34.3656 3.0593zM32.0123 8.474a18.18 18.18 0 0 1-14.493 33.3467A18.18 18.18 0 0 1 32.0123 8.474z'
              fill='#dfdfdf'
            />
            <path
              d='M36.7852 11.4797A18.168 18.168 0 1 0 12.8026 38.777a18.168 18.168 0 1 0 23.9826-27.2973zM33.6263 15.0752a13.382 13.382 0 0 1-17.6649 20.1063 13.382 13.382 0 0 1 17.6649-20.1063z'
              fill='#363636'
            />
          </>
        )
      case 'handle':
        return (
          <>
            <path d='M34.736998 0v49.921h-5.578V0zm-16.737 49.921V0h5.578v49.921z' fill='#dfdfdf' />
            <path fill='#363636' d='M31.371873.078V50h-2.316V.078zM23.470873 0v49.922h-2.316V0z' />
          </>
        )

      default:
        throw new Error('must provide a name prop to Svg')
    }
  }

  return (
    <svg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg' {...rest}>
      {getPath(name)}
    </svg>
  )
}

export default Svg
```

The _Hue_ bar itself is actually a _Canvas_ element. When the _Picker_ loads a custom _React_ hook can be used to draw the 360 degrees of color. A `ref` to the underlying _DOM_ node is passed to the hook so the `Canvas.getContext()` can be called. The hook uses `createLinearGradient` and a `for` loop to add the necessary color stops to the gradient. Using the `hsl` color format makes this process easy.

<div class='filename'>usePaintHue</div>

```js
import React, { useEffect } from 'react'
import config from './config'

const { squareSize, barHeight } = config

const usePaintHue = canvas => {
  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    ctx.rect(0, 0, squareSize, barHeight)

    const gradient = ctx.createLinearGradient(0, 0, squareSize, 0)
    for (let i = 0; i <= 360; i += 30) {
      gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`)
    }
    ctx.fillStyle = gradient
    ctx.fill()
  }, [canvas])
}

export default usePaintHue
```

...to be continued
