import { logo } from "./logo";
import { nav } from "./navbar";
class Header {
    constructor(className) {
        this.header = document.createElement('div');
        this.header.className = className;
        this.header_wrapper = document.createElement('div');
        this.header_wrapper.className = 'header-wrapper';
    }

    addLogoAndNavbar() {
        this.header_wrapper.appendChild(logo);
        this.header_wrapper.appendChild(nav);
    }
    addHeadWrapper() {
        this.header.appendChild(this.header_wrapper);
    }
    getHeader() {
        return this.header;
    }
}
let header = new Header('header');
header.addLogoAndNavbar();
header.addHeadWrapper();
let head = header.getHeader();

export { head };