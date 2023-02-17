import { Route,Routes } from "react-router-dom";

import Wmenu from "./Wmenu"
import W1 from "./W1"
import W2 from "./W2"
import './W.css'
import item from "../db/item.json"
import weather from "../db/weather.json"
import weather2 from "../db/weather2.json"

const Wmain = () => {
    
    return(
        <>
        <Routes>
            <Route path="/" element={<Wmenu/>}/>
            <Route path="/W1" element={<W1/>}/>
            {/* <Route path="/W1/:item/:item2" element={<W1/>}/> */}
            <Route path="/W2" element={<W2/>}/>
        </Routes>
        </>
    );
}
export default Wmain;