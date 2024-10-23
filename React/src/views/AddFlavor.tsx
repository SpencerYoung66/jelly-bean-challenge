import { useState } from "react";
import { Flavor } from "../model/Flavor";
import { Props } from "./Props";

const AddFlavor = (props:Props) => {
    const [name, setName] = useState("");

    // useEffect(() => {
    //     props.flavorState[1](props.presenter.loadFlavors());
    //     console.log("in the Use Effect");
    //   }, [props.flavorState[0]])

    const handleClick = () => {
        props.presenter.addFlavor(new Flavor(name, (props.flavors)[props.flavors.length-1].id + 1)); 
        return props.flavorChange();
        // props.flavorState[1](FakeData.instance.allFlavors);
    }

    return(
        <>
        <div>
            <label htmlFor="Name">Flavor: </label>
            <input
                type="text"
                id="Name"
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={(event) => {handleClick()}}>Add Flavor</button>
        </div>
        </>
    )
}

export default AddFlavor