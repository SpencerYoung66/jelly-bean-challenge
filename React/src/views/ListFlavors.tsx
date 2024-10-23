import { useState } from "react";
import { Props } from "./Props";
import { Flavor } from "../model/Flavor";
import { FakeData } from "../net/FakeData";

const ListFlavors = (props:Props) => {
    const [buttonText, setButtonText] = useState("Edit");
    const [disabled, setDisabled] = useState(true);
    const [hidden, setHidden] = useState(true);
    const [editField, setEditField] = useState("");
    const [editId, setEditId] = useState(-1);
    var oldValue: string = "";
    // const presenter = new ViewUpdateDeletePresenter();
    // const [flavors, setFlavors] = useState<Flavor[]>(presenter.loadFlavors());

    // useEffect(() => {
    //     props.flavorState[1](props.presenter.loadFlavors());
    //     console.log("in the Use Effect");
    //   }, [])

    const handleRemove = (id: number) => {
        props.presenter.removeFlavor(id); 
        return props.flavorChange();
        // props.flavorState[1](FakeData.instance.allFlavors);
        console.log(FakeData.instance.allFlavors.length); 
    }

    const handleUpdate = (currentFlavor: Flavor) => {
        if(buttonText == "Edit"){
            setEditId(currentFlavor.id);
            if(editId == currentFlavor.id){
                setButtonText("Update");
                setDisabled(false);
                setHidden(false);
                oldValue = currentFlavor.name;
            }
        }
        else if(buttonText == "Update" && editId == currentFlavor.id){
            props.presenter.updateFlavor(new Flavor(editField, currentFlavor.id));
            setEditId(-1);
            setButtonText("Edit");
            setDisabled(true);
            setHidden(false);
            oldValue = "";
        }
    }

    const handleCancel = () => {
        setEditField(oldValue);
        setButtonText("Edit");
        setDisabled(true);
        setHidden(true);
    }

    const shouldDisable = (id: number) => {
        if(!disabled && editId == id){
            return false;
        }
        return true;
    }   

    return(
        <>
        <ul>
        {props.flavors.map((flavor) => (
          <li key={flavor.id}>
          <input defaultValue={flavor.name} disabled={shouldDisable(flavor.id)} onChange={(event) => {setEditField(event.target.value)}}></input>
          <button onClick={(event) => {handleRemove(flavor.id)}}>Remove</button>
          <button onClick={(event) => {handleUpdate(flavor)}}>{buttonText}</button>
          <button style={{ display: shouldDisable(flavor.id) ? "none" : "inline" }} disabled={shouldDisable(flavor.id)} onClick={(event) => {handleCancel()}}>Cancel</button>
          </li>
        ))}
        </ul>
        </>
        // <>
        // <ul>
        // {flavors.map((flavor) => (
        //   <li key={flavor.id}>{flavor.title}
        //   <button onClick={() => {setFlavors(flavors.slice(0, 5))}}>Remove</button>
        //   </li>
        // ))}
        // </ul>
        // </>
    )
}

export default ListFlavors