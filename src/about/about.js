import { footer } from "../footer";
import { head } from "../head/header";
import { body } from "./body";

class AboutPage{
    constructor() {
        this.aboutWrapper = document.createElement('div');
        this.aboutWrapper.className = 'about-wrapper-body';
        this.aboutPage = [head, body, footer]
    }

    addToAboutPage() {
        for (const about of this.aboutPage) {
            this.aboutWrapper.appendChild(about);
        }
    }
    getAboutPage() {
        return this.aboutWrapper;
    }   
}

let about = new AboutPage();


export { about }