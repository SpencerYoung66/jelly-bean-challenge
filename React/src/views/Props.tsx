import { Flavor } from "../model/Flavor";
import { Presenter } from "../presenter/Presenter";

export interface Props{
    presenter: Presenter,
    flavors: Flavor[]
    flavorChange: () => void;
}