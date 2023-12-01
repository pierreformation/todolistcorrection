import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    { name: "tototot", done: false },
    { name: "tatata", done: false },
    { name: "titi", done: true },
  ]);
  const [myInput, setMyInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const myNewList = list.filter((el) => el.name.includes(searchTerm));

  return (
    <div className="App">
      <div className="title">TODOLIST</div>

      {/* INPUT CONTROLLE PAR UN STATE */}
      <input
        type="text"
        value={searchTerm} // NE PAS OUBLIER DE CONTROLLER LA VALUE
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div>
        {/* AFFICHAGE DES ELEMENTS DU TABLEAUX */}
        {myNewList.map((element, i) => {
          return (
            <div
              onClick={() => {
                const arrCopy = JSON.parse(JSON.stringify(list));

                const myTruePosition = list
                  // [{name:"toto",done:true},{name:"tata",done:true}]
                  .map((el) => el.name) // transformer le tableau d'objet en tableau de string
                  //  ["toto","tata"]
                  .indexOf(element.name);

                arrCopy[myTruePosition].done = !arrCopy[myTruePosition].done;
                setList(arrCopy);
              }}
              className={!element.done ? "element" : "elementLT"}
            >
              {element.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // chercher la position dans le tableau original
                  const myTruePosition = list
                    .map((el) => el.name)
                    .indexOf(element.name);
                  // 1 copy
                  const newArr = JSON.parse(JSON.stringify(list));
                  // 2 operation
                  newArr.splice(myTruePosition, 1);
                  // 3 remplacer le state
                  setList(newArr);
                }}
              >
                X
              </button>
            </div>
          );
        })}

        {/* INPUT CONTROLLE PAR UN STATE */}
        <input
          type="text"
          value={myInput} // NE PAS OUBLIER DE CONTROLLER LA VALUE
          onChange={(event) => {
            setMyInput(event.target.value);
          }}
        />

        {/* BOUTONS POUR AJOUTER UN ELEMENT "TOTO" DANS LE TABLEAU */}

        <button
          onClick={() => {
            if (myInput === "") {
              return;
            }
            // 1 FAIRE UNE HARD COPY
            const newArr = JSON.parse(JSON.stringify(list));
            // 2 FAIRE DES OPERATIONS SUR MON TABLEAU OU MON OBJET
            newArr.push({ name: myInput, done: false });
            // 3 REMPLACER LE STATE PAR LE NOUVEAU
            setList(newArr);
            // Vider l'input
            setMyInput("");
          }}
        >
          Ajouter un élément
        </button>
      </div>
    </div>
  );
}

export default App;
