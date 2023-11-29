import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [char, setChar] = useState({})
  const {id} = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(() => {
    axios(url)
    .then(res => setChar(res.data))
  }, [])

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>{char.name}</h3>
      <h4>{char.username}</h4>
      <h4>{char.email}</h4>
      <h4>{char.phone}</h4>
      <h4>{char.website}</h4>
    </>
  )
}

export default Detail