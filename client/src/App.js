import "./App.css";
import Product from "./Product";
import { useState, useEffect } from "react";
import $ from "jquery";
function App() {
  const [task, settask] = useState("");
  const [taskdata, settaskdata] = useState([]);
  function getTask() {
    fetch("http://localhost:3001/getTask").then((res) =>
      res.json().then((data) => {
        settaskdata(data);
      })
    );
  }
  useEffect(() => {
    getTask();
  }, []);

  function saveTask() {
    fetch("http://localhost:3001/saveTask", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ task }),
    }).then(() => {
      settask("");
      getTask();
    });
  }
  return (
    <div id="container">
      <h2>Todo App</h2>
      <div id="btn">
        <input
          id="textbox"
          type="text"
          onChange={(e) => {
            settask(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              saveTask();
            }
          }}
          value={task}
          placeholder="Enter task...."
        />
        <button onClick={saveTask}>Add</button>
      </div>
      <div id="Productbox">
        {taskdata.map((data) => (
          <Product key={data._id} reRun={getTask} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
