import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RouteHome =( ) => {
    const navigate =useNavigate();
    // const url = {
    //     "μ¬κ³Όπ" : '/p2?item=μ¬κ³Όπ',
    //     "λ°λλπ" : '/p2?item=λ°λλπ',
    //     "λΉκ·Όπ₯": '/p2?item=λΉκ·Όπ₯'
    // }

    const goUrl = (item) => {
        let url = `/p2?item=${item}`;//μ€λΈμ νΈ μμΌμ λμ2 λ°±νμΌμλμ(μλ°μ€ν¬λ¦½νΈ λλ)
        navigate(url);

        //navigate(url[item]);

        //μ€λΈμ νΈλ₯Ό μμΌμ λμ-.
        // if(item === 'μ¬κ³Όπ') navigate('/p2?item=μ¬κ³Όπ');
        // else if(item === 'λ°λλπ') navigate('/p2?item=λ°λλπ');
        // else if(item === 'λΉκ·Όπ₯') navigate('/p2?item=λΉκ·Όπ₯');
    }
    return(
        <>
            <h1>HOME</h1>

            <h2>νλΌλ―Έν° μ μ‘</h2>
            <ul>
                <li><Link to='/p1/μ¬κ³Όπ'>μ¬κ³Όπ</Link></li>
                <li><Link to='/p1/λ°λλπ'>λ°λλπ</Link></li>
                <li><Link to='/p1/λΉκ·Όπ₯'>λΉκ·Όπ₯</Link></li>
            </ul>

            <h2>νλΌλ―Έν° μ μ‘ 2</h2>
            <button onClick={()=> goUrl('μ¬κ³Όπ')}>μ¬κ³Όπ</button>
            <button onClick={()=> goUrl('λ°λλπ')}>λ°λλπ</button>
            <button onClick={()=> goUrl('λΉκ·Όπ₯')}>λΉκ·Όπ₯</button>
        </>
    );
}
export default RouteHome;