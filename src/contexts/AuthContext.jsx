import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({role:0});

    useEffect(()=>{
        fetch("http://localhost:5000/auth", {credentials:'include'}).then((resp) => resp.text())
        .then((text) => {
            const data = JSON.tryParse(text);
            if(data.status){
                setAuth({role:data.role});
            }
            else{
                document.cookie = `auth=null;max-age=0`;
                setAuth({role:0})
            }
        });
    },[])
  
    return (
      <AuthContext.Provider value={{auth, setAuth}}>
        {children}
      </AuthContext.Provider>
    );
  }

  export {AuthContext, AuthProvider};