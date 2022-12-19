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
