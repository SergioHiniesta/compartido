import "./App.css";

// Creando nuevos componentes
// Se les puede pasar props
const Mensaje = (props) => {
  return <h1 style={{ color: props.color }}>{props.msg}</h1>;
};
// los componentes deben ser nombrados con la primera letra en mayuscula
// para diferenciarlos de las etiquetas html

const Description = () => {
  return (
    <div>
      <h1>Describo el pie de pagina</h1>
      <p>Ah si?</p>
    </div>
  );
};
// Esta funcion es un componente totalmente reutilizable
const App = () => {
  // Se pueden crear variables
  const mensaje = "hola mundo";
  return (
    // Jsx se parece a html pero no es lo mismo
    // es codigo que se compila con babeljs y lo pasa a js
    // creando elementos
    // Para nombrar una variable dentro de jsx se usan {}
    <div className="App">
      {/* Se pueden pasar parametros dentro de las etiquetas */}
      <Mensaje color="blue" msg="mensaje sergio" />
      <Mensaje color="red" msg="Hola Jesus" />
      <Mensaje color="yellow" msg="adios mundo" />
      <Description />
    </div> 
  );
};

export default App;
