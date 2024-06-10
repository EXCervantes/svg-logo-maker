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
        // `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
        // TODO: return
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    render(shape) { // <circle> | <rect> | <polygon>
        const text = this.makeText()
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n\t${shape}\n\t${text}\n</svg>`
    }
}

module.exports = { Shape };