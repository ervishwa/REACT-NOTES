export const Newton = ()=>{
    const person = {
     name : "vishnu",
     age : 23
    }
    return <div>
        <h1>React class goin on</h1>
        <h3>my name is {person.name}</h3>
        <h3>my age is {person.age}</h3>
        <p>lorem</p>
        <button>Placement time?</button>
    </div>
}
// in react we create components -> components are nothing but simple 
// javascript functions that return HTML like code.
// this html like code is called JSX (JAVASCRIPT XML).
// imagine react component(which is essentially js function) as custom HTML Tag.
// anything use to print we will use in {}.

//React apps are made out of components. A component is a piece of the UI (user interface) 
//that has its own logic and appearance. A component can be as small as a button,
//or as large as an entire page.

//LOGIC? any function/component can have some js code written inside it.
// APPERANCE? it refers to the jsx code that we r returning.

// react follows concept of composition i.e. start from the samllest atomic 
// piece of ui and then , go bottom-up.
