import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Presenter } from './presenter/Presenter';
import { Flavor } from './model/Flavor';
import AddFlavor from './views/AddFlavor';
import ListFlavors from './views/ListFlavors';

function App() {
  const presenter = new Presenter();

  const [flavors, setFlavors] = useState<Flavor[]>([]);

  const handleFlavorChange = async () => {
    var flavorList = await presenter.loadFlavors();
    setFlavors(flavorList);
    console.log(flavorList);
  }
  
  useEffect(() => {
    const loadFlavors = async () => {
      return await presenter.loadFlavors();
    }
    var flavorList = loadFlavors();
    flavorList.then((data) => setFlavors(data));
  }, [])

  return (
    <>
    <AddFlavor presenter={presenter} flavors = {flavors} flavorChange = {handleFlavorChange}/>
    <ListFlavors presenter={presenter} flavors = {flavors} flavorChange = {handleFlavorChange}/>
    </>
  )
}

export default App
