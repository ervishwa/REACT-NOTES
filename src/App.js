import logo from './logo.svg';
import './App.css';
import { Panel } from "./component/panel/panel"
// import {Master} from "./component/master/master"

import Master from "./component/master/master"
import { ProductList } from "./component/product-list/product-list"
import { Button } from "./component/button/button"
import { Fragment, useState ,useEffect} from 'react';
import Counter from "./component/counter/counter"
import Form from "./component/form/form"
import Parent from './component/parent/parent';

function App() {
  // const name = "vishnu";
  // const age = 19;
  // const sex = "male";

  // const ans = <Panel name={name} age={age} sex={sex}></Panel>;

  // let Ans;

  // if (age > 20) {
  //   Ans = <Panel name={name} age={age} sex={sex}></Panel>;
  // } else {
  //   Ans = <Master></Master>;
  // }


  // return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>
  //   // <Master></Master>
  //   // <Panel name={name} age={age} sex={sex}></Panel>
  //   // Ans

  // );

  // return age > 20 ? <Panel name={name} age={age} sex={sex}></Panel> : <Master></Master> ;  // one more syntax.
  
  
  
  
  let [isCounterShown,SetisCounterShown] = useState(true);

  

  const changevisibility = ()=>{
     SetisCounterShown(!isCounterShown);
  }
   
  return (
    // <div>
    //   {Ans}     // div ka ander likhoge to Ans ko excess karna ka liya {Ans} eska ander likhna padega..
    // otherwise direct return Ans ...   return {Ans} will not work.
    // </div>
    // Ans
    // <ProductList></ProductList>
    // <Panel name={name} age={age} sex={sex}></Panel>
    // <Fragment>
    // <Button id="kimg"   style={{backgroundColor:"green"}}>
    //   <span>hay lol!</span>
    // </Button>
    // </Fragment>
    // <Fragment>
    //   <button onClick={changevisibility}>change counter visibility.</button>
    //   {
    //   isCounterShown ? <><Counter></Counter>
    //   </>
    //   : ' '
    //   }
    // </Fragment>
    <Fragment>
      {/* <Form></Form> */}
      {/* <Parent></Parent> */}
      <Counter></Counter>
    </Fragment>
  )
}

export default App;
