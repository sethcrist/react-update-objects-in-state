import React, { useState } from "react";

const MyComponent = () => {

  const [car, setCar] = useState({ year: 2024, make: "Nissan", model: "GTR" })

  const handleYearChange = (e) => {
    setCar(c => ({ ...c, year: e.target.value })) //spread operator will save the make, model of the cars initial properties. c = car
  }
  const handleMakeChange = (e) => {
    setCar(c => ({ ...c, make: e.target.value }))
  }

  const handleModelChange = (e) => {
    setCar(c => ({ ...c, model: e.target.value }))
  }

  return (
    <>
      <p>your favorite car is a: {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange} /><br />
      <input type="text" value={car.make} onChange={handleMakeChange} /><br />
      <input type="text" value={car.model} onChange={handleModelChange} /><br />
    </>
  )
}

export default MyComponent