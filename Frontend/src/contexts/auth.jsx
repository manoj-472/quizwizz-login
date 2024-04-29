import { createContext ,useContext,useState} from "react";


export const AuthContext = createContext()

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"))

    let isLoggedin=!!token;

    const LogOutUser=()=>{

        setToken("");
        return localStorage.removeItem("token");
         
    }
    const storeUserData=(token)=>{
        setToken(token);
        localStorage.setItem("token", token);
    }


    return <AuthContext.Provider value={{isLoggedin,storeUserData,LogOutUser}}>
        {children}
    </AuthContext.Provider>
}



export const  useAuth= () => {
    const authContextValue= useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth is used outside of provider")
    }
    return authContextValue;
}