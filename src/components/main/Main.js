import {useState, useEffect} from "react";
import Cat from "../cat/Cat";
import Limit from "../limit/Limit";


const Main = ()=> {
    const [cats, setCats] = useState([])
    const [limit, setLimit] = useState(10);
    useEffect( ()=>{
        try{
            fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
                .then(response=>response.json())
                .then(data=>setCats(data))
        }catch (msg){
            console.log(msg)
        }
    }, [limit])

    const limitChangeHandler = (data)=> {
        setLimit(data)
    }
    console.log(limit)

    return (
        <>
            <Limit limitChange={limitChangeHandler}/>
        <div className="row">
            {cats?.map(cat=> <Cat key={cat.id} id={cat.id} image={cat.url}/>)}

        </div>
        </>
    )
}

export default Main