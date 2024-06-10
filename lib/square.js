// Import Shape module
const { Shape } = require('./shape.js');

// Create Square class and render it
class Square extends Shape {
    constructor() {
        super()
    }
    render() {
        const square = `<rect x="50" height="200" width="200" fill="${this.color}"/>`
        return super.render(square)
    }
}

module.exports = { Square };
