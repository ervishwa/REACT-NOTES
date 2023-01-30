import { Fragment, useState, useEffect } from "react";
import { Button } from "../button/button"
const Counter = () => {
    let [count, setCount] = useState(0);


    useEffect(() => {
        console.log("i got mounted");
        return () => {
            console.log("i got unmounted");
        }

    }, []);


    useEffect(() => {
        console.log("hay i got renderd");

    })

    const inccount = () => {
        setCount(inc => inc +1);
        setCount(inc => inc +1);
        setCount(inc => inc +1);
        

    }
    const diccount = () => {
        setCount(count - 1);

    }
    return (
        <Fragment>
            <div>
                <Button onClick={inccount} >
                    incriment.
                </Button>
                <Button onClick={diccount}>
                    dicriment
                </Button>
                <div>
                    {count}
                </div>
            </div>
        </Fragment>
    )
}
export default Counter