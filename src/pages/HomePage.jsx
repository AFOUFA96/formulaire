// import  Contact  from "../components/Contact";
// import NavBar from "../components/NavBar";
import Card from "../components/Card";
function HomePage(props){

    return(
        <>
            <h2 className="pageTitle lettre-space-5">Page d'accueil</h2>
            <Card image={process.env.PUBLIC_URL + "/images/pexels-karolina-grabowska-6793891.jpg"}
                title={"hello"}
                subTitle={"subtitle"}
                description={"description"}
            />
        </>
    )
};
export default HomePage;