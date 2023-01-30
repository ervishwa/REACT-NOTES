import  style from "./button.module.css";   // importing ->> default export
// here u getting style obj.
export const Button = (event) =>{
    // const style={
    // backgroundColor:"red"
    // }
    // console.log(style); // here style is an object.
    // yanha key jo ha jo humna css file ma class rakhi ha wo hota ha..and value webpack khud 
    // bnata ha kuch.
    // return <button  className={style["btn-class"]}>sumbit here your details.</button>
                             //yanha style.btn-class nhi likh skta b/c of btn-class not allow in js.
                             //so we use style["btn-class"].
//   let clickme = ()=> {
//     alert("i m clicked");
//   }                           

// return <button onClick={clickme}>sumbit here your details.</button>        // responding to events.  

// return <button style={event.style}   className={style["btn-class"]}>{event.children}</button>    //bhar sa koi html tag dal skta ha.
 return <button  {...event}  className={style["btn-class"]}></button>   // generic way of doing all the things
}                                                                      //ab humko event.children ki bhi jarurat nhi


// style={{
//     backgroundColor :"red"     // ek tarika ya bhi ha.
// }}


// prb ?
// prb is of scoping ....
// i.e css written inside button.css should only be visible to component that file.
// for all others it should not apply.


// WELCOME TO WEBPACK(javascript tolling)
