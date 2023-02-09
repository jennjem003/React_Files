const Tc1 = ({c1,selC1,setselC1}) => {
    //대분류가 클릭 되었을때
    const handleSelect = (item) => {
        setselC1(item);
    }
    //대분류 화면 표시 태그
    const c1Tag = c1.map((item)=>
        <div className={item === selC1 ? "tcardsel" : "tcard"} 
            key={item}
            onClick={() => handleSelect(item)}>
            {item}
        </div>
    );
    return(
        <div className="tc1">
            <h1>대분류</h1>
            {c1Tag}
        </div>
    );

}
export default Tc1 ;