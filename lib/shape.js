// Shape class for the shapes to inherit from
class Shape {
    constructor() {
        this.color = ""
        this.size = ""
        this.text = ""
        this.textColor = ""
    }
    setColor(color) {
        this.color = color
    }
    setText(text, color) {
        this.text = text
        this.textColor = color
    }
    makeText() {
        return `<text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    // Render either the Circle, Square, or Triangle
    render(shape) {
        const text = this.makeText()
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n\t${shape}\n\t${text}\n</svg>`
    }
}

module.exports = { Shape };
