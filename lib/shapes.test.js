const { Circle, Square, Triangle } = require("./shapes")

describe('Shape', () => {

    describe('Triangle', () => {
        it('Should render a triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Circle', () => {
        it('Should render a circle', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>');
        });
    });

    describe('Square', () => {
        it('Should render a square', () => {
            const shape = new Square();
            shape.setColor("yellow");
            expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>')
        });
    });
});