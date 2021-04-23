import {observable, runInAction, makeObservable, action, makeAutoObservable} from 'mobx';
import {service} from '../services'

interface IMinutes {
    id: number,
    time: number
}

export interface ICategoryStore {
    categories: Array<string>
    blocks: Array<string>
    minutes: Array<IMinutes>,

    getCategoriesAsync(): void,

    getBlocksAsync(): void,

    getMinutesAsync(): void,
}

export class CategoryStore {

    constructor() {
        makeAutoObservable(this)
    }

    @observable categories:Array<string> = [];
    @observable blocks = [];
    @observable minutes = [];


    @action getCategoriesAsync = async () => {
        try {
            const data = await service.getCategories()
            runInAction(() => {
                this.categories = data.categories;
            });
        } catch (error) {
            runInAction(() => {
                this.categories = [];
            });
        }
    };

    @action getBlocksAsync = async () => {
        try {
            const data = await service.getBlocks()
            runInAction(() => {
                this.blocks = data.blocks;
            });
        } catch (error) {
            runInAction(() => {
                this.blocks = [];
            });
        }
    };

    @action getMinutesAsync = async () => {
        try {
            const data = await service.getMinutes()
            runInAction(() => {
                this.minutes = data.minutes;
            });
        } catch (error) {
            runInAction(() => {
                this.minutes = [];
            });
        }
    };

}
