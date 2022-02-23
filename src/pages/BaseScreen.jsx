import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
function BaseScreen(props){

    return(
        <>
            <NavBar />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
};
export default BaseScreen;