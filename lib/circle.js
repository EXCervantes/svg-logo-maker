// Import Shape module
const { Shape } = require('./shape.js');

// Create Circle class and render it
class Circle extends Shape {
    constructor() {
        super()
    }
    render() {
        const circle = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
        return super.render(circle)
    }
}

module.exports = { Circle };
