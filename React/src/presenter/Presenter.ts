import { Flavor } from "../model/Flavor";
import { Service } from "../net/Service";

export class Presenter {
    private _service: Service = new Service();

    public addFlavor(newFlavor: Flavor){
        this._service.addFlavor(newFlavor);
    }

    public loadFlavors() {
        return this._service.loadFlavors();
    }

    public removeFlavor(id: number){
        this._service.removeFlavor(id);
    }

    public updateFlavor(updatedFlavor: Flavor){
        this._service.updateFlavor(updatedFlavor);
    }
}