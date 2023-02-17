import { Link } from "react-router-dom";

const Wheader = ({title}) => {
    
    return(
        <>
        <div className="content">
        <div className="wh">
            <h1>{title}</h1>
            <div className="wddiv">
                <Link to="/"> 🌞 </Link>
                </div>
        </div>
        </div>
        </>
    );
}
export default Wheader;