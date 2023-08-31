import { useState } from 'react'

function App() {
  const [eventValue, setEventValue] = useState("")
  const [eventDateValue, setEventDateValue] = useState("")
  const [eventsList, setEventsList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    const currentEvent = eventsList.find(e => e.name === eventValue)
    const eventName = eventValue.trim()
    
    if (!eventName) {
      alert("Seu campo 'nome' não pode ser vazio!")
      return;
    }

    if (!eventDateValue) {
      alert("Seu campo 'data' não pode ser vazio!")
      return;
    }


    if(!currentEvent) {
      setEventsList(prev => [...prev, {
        name: eventValue,
        date: eventDateValue
      }])
      setEventValue("");
      setEventDateValue("");
    } 
    else {
      alert("Esse evento já existe!!")
    }
  }

  console.log(eventsList);


  const changeEventValue = (event) => {
    setEventValue(event.target.value)
  }

  const changeEventDateValue = (event) => {
    setEventDateValue(event.target.value)
  }

  const  deleteItem = (name) => {
    const currentEvent = eventsList.filter(e => e.name !== name)
    setEventsList(currentEvent);
   
  }


  return (
    <>
      <div>
        <h1>Cadastrar Evento</h1>
        <form onSubmit={handleSubmit}>
          <p><label htmlFor="">Nome do Evento</label></p>
          <input value={eventValue} onChange={changeEventValue} type="text" placeholder="Digite o nome do evento" />
          <br />

          <p><label htmlFor="">Data</label></p>
          <input value={eventDateValue} onChange={changeEventDateValue} type="date" placeholder="Digite o nome do evento" />
          <p>
            <button type="submit">Salvar Evento</button>
          </p>
        </form>
        <hr />
        <h1>Eventos</h1>
        <ul>
          {eventsList.map(event => (
            <li key={event.name}>
              <strong>Nome:</strong><span> {event.name}</span>
              <br />
              <strong>Data:</strong><span> {event.date}</span>
              <br />
              <button onClick={() => deleteItem(event.name)}>excluir</button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
