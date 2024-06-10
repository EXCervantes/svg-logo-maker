// Import Shape module
const { Shape } = require('./shape.js');

// Create Triangle class and render it
class Triangle extends Shape {
    constructor() {
        super()
    }
    render() {
        const triangle = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
        return super.render(triangle)
    }
};

module.exports = { Triangle };
