import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},
    [ React.createElement("div",{id:"child1"},
     [React.createElement("h1",{},"Im h1 tag"),React.createElement("h2",{},"This is React via npm")]), React.createElement("div",{id:"child2"},
         [React.createElement("h1",{},"Im h1 tag"),React.createElement("h2",{},"Im h2 tag")])]
 );
 const root =ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent)
 console.log(parent) 