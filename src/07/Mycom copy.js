import { useState,useEffect, useRef } from "react";

const Mycom = () => {
    //컴포넌트 내부 변수
    let cnt1 = 0;

    //컴포넌트의 state변수
    const[cnt2,setcnt2] = useState(0);//사용가능하게 내가 만들어줌

    //ref변수
    const cnt3 = useRef(0);

    //함수
    const showCnt = () => {
        console.log(`cnt1 = ${cnt1}`);
        console.log(`cnt2 = ${cnt2}`);
        console.log(`cnt3 = ${cnt3.current}`);
    }
    const addCnt1 = () => {
        cnt1 = cnt1 + 1 ;
        //console.log(cnt1)
        showCnt();
    }

    const addCnt2 = () => {
        setcnt2(cnt2 + 1) ;
    }
    useEffect(()=>{
        //console.log(cnt2);
        showCnt();
    },[cnt2])

    const addCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    }

    return(
        //버튼태그<button>cnt1증가</button>
        <>
            <ul>
                <li>cnt1 = {cnt1}</li>
                <li>cnt2 = {cnt2}</li>
                <li>cnt3 = {cnt3.current}</li>
            </ul>
            <form>
                <input type="button" value="cnt1 증가" onClick = {addCnt1}/>
                <input type="button" value="cnt2 증가" onClick = {addCnt2}/>
                <input type="button" value="cnt3 증가" onClick = {addCnt3}/>
            </form>
        </>
    );
}

export default Mycom;