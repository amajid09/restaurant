import { footer } from "../footer";
import { slider } from "./slider";
import { top } from "./top";

class Body{
    constructor(top, slider, footer) {
        this.body = document.createElement('div');
        this.body.className = 'body';
        this.body.appendChild(top);
        this.body.appendChild(slider); 
    }
    getBody() {
        return this.body;
    }
}

let body = new Body(top, slider, footer).getBody();

export { body }
