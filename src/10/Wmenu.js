import Wheader from "./Wheader";
import { Link } from "react-router-dom";
const Wmenu = () => {
    
    return(
        <>
        <div className="content">
        <Wheader title={'일기예보'}/>
        <ul>
            <li className="menu1"><Link to="/W1">단기예보</Link></li>
            <li className="menu2"><Link to="/W2">장기예보</Link></li>
        </ul>
        </div>
        </>

    );
}
export default Wmenu;