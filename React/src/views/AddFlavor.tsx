import { useState } from "react";
import { Flavor } from "../model/Flavor";
import { Props } from "./Props";

const AddFlavor = (props:Props) => {
    const [name, setName] = useState("");

    const handleClick = async () => {
        await props.presenter.addFlavor(name); 
        props.flavorChange();
        setName("");
    }

    return(
        <>
        <div>
            <label htmlFor="Name">Flavor: </label>
            <input
                value={name}
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