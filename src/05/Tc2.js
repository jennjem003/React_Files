
const Tc2 = ({selC2A,selC2,setselC2}) => {
    const handleSelect = (item) => {
        setselC2(item[1]);
    }
        //대분류 화면 표시 태그
    const c2Tag = selC2A.map((item)=>
        <div className={item === selC2 ? "tcardsel" :"tcard"} 
             key={[...item]}
                onClick={() => handleSelect(item)}>
                {item[1]}
        </div>
    );


    return(
        <div className="tc2">
            <h1>중분류</h1>
            {c2Tag}
        </div>
    );

}
export default Tc2 ;