class Body{
    constructor() {
        this.body = document.createElement('div');
        this.body.className = 'about-body';
        this.aboutDescription = document.createElement('div');
        this.aboutDescription.className = 'about-description';

    }

    addDescription() {
        let details = [
            { class: '', description: 'Croissant Agency limited pty.' },
            { class: '', description: "We love and cherish croissants, like I’m addicted to it. Our goals and mission is to start a movement to help someone one croissant at a time. One croissant can make someone’s day. As the say goes ‘Croissant’." },
            {class: 'quote', description: "~Me"},
        ]

        for (let i = 0; i < details.length; i++){
            const p = document.createElement('p');
            p.className = details[i].class;
            p.textContent = details[i].description;
            this.aboutDescription.appendChild(p);
        }
        this.body.appendChild(this.aboutDescription);
    }
    getBody() {
        return this.body;
    }
}


let bodyPage = new Body();
bodyPage.addDescription();

let body = bodyPage.getBody();


export { body };