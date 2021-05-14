import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return <div>Hello World</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));

let hEle= <h1>This is a heading</h1>;
console.log(hEle);
let divEle=React.querySelector('div');
ReactDOM.render(hEle, divEle);
