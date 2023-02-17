import Wheader from "./Wheader";
import keys from "../db/item.json"
import weather2 from "../db/weather2.json"
import { useState, useEffect } from "react";

const W1 = () => {
    //0215수정(다 지움)
    // console.log("weather2",weather2)
    // console.log("keys",keys)

    // let items = weather2.response.body.items.item;
    // let w2 = items.map((i) => {
    //     let temp = [];
    //     temp.push(keys[i.category][0]);
    //     temp.push(i.obsrValue);
    //     temp.push(keys[i.category][1])

    //     return temp;
    // }) //i. category가 아니라 배열을 만들기위해 함수 만들어줌

    // console.log("w2",w2)

    //스테이트 변수 (원하는 부분의 변수 변경 후 재랜더링/ 리액트에서 제어하기 때문에 변수 정의 함으로써 재랜더링(재호출))
    const [items, setItems] = useState();
    const [itemTag, setItemTag] = useState();

    /*
    //useEffect
    //랜더링이 발생될때 마다 실행
    useEffect(() => {});
    */

    //맨 처음 컴포넌트 랜더링시 실행
    useEffect(() => {
        //console.log("weather2",weather2)
        setItems(weather2.response.body.items.item);
    }, []);

    //특정 state변수 변경시 실행
    useEffect(() => {
        if(!items) return;
        console.log("items", items)
        let temp = items.map((i, n) =>
            <div className="w2div" key = {"w2div"+ n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>
        );
        //아이템 하나만 들어오니 i, 
        setItemTag(temp);
    }, [items])

    return (
        <>
            <div className="content">
                <Wheader title={'일기예보 - 단기 '} />
                {items && itemTag}
            </div>
        </>
    );
}
export default W1;