import { useState,useEffect, useRef } from "react";

const Mycom = () => {

    const [tag,setTag] = useState();
    const txt1R = useRef();
    const txt2R = useRef();

    //컴포넌트가 처음 랜더링 되었을때
    useEffect(() => {
        txt1R.current.focus();
    },[]);//맨 처음 한번 실행(아이디에 커서 깜박깜박 자동으로 되게)

    const checkFrom = (e) => {
        e.preventDefault();
        setTag(`입력된 아이디는 ${txt1R.current.value}이고 
        비밀번호는 ${txt2R.current.value}입니다.`);
    }

    return(
        <>
        <form>
            <input ref={txt1R} type = "text" name ="txt1" placeholder="아이디 입력"/>
            <input ref={txt2R} type = "password" name ="txt2" placeholder="비밀번호 입력"/>
            <input type = "button" value="확인" onClick={checkFrom}/>
            <input type = "reset" value="취소"/>
        </form>
        <div>
            {tag}
        </div>
        </>
    );
}

export default Mycom;