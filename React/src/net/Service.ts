import { Flavor } from "../model/Flavor";
import { deleteRequest, getRequest, postRequest, putRequest } from "./Requests";

export class Service {

    public async addFlavor(name: string){
        const nameObject = {"name": name};
        const resp = await postRequest("flavor/", nameObject);
        const newFlavor: Flavor = resp as unknown as Flavor;
        return newFlavor;
    }

    public async loadFlavors(){
        const flavorJson = await getRequest("flavor/");
        const flavors: Flavor[] = flavorJson as unknown as Flavor[];
        return flavors;
    }

    public async removeFlavor(id: number){
        const status = await deleteRequest("flavor/" + id + "/");
        return status;
    }

    public async updateFlavor(updatedFlavor: Flavor){
        const nameObject = {"name": updatedFlavor.name};
        const responseFlavor = await putRequest("flavor/" + updatedFlavor.id + "/", nameObject);
        return responseFlavor
    }
}