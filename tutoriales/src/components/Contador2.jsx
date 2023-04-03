// El useState es un hook
// Importante: no usar hooks dentro de un condicional o bucle

import React, { useState } from 'react'

const Contador2 = () => {
  // En este caso se pasa como valor inicial un objeto
  // por lo cual counters tendra : left,rigth,clicks y mensaje
  const [counters, setCounters] = useState({
    left: 0,
    rigth: 0,
    clicks: 0,
    mensaje: 'Mensaje en el estado'
  })

  // En esta funcion define un nuevo objeto
  const handleClickLeft = () => {
    const newCountersState = {
      // donde se hace un spread de el objeto inicial counters
      // para no perder sus valores
      ...counters,
      // Y se actualizan los valores convenientes
      left: counters.left + 1,
      clicks: counters.clicks + 1
    }
    // NO HACER : counters.left++
    // Despues de actualizar los valores se guarda en el estado actualizado para renderizar
    setCounters(newCountersState)
  }
  const handleClickRight = () => {
    const newCounterState = {
      ...counters,
      rigth: counters.rigth + 1,
      clicks: counters.clicks + 1
    }
    setCounters(newCounterState)
  }
  return (
    <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>

        <button onClick={handleClickRight}>rigth</button>

        {counters.rigth}
        <p>Clicks totales:{counters.clicks}</p>

    </div>
  )
}

export default Contador2
