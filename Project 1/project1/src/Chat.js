import React, { useState } from "react";
import ReactDOM from "react-dom"

function Chat({user, ChatMessage, SendMsg}) {

  const [msg, setmsg] = useState("")

  const inputChangeHandler = (e) => setmsg(e.target.value);

    return (
      <div className="App">
        <header className="App-header">
          <div className="Side2">
          <h2 className="header">{user}</h2>
          <form onSubmit={(e) => {e.preventDefault(); SendMsg(msg)}}>
          <input placeholder="Ecrice un message" onChange={inputChangeHandler} value={msg}></input>
          </form>
          <button onClick="AddButton">Envoyer</button>
          <h2 className="message">Message</h2>
          <h3>{msg}</h3>
          </div>
        </header>
      </div>

    );
  }




//   class About extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (
//             <div style={App}>
//                 <h2>{this.props.header}</h2>
//                 <input></input>
//                 <br></br>
//                 <button></button>
//                 <h1>{this.props.header}</h1>
//                 </div>
//         );
//     }
// }




export default Chat;