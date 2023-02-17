import { useParams } from "react-router-dom";

const RoutePage1 =( ) => {
    const item = useParams().item;
    console.log("p1 item",item)

    const Fruits = ['사과🍎','바나나🍌']
    let tag;
    // if(Fruits.includes(item)) tag = "과일";
    // else tag = "과일이 아닙니다.";

    tag = Fruits.includes(item) ? "과일입니다." : "과일이 아닙니다.";

    return(
        <>
            <h1>Page1</h1>
            <p>{`${item}는 ${tag}`}</p>
            {/* {(Fruits.includes.item)}
                <h2>{item}은 과일이 아니다.</h2>
                <h2>{item}은 과일이다.</h2> */}
        </>
    );
}
export default RoutePage1;