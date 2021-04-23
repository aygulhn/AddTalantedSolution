import {CategoryStore} from "./CategoryStore";

export class RootStore {

    categoryStore: CategoryStore;

    constructor() {
        this.categoryStore = new CategoryStore();
    }
}
