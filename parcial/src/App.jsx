import Form from "./components/Form"
import './App.css'
import Card from "./components/Card";
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [film, setFilm] = useState("");
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(false);


  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeFilm = e => {
    setFilm(e.target.value)
  }

  const handleSubmit = e =>{
      e.preventDefault();

      if(name.trim().length != name.length || name.length <= 3 || film <= 6){
        setMostrar(false)
        setError(true)
        setError('Por favor chequea que la informacion sea la correcta')
        // if(name.length <= 3){
        //   console.log(name);
        //   console.log(film);
        // }
      } else {
        setMostrar(true)
        setError(false);
      }
  }

  return (
    <>
      <Form
      onChangeName={onChangeName} 
      onChangeFilm={onChangeFilm}
      handleSubmit={handleSubmit} 
      >
      </Form>
      {error && <p>{error}</p>}
      {mostrar && <Card name={name} film={film}/>}
    </>
  )
}

export default App