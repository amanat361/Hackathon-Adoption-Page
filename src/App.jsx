// https://mui.com/material-ui/react-button/
import './App.css'
import React, { useState } from 'react'
import Card from './components/Card'
import data from './data.json'
import Filterbar from './components/Filterbar'
import Title from './components/Title'
import WhyAdopt from './components/WhyAdopt'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Popup from './components/Popup'
import AdoptionCenters from './components/AdoptionCenters'

export default function App() {

  const [whyAdoptPopup, setWhyAdoptPopup] = useState(false)
  const [aboutUsPopup, setAboutUsPopup] = useState(false)
  
  const [breed, setBreed] = useState(null)
  const [breedInput, setBreedInput] = useState('')
  const [age, setAge] = useState(null)
  const [ageInput, setAgeInput] = useState('')
  const [name, setName] = useState(null)
  const [nameInput, setNameInput] = useState('')

  function dogFilter(dog) {
    let isBreed = true
    let isAge = true
    let isName = true

    if (breed != null) isBreed = dog.breed === breed;
    if (age != null) isAge = dog.age === age;
    if (name != null) isName = dog.name === name;

    return isBreed && isAge && isName;
  }

  const dogs = data.filter(dogFilter).map(dog => <Card animal={dog} />);

  const filters = [
    {
      "value": breed,
      "handler": (newValue) => setBreed(newValue),
      "handler2": (newValue) => {
        if (newValue == '') setBreed(null);
        else setBreed(newValue);
        setBreedInput(newValue);
      },
      "options": [...new Set(data.map(dog => dog.breed))].sort(),
      "label": "Breed"
    },
    {
      "value": age,
      "handler": (newValue) => setAge(newValue),
      "handler2": (newValue) => {
        if (newValue == '') setAge(null);
        else setAge(newValue);
        setAgeInput(newValue);
      },
      "options": [...new Set(data.map(dog => dog.age))].sort((a, b) => a - b),
      "label": "Age"
    },
    {
      "value": name,
      "handler": (newValue) => setName(newValue),
      "handler2": (newValue) => {
        if (newValue == '') setName(null);
        else setName(newValue);
        setNameInput(newValue);
      },
      "options": [...new Set(data.map(dog => dog.name))].sort(),
      "label": "Name"
    },
  ]

  const handlers = [
    () => setAboutUsPopup(!aboutUsPopup),
    () => setWhyAdoptPopup(!whyAdoptPopup)
  ]

  return (
    <div>
      <Title/>
      <Filterbar filterProps={filters} handlers={handlers}/>
      {aboutUsPopup ? <Popup popupContent={<AboutUs/>} handleClick={handlers[0]}/> : null}
      {whyAdoptPopup ? <Popup popupContent={<WhyAdopt/>} handleClick={handlers[1]}/> : null}
      <div className="dogContainer">
        {dogs}
      </div>
      <AdoptionCenters/>
      <Footer/>
    </div>
  )
}
