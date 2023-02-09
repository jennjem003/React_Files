import data from '../db/Data.json'
import GalCard from './GalCard';
import Galcard2 from './Galcard2';
import "./Gal.css";
import { useRef, useState, useEffect } from 'react';

const GalSelect = () => {
    //console.log(data);
    //데이터 가져오기
    const items = data.response.body.items.item; //데이터 속 아이템을 불러 오는 거
    //console.log(items)

    //카태고리 뽑는것 , c1배열 생성
    const c1 = items.map((obj)=>obj.galTitle)
    console.log(c1)

    // let temp = c1.filter((i) => i.includes(c1.current.value))
    // console.log("데이터를 배열로 뽑아내봐",temp)

    //배열 만들기(key 값은 리액트의 제어에 들어갔기 때문에 꼭 써줘야한다)
    /*
    let optionTag = [
        <option key= {c1[0]} value={c1[0]}>{c1[0]}</option>,
        <option key= {c1[0]} value={c1[1]}>{c1[1]}</option>,
        <option key= {c1[0]} value={c1[2]}>{c1[2]}</option>,
        <option key= {c1[0]} value={c1[3]}>{c1[3]}</option>,
        <option key= {c1[0]} value={c1[4]}>{c1[4]}</option>,
        <option key= {c1[0]} value={c1[5]}>{c1[5]}</option>,
    
    ];
    */
   //한번만들고 나면 끝이기에(변화하지,변경되지 않음) map 사용
   let optionTag = c1.map((item) => 
                <option key= {item} value={item}>{item}</option>
                );


    /* 스크립트 형식으로 내가 만들어서 넣는,정보값을 넣어 뿌려주는형식으로 만들기
    const item{
        WebImageUrl : "이미지주소복사"
        Title : "넣고싶은 제목"
        Month :  "월"
        Photographer: "알아서 넣어"
        SearchKeyWord: "원하는대로 넣고싶은 내용"
    }
    */

    //items(카드들) 다 띄우는 태그
    // const itemTag = items.map((item)=>
    //      <GalCard selData = {item}/>
    // )

    //useStste =변수,화면에 무언가를 바꾸기 위해,변화시키기 위해 쓰는것
    //useEffect = 

    //랜더링 제어 변수
    const[selItem,setSelItem] = useState({});//카드를 끼워 넣게된다면 랜더링이 돌아가기 때문에

    //select box 제어
    const selR = useRef();
    //컴포넌트가 처음 랜더링이 일어났을때 (한번만,랜더링이 일어나고 나서 한번)
    useEffect(() => {
        selR.current.focus();
        console.log(selR.current)
    }, [])

    const handleSel = () => {
        //console.log("onChange",selR.current.value);
        //필터로 뽑아 낼 것이다
        let temp = items.filter((item) => item.galTitle === selR.current.value);
        console.log("onchange temp",temp)
        setSelItem(temp[0])

    }

    return (
        <>
            {/* <GalCard selData = {items[0]}/> */}
            {/*itemTag*/}
            {/* <Galcard2 selData = {item}/> */}
            <form>
                <select ref={selR} name='sel1' onChange={handleSel}>
                    {/* <option value="1">옵션1</option>
                    <option value="2">옵션2</option> */}
                    {optionTag}
                </select>
            </form>
            {Object.keys(selItem).length > 0 &&<GalCard selData={selItem}/>}
            {/* selItem &&<GalCard selData={selItem}  //초기값을 아무것도 선언 안했을때, 오브젝트를 넣지 않아 undefined 일 때
                                                        //(랜더링 제어 변수에서 스테이트 값을 안넣어줬을때에
                                                        // ==> useState( ) 일 때)
                                                        // && = 다 참이어야지 실행
                                                        // || = 한개라도 참이면 ㅇㅋ*/}
        </>
    );
}
export default GalSelect;