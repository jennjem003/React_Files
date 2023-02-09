
import Taccidentheader from "./Taccidentheader";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tcontent from "./Tcontent";
import { useState,useEffect } from "react";

const Taccidentm = ({c1,c2,data}) =>{
    //console.log("c1",c1)
    //console.log("c2",c2)
    //console.log("data",data)

    //선택된 대분류\
    let [selC1,setselC1] = useState();

    //선택된 대분류에 해당하는 중분류 저장
    let [selC2A,setselC2A] = useState([]);

    //선택된 중분류
    let[selC2,setselC2] = useState();

    //선택된 항목
    let [selData,setselData] = useState();

    //state변수 변경(state는 변수,)

    //맨 처음 한번만 실행
    useEffect(()=>{
        console.log('처음 한번만 실행...')
    },[])

    //해당하는 state 변수가 변경될 때마다
    useEffect(()=>{
        console.log("selC1",selC1)
        setselC2A(c2.filter((i)=> i[0] === selC1));
    },[selC1])

    useEffect(()=>{
        console.log("selC2A",selC2A)
    },[selC2A]);

    useEffect(()=>{
        console.log("selC2",selC2)
        if(selC1 && selC2) {
            setselData(data.filter((i)=>
            i.사고유형_대분류 === selC1 &&
            i.사고유형_중분류 === selC2
            )[0])
        }
    },[selC2]);

    useEffect(()=>{
        console.log("selData",selData)
    },[selData])





    //컴포넌트 랜더링이 일어날때마다 실행
    useEffect(()=> {
        console.log('랜더링...')
    })
     

     //state변수 변경
    //  useEffect(()=>{
    //     setselC2B(c2.filter((i)=>i[0] === selC2));
    //  })
    return(
        <>
        <div className="tcontent">
            <div className="theader">
                <Taccidentheader/>
            </div>
            <div className="tmain">
                <Tc1 c1={c1} selC1 ={selC1}setselC1 ={setselC1}/>
                {selC2A && <Tc2 selC2A={selC2A} selC2 ={selC2} setselC2={setselC2}/>}
                {selData && <Tcontent selData={selData}/>}
            </div>
        </div>
        </>
    )
}
export default Taccidentm;