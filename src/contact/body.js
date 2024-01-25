class Body{
    constructor() {
        this.body = document.createElement('div');
        this.body.className = 'contact-body';
        this.contactDescription = document.createElement('div');
        this.contactDescription.className = 'contact-description';

    }
    addContactDescription() {
        this._addText();
        this.body.appendChild(this.contactDescription);
    }
    _addText() {
        let contactDetails = [
            { class: '', details: 'croissant@gmail.com' },
            { class: 'contact-number', details: '+345 766 croissant' },
            { class: 'contact-us', details: 'Contact Us'}
        ]
        for (let i = 0; i < 3; i++) {
            const p = document.createElement('p');
            p.className = contactDetails[i].class;
            p.textContent = contactDetails[i].details;
            this.contactDescription.appendChild(p);
        }
    }


    getBody() {
        return this.body;
    }
}

let bodyObj = new Body();

bodyObj.addContactDescription();
let body = bodyObj.getBody();

export { body };