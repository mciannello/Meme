import React, {useState, useContext} from "react";

const userContext =React.createContext(); // creando la posibilidad de globalizar el contenido para la creación de usuario
const userToggleContext =React.createContext();
//glogalizado
export  function useUserContext(){
    return useContext(userContext);

}//contenido
export  function useUserToggleContext(){
    return useContext(userToggleContext);
    
}//funcionabilidad

export function UserProvider (props){
    
    const [user, setUser] = useState(null);
    const cambioLogin = () => {
        if (user){
            setUser(null);
        }else {
            setUser({
                name: "juan",
                mail: "juan@cac.com.ar"
            })
        }
    }
    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambioLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
        )
}