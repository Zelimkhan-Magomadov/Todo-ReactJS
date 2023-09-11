import { useState } from "react";
import "./App.css";

function App() {
  let [inputText, setInputText] = useState("");

  function onInputTextChange(text) {
    setInputText(text);
  }

  let [textItems, setTextItem] = useState([]);

  function onClickTextSave() {
    setTextItem([...textItems, { text: inputText, isDone: false }]);
    setInputText("");
  }

  function onClickTextRemove(id) {
    const newItems = textItems.filter((item, _id) => _id !== id);
    setTextItem([...newItems]);
  }

  let [isDone, setDone] = useState(false);

  function doneToggle(id) {
    const newArray = [...textItems];
    newArray[id].isDone = !newArray[id].isDone;
    setTextItem(newArray);
  }

  return (
    <div className="App">
      <input
        type="text"
        value={inputText}
        onChange={(event) => onInputTextChange(event.target.value)}
        style={{ margin: "16px" }}
      />
      <button onClick={onClickTextSave} style={{ margin: "8px" }}>
        Save
      </button>
      <ul>
        {textItems.map((item, id) => (
          <li
            key={id}
            style={{ textDecoration: item.isDone ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={() => doneToggle(id)}
            />
            {item.text}
            <button
              onClick={() => onClickTextRemove(id)}
              style={{ margin: "8px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
