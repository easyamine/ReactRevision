import './App.css';
import About from "./About"

function App() {
  return (
    <div>
      {(items.includes(demande))? <p>Voila votre demand : {demande}</p> </p>} :
      <p>{demande} n'existe pas de le Menu</p>
      <About></About>
    </div>
  );
}

export default App;
