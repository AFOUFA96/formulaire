import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LogoutPage(props){

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        document.cookie = `auth=null;max-age=0`;
        setAuth({ role: 0 });
        navigate("/");
    },[])

    return (
        <h2 className="pageTitle lettre-space-5">Logout Page</h2>
    );
    
}
export default LogoutPage;