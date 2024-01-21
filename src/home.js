function addContent() {
    console.log('helo')
    const content = document.getElementsByClassName('content')[0];
    console.log(content)
    content.appendChild(header());
}

function header() {
    const header = document.createElement('div');
    header.className = "header";
    header.appendChild(header_wrappper());
    return header;
}



function header_wrappper() {
    const header_wrapper = document.createElement('div');
    header_wrapper.className = 'header-wrapper';
    header_wrapper.appendChild(logo());
    header_wrapper.appendChild(navbar());
    return header_wrapper;
}
function logo() {
    const logo = document.createElement('div');
    logo.className = 'logo';
    const a = document.createElement('a')
    a.textContent = "Croissant";
    logo.appendChild(a);
    return logo;
}

function navbar() {
    const navbar = document.createElement('nav')
    navbar.className = "navbar"
    const ul = document.createElement('ul');
    const menuBar = ['Menu', 'Contact Us', 'About Us'];
    for (let i = 0; i < menuBar.length; i++) {
        let a = document.createElement('a');
        let li = document.createElement('li');
        a.textContent = menuBar[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    navbar.appendChild(ul);
    return navbar;
}

export { addContent };