import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const LocationDetail = () => {
    const navigate= useNavigate()

const backNavigation =()=>{
    navigate(-1)
}
    const params = useParams()
   
    console.log(params.name)
  return (
    <section>
    <h1>Location Details </h1>
    <p>{params.name}</p>
    <button onClick={backNavigation}>Go to location page </button>
  </section>
  )
}

export default LocationDetail