export default minutes => `${new Array(Math.ceil(minutes / 3)).fill('☕').join(' ')} ${minutes} min`
