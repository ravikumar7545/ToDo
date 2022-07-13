import React from "react";
import $ from "jquery";
function Product(props) {
  function deleteTask(val) {
    fetch("http://localhost:3001/deleteTask", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: val }),
    }).then(() => {
      props.reRun();
    });
  }

  return (
    <div id="box">
      <p id="title">{props.data.name}</p>
      <button
        onClick={() => {
          deleteTask(props.data._id);
        }}
        id="complete"
      >
        Completed
      </button>
    </div>
  );
}

export default Product;
