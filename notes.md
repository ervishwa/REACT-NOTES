create react app :

npx create-react-app <app name>

create-react-app -> here seems like a installed cli software just like npm or node.

but there are times where we do not want to install these cli software at the same time we want 
to use them.

OR we can do like this.

Create react app:->
1- npm install -g create-react-app
2- create-react-app newton-day1



.........................................

how to import/export components in react :

2 ways:

1. Named export 
2. Default export 

1. Named export :-

export <Name>

import {<Name>}  from "<File Name>"

Note :
multiple named exports can be made from a single file.


2. Default export :-

export default <Name>

import <Name>  from "<File Name>"

incase of default export ....<Name> can be anything ...it need not to be the same...

Note :->

only 1 default export can be made from a single file.


pure function:-

function multiplyby2(intx){
    return 2*x;
}
multiplyby2(3)-> 6
multiplybt2(4)-> 8.

it will give same output for same set of input is known as pure function.


--------------
in react keeping components pure it means it will return same output for same set of input.

<panel name="vishnu"> ->  <h1>vishnu</h1>

<panel name="king"> ->  <h1>king</h1>

if props are same the generated jsx will be alws the same.


----------------

whenever u want ur ui to reflect the changes that u have done on any variable or anything then u have to keep 
that varaible in some special place..

state -> at current point what is visible to u that is current state ...

for changing anything on ur ui or we can say for changing state of ur ui.u have to give that variable a special
place from which ur changing ur state..

now i will call that varaible a state varaible..b/c this varaible will change the state of my application.

now react bolta ha in import statement 

import { Fragment } from 'react';

import one more method called useState..

import { Fragment ,useState} from 'react';

useState humna bola ek method ha but react esko method nhi bolta react says this is a HOOK..simple bhasa ma 
esko method bolta hn.. but esko react Hook bolta hn.

any name which start with hook that will be called Hook.(that how u can differntiate a method from a hook.)

jab bhi humko count inc karna ho ui ma then...
< 
  let count = 0;
  const inccount = ()=>{
    count ++;
     console.log(count);
  }
return (
  <Fragment>
   <Button onClick={inccount} >
     incriment.
   </Button>
   <div>
    {count}
   </div>
   </Fragment>
    
  )
>
asa nhi karenga....humko count ko special jagh rakhna padega ...

now hum phale useState import karenga react sa ...
then
<
 let [count,setCount] = useState(0);
 let count = 0 ; upar wala same ya kam karega...
 and 
 for incremnet purpose ya humko method return karta ha hmara case ma ya 
 setCount() ha..
  const inccount = ()=>{
    setCount(count + 1);
  }
  asa inc karna padega....

  click karna pa inc wo 
  return(
  <Fragment>
   <Button onClick={inccount} >
     incriment.
   </Button>
   <div>
    {count}
   </div>
   </Fragment>
    
  )
  it will work now...
>
----------------------------

setCount ----> Looks like async operation in js we all learn that 
all async function calls goto queues..
that implies setCount might be going in a queue and execution stack continue executing 
rest of the code....

Now ,if we all 

setCount()
setCount()
setCount()

3 times... we can assume all this three method get Queued up in some queue...
once execution stack is empty this will be picked up and executed...

but on execution of each setCount.. value of count remains the same because of 
CLOSURE  getting formed..
for solving this prb ek bar call karna pa count 3 hojae for that
const inccount = () => {
        setCount(inc => inc +1);
        setCount(inc => inc +1);
        setCount(inc => inc +1);
        

    } ek function use karo eska ander it will work.(function kya kreaga jo bhi count ki value ha usko plus one kar do.)
by supplying updater function instead of directly writing experession.


----------------------------

component lifecycle:
(phase)

Mount --------> Render/Re - Render --------> Unmount

Mount -> component jb first time load hua ui pa ya dikha first time eska mtlb wo Mount hua.

and jb bhi hamra component ui sa hatta ha at that time we say hamara component Unmount hogya...

Re-Render -> whenever any state variable changed i say my component got re-renderd.

Note -> whenever ur component got re-rendered all the values of ur state varaibles are lost.
pheer wo dubaara intial value sa start hota ha jo hamra phale tha...


useEffect(()=>{
    console.log("hay i got rendered");  
})
------> this implies that execute this code whenever code mounts/re-renders.

useEffect(()=>{
    console.log("hay i got rendered");
},[])   for only mounting phase...
 
hum unmounting phase ka bhi pta kar skta hn...

useEffect(()=>{
    console.log("i got mounted");
     return ()=>{
        console.log("i got unmounted");
     }
},[])

useEffect humko ek or option deta ha jis sa ki hum ek or function return kar skta hn wo tabhi 
he call hoga jb apka component  unmounted hoga...

---------------------------------
Control components / unControlComponents

uncontrol components -> a components whose state is geeting changed and react is not handling that state changed.(a component whose state  change is not governed by react.)


react Event on change :-
    console.log("event by react-")   
     console.log(event); 
     console.log("event by js-")  
     console.log(event.nativeEvent)

-----------------------------------
in form
onSubmit default function ko rokna ka liya we use..
onst MangeSubmit = (event)=>{
     console.log(event);
     event.preventDefault();
    }
    event.preventDefault();

------------------------------------

stateless / statefull component...

jiska ander state sa related nothing(kuch nhi ha) then i will call that functional component as a stateless component.

if any funcional component if they r using states(in it) then i will that functional component as a 
statefull component...

atomic component -> smallest component of ur ui.

Guidlince related to stateless or statefull component by react...
1-> all atomic component should be the stateless component..
2-> statefull wanha hona chaiya which are actually a combination of small small stateless component.


--------------------------------
npm run build

ek new folder build kar ka (ban jaega.)

WebPack :->

will minified or uglified ur all files..(sari js ki files lega or usko ek ma bundel kar dega..)

bc/  time bachega , space kam lega , jaldi load hoga

server pa hum build folder he upload karenga in the end sirf html , css , js file he jati hn...
webpack sbko compress kar dega..
---------------------------------
Developer -> 

git clone<>
npm i

npm run start-> 

----------------

code changes-----
git stage 
git commit -m""
git push 
-----------------

Automation workflow ->

As soon as new code gets merged into remote branch ------->

pipeline triggers!

underlying tech -> that will run on some machine and they can execute some instruction which developer 
has given.


--------------------

Hooks :->

1->order of hooks matter.(mtlb jo hook phale likha hoga tumna apna code ma that will be executed first.)
2-> u can't write useeffect in a if condition.(i mean conditional statement) nor loops.
3-> they should be alws declare in starting of your component.
4 -> u cant write somthing of async await in callback of hooks.(it should alws be synchronous.)


----------------------

Render -> Render means ur calling that component(function) again (or i say reload).
react jb bhi rerender hoga all piece of code dubara chalaega...har baar.

-----------------------

Trigger - Render - commit (Cycle)

index.js(Root file) -> App Component  -> Counter Component

what happend when we load rect app for the first time ?

React Dom -> will take input -> collection of js objects.
and Internally it will talk to actual Dom APIs like appendChild()


what happens when we want to change something in UI ?

for that we need to change state..
for change state we sue -> useState Hook...
which gives setter function using this setter fun we trigger 1 re-render..


Note -> if state of your parent component changes then all of its child componenet will render too..


Please aware of that there is differnce bw re-render and commit..(render mtlb code dubara execute karna
and commit ka mtlb dubara sb ui pa paint karna.(dikhna browser pa))


----------------------------------------------

paradigms :->
1-> Imperative ( friend car drive example (guide him about roads.(imperative approach)))
2-> Decelarative (uber ola kar liya bs bta diya mereko bhai yanha jana ha usko bataunga nhi ksa ksa jana ha that approach is known as decelarative approach..)

Note -> hum react ma bs state change karta hn usko bolta hn bs (let count variable chnge) kar do mereko nhi pta ksa karoge that kind approach is known as decelarative approach..


------------------------------------------------

Updating Objects in state :->














