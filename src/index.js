import './style.css';
import { content } from './content';
import { home } from './home/home';
import { menu } from './menu/menu';
import { about } from './about/about';
import { contact } from './contact/contact';









const Routes = {
    '/': () => {
        content.clearContent();
        for (const child of home) {
            content.addContent(child);
        }
    }, 
    '/about':() =>  {
        content.clearContent();
        about.addToAboutPage();
        console.log(content)
        content.addContent(about.getAboutPage());
    }
     ,
    '/contact': () =>  {
        content.clearContent();
        contact.addContacts(); 
        content.addContent(contact.getContact());
    },
    '/menu': () =>  {
        content.clearContent();
        for (const child of menu) {
            content.addContent(child);
        }
    } 
}
Routes[location.pathname.replace('dist/index.html', '')]()
const links = document.getElementsByClassName('link');
Array.from(links).forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('here')

        const hashLink = `/${link.href.split('#')[1]}`.toLowerCase()
        console.log(hashLink)
        Routes[hashLink]();
    }) 
});
console.log(location.hash);
// displayHomePage();
// displayMenuPage();
// displayContactPage();
// displayAboutPage();
