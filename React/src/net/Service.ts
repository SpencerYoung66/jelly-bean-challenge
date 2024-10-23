import { Flavor } from "../model/Flavor";
import { FakeData } from "./FakeData";
import { getRequest } from "./Requests";

export class Service {

    public addFlavor(newFlavor: Flavor){
        FakeData.instance.allFlavors = [...FakeData.instance.allFlavors, newFlavor];
    }

    public async loadFlavors(){
        const flavorJson = await getRequest("flavor/");
        const flavors: Flavor[] = flavorJson as unknown as Flavor[];
        return flavors;
    }

    public removeFlavor(id: number){
        FakeData.instance.allFlavors = FakeData.instance.allFlavors.filter(flavor => flavor.id !== id);
    }

    public updateFlavor(updatedFlavor: Flavor){
        FakeData.instance.allFlavors = FakeData.instance.allFlavors.map(flavor => {
            if(flavor.id == updatedFlavor.id){
                return updatedFlavor;
            }
            else{
                return flavor;
            }
        })
    }
}