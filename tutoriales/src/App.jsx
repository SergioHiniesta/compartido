import "./App.css";
import  Contador  from "./components/Contador";
import  Contador2  from "./components/Contador2";
import Avatar from "./components/Avatar"
import FormNotes from "./components/FormNotes";
// Creando nuevos componentes
// Se les puede pasar props
const Mensaje = (props) => { 

  // desestructuracion 
  const {color} = props
  // extraemos la propiedad de un objeto
  // indicando el campo del objeto que queremos extraer

  // se puede desestructurar el objeto directamente en la funcion
  // const Mensaje = ({color})
  return <h1 style={{ color: color }}>{props.msg}</h1>;
};
// componente en una sola linea
const Title = ({course})=><h1>{course}</h1>
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

const mensajes=[
  {id:1, msg: "Hola", color: "red"},
  {id:2, msg: "Hola", color: "blue"},
  {id:3, msg: "Hola", color: "yellow"},
  {id:4, msg: "Hola", color: "green"}
]

const notes =[
  {
    id:1,
    content: " HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id:2,
    content: " Loading...",
    date: "2019-05-30T17:30:31.098Z",
    important: false
  },
  {
    id:3,
    content: " Hello world",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  }
]


// Esta funcion es un componente totalmente reutilizable
const App = () => {
  // Se pueden crear variables
  //const mensaje = "hola mundo";
  if (!mensajes || mensajes.length ===0 ){
    return "no hay mensajes"
  }
  return (
    // Jsx se parece a html pero no es lo mismo
    // es codigo que se compila con babeljs y lo pasa a js
    // creando elementos 
    // Para nombrar una variable dentro de jsx se usan {}
    <div className="App">
      {/* Se pueden pasar parametros dentro de las etiquetas */}
      <Title course="Prueba titulo"></Title>
      {
        // Implementacion de varios componentes con iteracion
        // IMPORTANTE : cuando se itera una lista de elementos 
        // meter un key unico a cada uno de los componentes creados
        mensajes.map((mensaje)=><Mensaje key={mensaje.id} color={mensaje.color} msg={mensaje.msg} />)
      }
      <Mensaje color="blue" msg="mensaje sergio" />
      
      <Description />
      <Contador></Contador>
      <Contador2></Contador2>
      <Avatar id="25" size="small" name="JSXlady"></Avatar>
      <Avatar id="10" size="large" name="JSXlady"></Avatar>
      <FormNotes notes={notes}/>
    </div> 
  );
};


export default App;
