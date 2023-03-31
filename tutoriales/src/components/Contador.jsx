import React from "react";
import { useState } from "react";

const Contador = () => {
  // Se guarda el valor del estado en una variable
  const contador = useState(0);
  // Que devuelve un array de 2 posiciones donde la primera
  // Es el estado inicial y la segunda el valor actualizado
  const valorContador = contador[0];
  const updateContador = contador[1];

  // Desestructurado queda de esta forma
  //const [contador, updateContador] = useState(0)

  // De tal forma que si se añade un intervalo de 1 segundo

  // No recomendable con SetInterval dentro de un componente
  // setInterval(() => {
  //     // Y se le suma 1 al valor actualizado para que pase a ser
  //     // el nuevo valor principal del estado
  //     updateContador(valorContador+1);
  // }, 2000);

  // Se puede definir la funcion fuera y llamarla en el evento
  // const handleClick = () =>{
  //     updateContador(valorContador+1)
  // }
  // onClick={handleClick}
  const handleClickReset = () => {
    updateContador(0);
  };

  const esPar = valorContador % 2 === 0;

  return (
    <div>
      <small>{esPar ? "Es par" : "Es impar"}</small>
      <div>{valorContador}</div>
      <button 
        onClick={() => {
          updateContador(valorContador + 1);

          // Se puede actualizar tambien pasandole una funcion
          // setContador(prevContador=>{
          //     return prevContador+1
          // })
        }}
      >
        Incrementar
      </button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};
export default Contador;