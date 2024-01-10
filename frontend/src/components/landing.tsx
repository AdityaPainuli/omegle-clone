import { useState } from "react";
import { Link } from "react-router-dom";

export const Landing = ( ) => {

    const [name , setName] = useState<string>("");
    return (
        <>
        <input type = "text" value = {name} onChange = {(e)=> setName(e.target.value)} />
        <Link to= {`/room/?name=${name}`}>Join room</Link>
        </>
    )
};


