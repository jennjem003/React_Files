import GalC1 from "./GalC1";
import GalCard from "./GalCard";
import { useState, useEffect,useRef } from "react";

const GalMain = ({ c1, Galdata }) => {
    //console.log("c1", c1)
    //console.log("Galdata", Galdata)

    let [selC1,setselC1] = useState();
    let [selData,setselData] = useState();
    const txtR = useRef();

    useEffect(()=>{
        txtR.current.focus();
    },[])

    useEffect(() => {
        //console.log("selC1", selC1)
        setselData(Galdata.filter((i)=>i.galTitle===selC1)[0])
    }, [selC1])

    useEffect(() => {
        console.log("selData", selData)
    }, [selData])

    const[c1Tag, setC1Tag] = useState([]);

    const showC1 = () => {
        //console.log(txtR.current.value)
        let temp = c1.filter((i) => i.includes(txtR.current.value))
        setselC1('');
        setC1Tag(
            // temp.map((i) =>
            // <li className={ i === selC1 ? 'ulis' : 'uli'}
            //     onClick ={ () => selItem }
            //     key={i}>
            //     {i}
            //     </li>)
            temp
        )
    }


    return (
        /* 예시
        <div className = content (큰틀)>
        <div className = conleft > <ul>목록(c1)</ul> </div>
        <div className = conright> 상세내용(card) </div>
        </div>
        */
        <>
            <div className="content">
                
                    <form>
                        <input ref={txtR} type="text" name="txt1" onChange={showC1}/>
                        <button type="reset">취소</button>
                    </form>
                
                <GalC1 c1={c1Tag} setselC1={setselC1}/>
                {selData && <GalCard selData={selData} setselData={setselData}/>}
                
            </div>
        </>
    );
};

export default GalMain;