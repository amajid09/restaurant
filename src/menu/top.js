class Top {
    constructor() {
        this.top = document.createElement('div');
        this.top.className = 'top-container';
        
        this.menuDescription = document.createElement('div');
        this.menuDescription.className = 'menu-description';
    }
    addMenuPicture() {
        const menu_picture = document.createElement('div');
        menu_picture.className = 'menu-picture';
        this.top.appendChild(menu_picture);
     }
    addMenuDescription() {
        this.addH2(); 
        this.addTextWrapper();       
        this.menuCart();
        this.top.appendChild(this.menuDescription);

    }
    addH2() {
        const h2 = document.createElement('h2');
        h2.textContent = 'Almond Croissant';
        this.menuDescription.appendChild(h2);
    }
    addTextWrapper() {
        const textWrapper = document.createElement('div');
        textWrapper.className = 'text-wrapper';

        const p = document.createElement('p');
        p.className = 'descri';
        p.textContent = 'Classic croissant dough rolled with housemade almond frangipane then baked, giving it a delicate almond flavour. Topped with flaked almonds and icing sugar.'
        textWrapper.appendChild(p);
        this.menuDescription.appendChild(textWrapper);
    }
    menuCart() {
        const addMenuWrapper = document.createElement('div')
        addMenuWrapper.className = 'add-menu-wrapper';

        const addMenu = document.createElement('div');
        addMenu.className = 'add-menu';

        const p = document.createElement('p');
        p.textContent = 'Add to menu';
        addMenu.appendChild(p);
        addMenuWrapper.appendChild(addMenu);
        this.menuDescription.appendChild(addMenuWrapper);

    }
    getTop() {
        return this.top;
    }
}

let topContainer = new Top();
topContainer.addMenuPicture();
topContainer.addMenuDescription();

let top = topContainer.getTop();

export { top };

