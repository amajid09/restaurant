class Footer {
    constructor() {
        this.foooter = document.createElement('div');
        this.foooter.className = 'footer';
    }
    addText() {
        const p = document.createElement('p');
        p.textContent = 'Copyright@2024';
        this.foooter.appendChild(p);
    }
    getFooter() {
        return this.foooter;
    }
}


let footerObj = new Footer();

footerObj.addText();

let footer = footerObj.getFooter();

export { footer };