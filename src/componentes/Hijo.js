import React, {useUserContext, useUserToggleContext} from "../UserProvider";


const Hijo = ()=>{
    const user = useUserContext();// pasal la info del padre al hijo
    const cambioLogin = useUserToggleContext();


    return(
        <div>
        <h2> Este es mi hijo</h2>
        {user &&<p>Hola{user.name}</p>}
        <button onClick={cambioLogin}>cambio login</button>
        </div>
    )
}

export default Hijo;


<figure className ="exportarImg" id='exportarImg'>
            <p>{textmeme}</p>
            <img src={`./memes/${imgmeme}.jpg`} alt="meme"/>
         </figure> */}
         

         
    const seleccionarImg = (e)=>{
        setImgmeme(e.target.value);
        
    }

    <img 
    key={template.id} 
    src={template.url}
     alt={template.name} />
);

<select className='form'>
            {!template && templates.map(template =>{
                return (
                    <option value={template.id} onChange={seleccionarImg}>{template.name}</option>
                
                )
                })};
                </select>