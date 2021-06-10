import React, { useState } from "react";
import ReactDOM from "react-dom"

function About() {
    const [order, setOrder] = useState('')
    const items = ["Coffee", "Expresso", "Cappuccino", "Iced"]
    function updateOrder(event) {
        const order1 = event.target.value;
        setOrder(order1)
    }


    return (
        <div className="App">
            <div className="Side1">
            <h1>Client</h1>
            <h3>Je Veux:</h3>
            <input onChange={updateOrder}></input>
            <button>Demander</button>
            <h3>Serveur :</h3>
            <p>Voila votre demande {order} Desole jus d'orange n'existe pas dans notre menu</p>
            </div>
            <div class = "vertical"></div>
            <div className="Side2">
            <br></br>
            <h1>Cafe</h1>
            <h3>Menu</h3>
            <ol>
                <li>COFFEE</li>
                <li>EXPRESSO</li>
                <li>CAPPUCCINO</li>
                <li>ICED</li>
            </ol>
            </div>
        </div>
    );
}


export default About;