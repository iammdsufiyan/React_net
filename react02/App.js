import React from "react";
import ReactDOM from "react-dom/client";


        const jsxHeading = <h1 id = "heading"></h1>;
        const root = ReactDOM.createRoot(document.getElementById("root"));
        const ElementOfReact = ()=> <h1>this is a elemet of react made by jsx</h1>
        const Title = ()=>{
          return <h1>this is a react functional component</h1>
        }
        const Heading2 = () =>( 
          <div>
            <Title/> 
            <ElementOfReact/>
        <h1>this is react functional componenet without return</h1>
          </div>)
       
      
        root.render(<Heading2/>);

      //  console.log(parent)