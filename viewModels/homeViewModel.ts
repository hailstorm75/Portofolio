import {BaseViewModel} from "./baseViewModel";

export abstract class HomeViewModel extends BaseViewModel {
    title: string = "Denis Akopyan";
    authorName: string = "Denis Akopyan"
    copyrightYear: number;

    /**
     * Default constructor
     */
    constructor() {
        super("Home");

        this.copyrightYear = this.getCurrentYear();
    }

    private getCurrentYear(): number {
        const date = new Date();
        return date.getFullYear();
    }
}