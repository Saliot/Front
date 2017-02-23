export interface IMenuItem {

    menuitemKey: number;
    menuitemDescription: string;
    menuitemPath: string;
    menuitemIcon: string;
    menuitemOrder: number;
    expanded : boolean;

}

export class MenuItem implements IMenuItem {


    constructor (
                    public menuitemKey : number,
                    public menuitemDescription: string,
                    public menuitemPath: string,
                    public menuitemIcon: string,
                    public menuitemOrder: number,
                    public expanded : boolean = true) {};

}