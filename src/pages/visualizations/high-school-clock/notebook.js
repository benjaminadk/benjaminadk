// https://observablehq.com/@benjaminadk/high-school-clock@510
// import define1 from '../@benjaminadk/the-nba-clutch-gene.js?v=3'

export default function define(runtime, observer) {
  const main = runtime.module()
  main.variable(observer()).define(['md'], function(md) {
    return md`
# High School Clock`
  })
  main.define('initial size', function() {
    return 400
  })
  main
    .variable(observer('mutable size'))
    .define('mutable size', ['Mutable', 'initial size'], (M, _) => new M(_))
  main.variable(observer('size')).define('size', ['mutable size'], _ => _.generator)
  main.variable(observer('slider')).define('slider', ['html', 'mutable size'], function(html, $0) {
    const input = html`
      <input type="range" min="40" max="800" step="5" value="400" />
    `
    input.oninput = () => ($0.value = input.valueAsNumber)
    return input
  })
  main
    .variable(observer('clock'))
    .define('clock', ['size', 'd3', 'invalidation'], function(size, d3, invalidation) {
      const radius = size / 2
      const margin = radius / 6
      const width = radius * 2 + margin * 2
      const height = radius * 2 + margin * 2
      const outerStrokeWidth = radius / 10
      const tickLength = radius / 20
      const tickRadius = radius - outerStrokeWidth - tickLength
      const labelRadius = tickRadius - tickLength - outerStrokeWidth
      const labelFontSize = radius / 4
      const innerRadius = radius / 50

      // scales based on 360 degrees in a circle
      const hourScale = d3
        .scaleLinear()
        .range([0, 360])
        .domain([0, 12])
      const minSecScale = d3
        .scaleLinear()
        .range([0, 360])
        .domain([0, 60])

      function hourHand() {
        var w = radius / 30
        var b = radius / 7.5
        var t = radius / 2.1
        return `${-w},${b} ${w},${b} ${w},${-t} ${-w},${-t} ${-w},${b}`
      }

      function minuteHand() {
        var w1 = radius / 25
        var w2 = radius / 75
        var b = radius / 7.5
        var t = radius / 1.2
        return `${-w1},${b} ${w1},${b} ${w2},${-t} ${-w2},${-t} ${-w1},${b}`
      }

      function secondHand() {
        var w1 = radius / 50
        var w2 = radius / 30
        var b1 = radius / 2.1
        var b2 = radius / 3.75
        var p1 = radius / 300
        var p2 = radius / 150
        var t = radius / 1.2
        return `${-w1},${b1} ${w1},${b1} ${w2},${b2} ${p2},${b2} ${p1},${-t} ${-p1},${-t} ${-p2},${b2} ${-w2},${b2} ${-w1},${b1}`
      }

      const data = [
        {
          type: 'hour',
          value: 0,
          scale: hourScale,
          points: hourHand(),
          fill: '#000'
        },
        {
          type: 'minute',
          value: 0,
          scale: minSecScale,
          points: minuteHand(),
          fill: '#000'
        },
        {
          type: 'second',
          value: 0,
          scale: minSecScale,
          points: secondHand(),
          fill: '#F00'
        }
      ]

      // draw the clock features
      function draw() {
        // set the initial time
        update()

        // create a group for the clock face translated to center of clock
        const face = svg
          .append('g')
          .attr('id', 'face')
          .attr('transform', `translate(${width / 2}, ${height / 2})`)

        // draw the outer circle
        face
          .append('g')
          .append('circle')
          .attr('r', radius)
          .attr('fill', '#FFF')
          .attr('stroke', '#000')
          .attr('stroke-width', outerStrokeWidth)

        // draw the second ticks
        face
          .selectAll('.sec-tick')
          .data(d3.range(60).filter(d => d % 5 !== 0))
          .enter()
          .append('line')
          .attr('class', 'sec-tick')
          .attr('x1', 0)
          .attr('x2', 0)
          .attr('y1', tickRadius)
          .attr('y2', tickRadius + tickLength)
          .attr('stroke', '#000')
          .attr('stroke-width', radius / 100)
          .attr('transform', d => `rotate(${minSecScale(d)})`)

        // draw the hour ticks
        face
          .selectAll('.hour-tick')
          .data(d3.range(12))
          .enter()
          .append('line')
          .attr('class', 'hour-tick')
          .attr('x1', 0)
          .attr('x2', 0)
          .attr('y1', tickRadius)
          .attr('y2', tickRadius + tickLength)
          .attr('stroke', '#000')
          .attr('stroke-width', radius / 25)
          .attr('transform', d => `rotate(${hourScale(d)})`)

        // draw the hour labels
        face
          .selectAll('.hour-label')
          .data(d3.range(1, 13))
          .enter()
          .append('text')
          .attr('class', 'hour-label')
          .attr('text-anchor', 'middle')
          .attr('x', d => labelRadius * Math.sin((hourScale(d) * Math.PI) / 180))
          .attr(
            'y',
            d => -labelRadius * Math.cos((hourScale(d) * Math.PI) / 180) + labelFontSize * 0.375
          )
          .style('font-size', `${labelFontSize}px`)
          .style('font-family', 'Arial, san-serif')
          .style('font-weight', 'bold')
          .text(d => d)

        // draw branding
        face
          .append('text')
          .attr('x', 0)
          .attr('y', radius / 3)
          .attr('text-anchor', 'middle')
          .style('font-size', `${radius / 22}px`)
          .style('font-family', `"Michroma"`)
          .text('WESTCLOX')

        face
          .append('text')
          .attr('x', 0)
          .attr('y', radius / 3 + radius / 20)
          .attr('text-anchor', 'middle')
          .style('font-size', `${radius / 25}px`)
          .style('font-family', `"Michroma"`)
          .text('electric')

        // create a group for the clock hands appended to the face therefore centered
        const hands = face.append('g').attr('id', 'hands')

        // draw the clock hands as polygons
        hands
          .selectAll('polygon')
          .data(data)
          .enter()
          .append('polygon')
          .attr('class', d => `${d.type}-hand`)
          .attr('points', d => d.points)
          .attr('fill', d => d.fill)

        // draw the center point of the clock
        face
          .append('g')
          .append('circle')
          .attr('r', innerRadius)
          .attr('fill', '#F00')
          .attr('stroke', 'goldenrod')
          .attr('stroke-width', 3)
      }

      // rotate hands based on new values
      function moveHands() {
        d3.select('#hands')
          .selectAll('polygon')
          .data(data)
          .transition()
          .ease(d3.easeLinear)
          .attr('transform', d => `rotate(${d.scale(d.value)})`)
      }

      // update time data based on current time
      // hours expressed with decimal 10:30 -> 10.5
      function update() {
        const t = new Date()
        data[0].value = (t.getHours() % 12) + t.getMinutes() / 60
        data[1].value = t.getMinutes()
        data[2].value = t.getSeconds()
      }

      // create container svg
      const svg = d3
        .create('svg')
        .attr('width', width)
        .attr('height', height)

      // draw clock
      draw()

      // update time and draw hands every second
      const interval = d3.interval(() => {
        update()
        moveHands()
      }, 1000)

      invalidation.then(() => {
        interval.stop()
      })

      return svg.node()
    })
  main.variable(observer()).define(['md'], function(md) {
    return md`
## Original Image

<figure>
  <img src="https://i.pinimg.com/736x/d9/0a/30/d90a30b9118271041d1c4cf5257604da.jpg">
</figure>`
  })
  main.variable(observer('style')).define('style', ['css'], function(css) {
    return css`
      @import url('https://fonts.googleapis.com/css?family=Michroma&display=swap');`
  })
  main.variable(observer()).define(['md'], function(md) {
    return md`
Inspired by [_Tom Pearson's_](https://observablehq.com/@tomgp) [Simple Clock](https://observablehq.com/@d3/simple-clock)`
  })
  main.variable(observer('LICENSE')).define('LICENSE', function() {
    return 'ISC'
  })
  // const child1 = runtime.module(define1)
  // main.import('css', child1)
  main.variable(observer('d3')).define('d3', ['require'], function(require) {
    return require('d3@5')
  })
  return main
}
