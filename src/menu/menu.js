import { footer } from "../footer";
import { head } from "../head/header";
import { body } from "./body";
class MenuPage {
    constructor() {
        this.menuPage = [head, body, footer]
    }

    getMenu() {
        return this.menuPage;
    }
}

const menuPage = new MenuPage();

const menu = menuPage.getMenu();

export { menu }