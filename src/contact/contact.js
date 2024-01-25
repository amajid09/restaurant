import { footer } from "../footer";
import { head } from "../head/header";
import { body } from "./body";

class Contact{
    constructor(head, body, footer) {
        this.contactWrapper = document.createElement('div');
        this.contactWrapper.className = 'contact-wrapper-body';
        this.contactPage = [head, body, footer]
    }

    addContacts() {
        for (let i = 0; i < this.contactPage.length; i++) {
            let contact = this.contactPage[i];
            console.log(this.contactWrapper)
            this.contactWrapper.appendChild(contact);
        }
    }
    getContact() {
        return this.contactWrapper;
    }   
}

let contact = new Contact(head, body, footer);

export { contact }