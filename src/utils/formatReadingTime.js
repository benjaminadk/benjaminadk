export const formatReadingTime = minutes => {
  let cups = Math.round(minutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E)).fill('🍱').join('')} ${minutes} min read`
  } else {
    return `${new Array(cups || 1).fill('🥡').join('')} ${minutes} min read`
  }
}
