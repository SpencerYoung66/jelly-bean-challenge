import { Flavor } from "../model/Flavor";
import { FakeData } from "./FakeData";
import { deleteRequest, getRequest, postRequest, putRequest } from "./Requests";

export class Service {

    public async addFlavor(name: string){
        const nameObject = {"name": name};
        const resp = await postRequest("flavor/", nameObject);
        const newFlavor: Flavor = resp as unknown as Flavor;
        return newFlavor;
        // FakeData.instance.allFlavors = [...FakeData.instance.allFlavors, newFlavor];
    }

    public async loadFlavors(){
        const flavorJson = await getRequest("flavor/");
        const flavors: Flavor[] = flavorJson as unknown as Flavor[];
        return flavors;
    }

    public async removeFlavor(id: number){
        const status = await deleteRequest("flavor/" + id + "/");
        return status;
        // FakeData.instance.allFlavors = FakeData.instance.allFlavors.filter(flavor => flavor.id !== id);
    }

    public async updateFlavor(updatedFlavor: Flavor){
        const nameObject = {"name": updatedFlavor.name};
        await putRequest("flavor/" + updatedFlavor.id + "/", nameObject);

        // FakeData.instance.allFlavors = FakeData.instance.allFlavors.map(flavor => {
        //     if(flavor.id == updatedFlavor.id){
        //         return updatedFlavor;
        //     }
        //     else{
        //         return flavor;
        //     }
        // })
    }
}