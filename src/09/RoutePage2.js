import { useLocation } from 'react-router-dom';
import qs from 'query-string';

const RoutePage2 =( ) => {
    //let location = 'https://www.naver.com/'
    //location = location.split('?')[1];
    let location = useLocation().search;
    console.log("location",location);
    let item = qs.parse(location).item;
    console.log("item",item);

    const Fruits = ['μ¬κ³Όπ','λ°λλπ'];
    let tag = Fruits.includes(item) ? "κ³ΌμΌμλλ€." : "κ³ΌμΌμ΄ μλλλ€.";


    return(
        <>
            <h1>Page2</h1>
            {tag}
        </>
    );
}
export default RoutePage2;