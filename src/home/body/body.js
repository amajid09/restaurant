import { Circle } from "./circle";
class Body{
    constructor() {
        this.bodyWrapper = document.createElement('div');
        this.bodyWrapper.className = 'middle-wrapper';
        this.bodySection = document.createElement('div');
        this.bodySection.className = 'middle-section';
    }

    addBodyWrapper() {
        
        let first = new Circle('first');
        let second = new Circle('second');
        
        first.addText('I fell in love');
        second.addText('with the Croissant');
        first.addContainer(first.getCircle());
        first.addContainer(first.getText())
        
        second.addContainer(second.getCircle());
        second.addContainer(second.getText());
        
        this.bodyWrapper.appendChild(first.getContainer());
        this.bodyWrapper.appendChild(second.getContainer());
    }

    getBodyWrapper() {
        return this.bodyWrapper;
    }
    
    addBodySection(element) {
        this.bodySection.appendChild(element);
    }
    getBody() {
        return this.bodySection;
    }

}

let bodySection = new Body();

bodySection.addBodyWrapper();
bodySection.addBodySection(bodySection.getBodyWrapper());

let body = bodySection.getBody();


export { body }