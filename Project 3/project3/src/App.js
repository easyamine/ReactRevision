import { useState } from 'react';
import './App.css';
import Form from "./form.js"

function App() {
  const [Sold, SetSold] = useState(100)
  const [ValueA, SetValueA] = useState(0)
  const [ValueB, SetValueB] = useState(0)
  const [ValueC, SetValueC] = useState(0)


  function SendA(ValueA) {
  SetValueA(parseInt(ValueA))
  SetSold(Sold + parseInt(ValueA))
  }
  function SendB(ValueB) {
    SetValueB(parseInt(ValueB));
    if (Sold - parseInt(ValueB) < 0) {
      Afficher()
      console.log("Error")
    } else { SetSold(Sold - parseInt(ValueB)) }
    }
function SendC(ValueC) {
      SetValueC(parseInt(ValueC))
      SetSold(Sold - parseInt(ValueC))
      }

      function Afficher() {
        return(<div>Error</div>)
      }


  return (
    <div className="App">
      <h1>Bienvenue dans l'espace client de votre </h1>
      <p>Votre solde est: {Sold}</p>
      <h3>Nos Service</h3>
      <div>
        <Form Operation="Recharger votre compte" Send={SendA}></Form>
        <Form Operation="Virement" Send={SendB}></Form>
        <Form Operation="Recharger Telephone" Send={SendC}></Form>

        <div>{Afficher}</div>
      </div>
    </div>
  );
}

export default App;
