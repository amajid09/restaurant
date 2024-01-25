class Logo {
    constructor() {  
        this.logo = document.createElement('div');
        this.logo.className = 'logo';
    }
    setAnchor() {
        const a = document.createElement('a');
        a.href = "#"
        a.className = 'link'
        a.textContent = 'Croissant';
        this.logo.appendChild(a);
        return a;
    }
    getLogo() {
        return this.logo;
   } 
}


let logoObj = new Logo();
logoObj.setAnchor();
let logo = logoObj.getLogo();
export { logo }