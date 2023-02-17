import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const RoutePage2 =( ) => {
    //let location = 'https://www.naver.com/'
    //location = location.split('?')[1];
    let location = useLocation().search;
    console.log("location",location);
    let item = qs.parse(location).item;
    console.log("item",item);

    const Fruits = ['사과🍎','바나나🍌'];
    let tag = Fruits.includes(item) ? "과일입니다." : "과일이 아닙니다.";


    return(
        <>
            <h1>Page2</h1>
            {tag}
        </>
    );
}
export default RoutePage2;