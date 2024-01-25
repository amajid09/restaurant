class Content{
    constructor() {
        this.content = document.getElementsByClassName('content')[0]; 
    }
    addContent(div) {
        this.content.appendChild(div);
    }
    addContentHtml(html) {
        this.content.innerHTML = html;
    }
    getContent() {
        return this.content;
    }
    clearContent() {
        while(this.content.children.length > 0) {
            console.log('here')
            this.content.removeChild(this.content.children[0])
        }
        console.log(this.content.children.length)
    }
}
let content = new Content();
export {content}