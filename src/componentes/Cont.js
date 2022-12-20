import React, {useState, useEffect} from "react";

const NuevoMeme =()=>{
    
    const [memes,setMemes] = useState([]);
    const [memeIndex, setMemeIndex]=useState(0);

 
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(x=> x.json().then(response=> {const memes=response.data.memes; setMemes(memes)}));
        
     }, []);
     const handlerChange =(e)=>{
        const opcion = e.target.value;
        setMemeIndex(opcion)
         };

    
   return(
    memes.length ?
    <div>
        <select className="form" onClick={handlerChange} >
            {memes.map((item,i)=>(
            <option key ={memeIndex+i} value={i} onChange={handlerChange}>{item.name}</option>

            ))}
            </select>
            <img src={memes[memeIndex].url}/>
     </div>
      : <></>
      
   );
}

export default NuevoMeme;

// objeto.addEventListener('click', ()=>{

// })