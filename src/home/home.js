import { head } from "../head/header";
import { body } from "./body/body";


class Home{
    constructor() {
        this.home = [head, body];
    }
    getHome() {
        return this.home 
    }
}

const home = new Home().getHome();


export { home };