import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div", 
  { id: "parent" }, 
  [ // This is an array, so items inside need keys
    React.createElement("div", { id: "child", key: "section-1" }, [ 
      // Another array, items inside need keys
      React.createElement("h1", { key: "title-1" }, "first js"),
      React.createElement("h1", { key: "title-2" }, "Md Sufiyan js")
    ]),
    React.createElement("div", { key: "section-2" }, [
      // Another array, items inside need keys
      React.createElement("h1", { key: "title-3" }, "Md Danish js"),
      React.createElement("h1", { key: "title-4" }, "Md dilshad ")
    ])
  ]
);

        const root = ReactDOM.createRoot(document.getElementById("root"));
        
        root.render(parent);

      //  console.log(parent)