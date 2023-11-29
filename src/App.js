import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [myState, setMyState] = useState(["tache1", "tach2", "tache3"]);

  return (
    <div className="App">
      <header className="App-header">
        {myState.map((element) => {
          return <div>{element}</div>;
        })}
        <button
          onClick={() => {
            // 1 FAIRE UNE HARD COPY
            const newArr = JSON.parse(JSON.stringify(myState));

            // 2 FAIRE DES OPERATIONS SUR MON TABLEAU OU MON OBJET
            newArr.push("toto");

            // 3 REMPLACER LE STATE PAR LE NOUVEAU
            setMyState(newArr);
          }}
        >
          +
        </button>
      </header>
    </div>
  );
}

export default App;
