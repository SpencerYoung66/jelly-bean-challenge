import { Flavor } from "../model/Flavor";
import { Service } from "../net/Service";

export class Presenter {
    private _service: Service = new Service();

    public addFlavor(name: string){
        return this._service.addFlavor(name);
    }

    public loadFlavors() {
        return this._service.loadFlavors();
    }

    public removeFlavor(id: number){
        return this._service.removeFlavor(id);
    }

    public updateFlavor(updatedFlavor: Flavor){
        return this._service.updateFlavor(updatedFlavor);
    }
}