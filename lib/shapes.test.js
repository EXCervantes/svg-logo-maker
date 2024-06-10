const { Circle, Square, Triangle } = require("./shapes")

describe('Shape', () => {

    describe('Triangle', () => {
        it('Should render a triangle', () => {
            const shape = new Triangle();
            shape.setText("cat", "gray");
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n\t<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue"/>\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="gray">cat</text>\n</svg>`)
        });
    });

    describe('Circle', () => {
        it('Should render a circle', () => {
            const shape = new Circle();
            shape.setText("pig", "pink");
            shape.setColor("black");
            expect(shape.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n\t<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="black"/>\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">pig</text>\n</svg>`)
        });
    });

    describe('Square', () => {
        it('Should render a square', () => {
            const shape = new Square();
            shape.setText("dog", "white");
            shape.setColor("magenta");
            expect(shape.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n\t<rect x="50" height="200" width="200" fill="magenta"/>\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">dog</text>\n</svg>`)
        });
    });
});