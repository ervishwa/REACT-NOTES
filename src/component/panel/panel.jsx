import { Heading } from "../heading/heading";
import { Link } from "../link/link";
import { Button } from "../button/button";

export const Panel = ({ name, age, sex, proffesion = "enginner" }) => {     //asa he karta hn esi ko <props> bolta hn.
   console.log("yesss");
   console.log(name, age, sex, proffesion);
   // const ans = "king";
   return(
    <div>



      <Heading />
      <Link />
      <Button />

   </div>
)}