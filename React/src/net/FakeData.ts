import { Flavor } from "../model/Flavor";

export class FakeData {

    private static _instance: FakeData;

    public static get instance(): FakeData {
      if (FakeData._instance == null) {
        FakeData._instance = new FakeData();
      }
  
      return this._instance;
    }

    private _allFlavors: Flavor[] = [
        new Flavor("Root Beer", 1),
        new Flavor("Watermelon", 2),
        new Flavor("Tootie Frootie", 3),
        new Flavor("Buttered Popcorn", 4),
        new Flavor("Cherry", 5),
        new Flavor("Green Apple", 6),
        new Flavor("Blue Raspberry", 7),
    ]

    public get allFlavors(): Flavor[]{
        return this._allFlavors;
    }

    public set allFlavors(flavors: Flavor[]) {
        this._allFlavors = flavors;
    }
}