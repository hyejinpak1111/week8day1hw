import Car from '../components/Car';
import CarInformation from '../components/CarInformation';
import { useState } from 'react';

function Cars() {
  const [cars, setCars] = useState([
    {
        "id": 1,
        "make": "Toyota",
        "information": {
            "model": "Supra",
            "color": "Matte Black",
            "year": 2021
        }
    },
    {
        "id": 2,
        "make": "Ford",
        "information": {
            "model": "Mustang",
            "color": "Silver",
            "year": 2018
        }
    },
    {
        "id": 3,
        "make": "Kia",
        "information": {
            "model": "EV6",
            "color": "White",
            "year": 2022
        }
    },
    {
        "id": 4,
        "make": "Mercedes-Benz",
        "information": {
            "model": "G63 AMG",
            "color": "Green",
            "year": 2019
        }
    }
  ])

  const [carInformation, setCarInformation] = useState(cars[0])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Click on the Car to learn more about it!</h2>
        <CarInformation car={carInformation} />
        <hr />
        { cars.map((car) => <Car clickHandler={setCarInformation} key={car.id} car={car} />) }
      </header>
    </div>
  );
}

export default Cars;