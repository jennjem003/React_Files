import Mydiv11 from "./Mydiv11";
import { useEffect, useState } from "react";

const Mydiv1 = ({rname,n,setN}) =>{
    const user = rname;
    let[cnt, setCnt] = useState(0);

    const addCnt = () => {
        setCnt(++cnt);
        //cnt = cnt +1 ;
        //setCnt(cnt);
        console.log(cnt) ;
    }

    useEffect(()=>{
        console.log('변경되었다')
    },[]);//재랜더링 할때마다 재실행

    useEffect(()=>{
        console.log('Mydiv1 처음...')
        return(
            console.log('종료...')
        );
    },[]);

    useEffect(()=>{
        console.log('cnt변경으로 n변경')
        setN(cnt)
    },[cnt])

    return(
        <div className="mydiv1">
            <h2 className="div1">
                Mydiv1{user} 😫{n}
            </h2>
            <Mydiv11 user={user} divname={'나를 향한 핫뚜' + cnt}/>
            <div className="divbt">
                <button onClick={addCnt}>💖</button>
                <span>{cnt}</span>
            </div>
        </div>
    );

}

export default Mydiv1;