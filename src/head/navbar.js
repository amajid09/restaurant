class NavBar {
    constructor(className) {
        this.nav = document.createElement('nav');
        this.nav.className = className;
        this.ul = document.createElement('ul');
    }

    populateNavBar() {
        const menuBar = ['Menu', 'Contact Us', 'About Us'];
        for (let i = 0; i < menuBar.length; i++) {
            let a = document.createElement('a');
            a.className = 'link';
            let li = document.createElement('li');
            a.textContent = menuBar[i];
            a.href = '#' + menuBar[i].split(' ')[0];
            li.appendChild(a);
            this.ul.appendChild(li);
        }
        this.nav.appendChild(this.ul);
    }

    getNav() {
        return this.nav;
    }

}

let navbar = new NavBar('navbar');
navbar.populateNavBar();
let nav = navbar.getNav()

export { nav }