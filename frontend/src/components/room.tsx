import { useEffect } from "react";
import { URLSearchParamsInit, useParams, useSearchParams } from "react-router-dom";

export const Room = () => {
    const [searchParams , setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
     
    useEffect(()=> {
        // logic to init user room.
    },[]);
     

    return (
        <>
        <h1>Hi {name} </h1>
        </>
    )
};