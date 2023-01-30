 import React from "react";
 export const Heading = ()=>{
    return (
      <React.Fragment>
      <h1>
      welocme to learn react.
      </h1>
      
      <button className="btn-class">ma hun don</button>
      </React.Fragment>
          );
   //  const dummy = React.createElement("h1",{},React.createElement("span",{},"hai i m span tag"));
   //  console.log(dummy);
   // return React.createElement("h1",{},React.createElement("span",{},"hai i m span tag")); // internally wo asa bhajta ha.
}

//component -> js function that return jsx.
// jsx -> code that look like html.
// jsx -> jsx is nothing but syntactic sugar.
// jsx -> is compiled into js object via method called createElement.
// this method is supplied by react library.

// React.createElement("h1",{},"welcome to learn react");

// react App is nothing but bunch of nested createElement() method calls internally.
// createElement() methods -> returns javascript object.

// react app is nothing but gaint js object which is holding multiple js objects.

// visually we can call it as a tree hierarchy getting formed.

// REACT WORLD                                  JS/HTML WORLD

// TREE Hierarchy of js object.                 Tree hierarchy of HTML Elements.
// virtual DOM                                  DOM

// question ------ how this tree hierarchy of js objects given as output by 
// react app is converted into DOM Nodes????