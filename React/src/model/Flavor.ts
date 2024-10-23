export class Flavor {
    private _name: string;
    private _id: number;

    public constructor(name: string,  id: number){
        this._name = name;
        this._id = id;
    }

    public get name(): string{
        return this._name;
    }

    public get id(): number{
        return this._id;
    }
}