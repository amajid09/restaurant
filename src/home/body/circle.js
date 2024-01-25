class Circle{
    constructor(prefix) {
        this.container = document.createElement('div');
        this.container.className = prefix + '-container';
        this.circle = document.createElement('div');
        this.circle.className = prefix + '-circle';
        this.text = document.createElement('p');
        this.text.className = prefix + '-text';
    }
    addText(text) {
        this.text.textContent = text;
    }
    addContainer(element) {
        this.container.appendChild(element);
    }

    getContainer() {
        return this.container;
    }
    getCircle() {
        return this.circle;
    }
    getText() {
        return this.text;
    }
}

export { Circle }