import {Outlet} from "react-router-dom";
import MyNavBar from "../components/MyNavBar";

function BaseScreen(props){

    return(
        <>
            <MyNavBar />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
};
export default BaseScreen;