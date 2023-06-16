import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export default function NewsDetail(){
    useEffect(()=>{
        document.title = "News";
    }, [])
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');
    return(
        <>
            <h1>{id}</h1>
        </>
    )
}