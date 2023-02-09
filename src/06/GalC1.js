const GalC1 = ({ c1, setselC1 }) => {


    console.log('GalC1', c1)
    //대분류가 클릭 되었을때
    const handleSelect = (item) => {
        setselC1(item);
    }
    //대분류 화면 표시 태그
    let c1Tag = c1.map((item) =>
        <li className="c1"
            key={item}
            onClick={() => handleSelect(item)}>
            {item}
        </li>
    );
    //console.log("c1tag",c1Tag)
    return (
        <>
            <div className="c12">
                {c1Tag}
            </div>

        </>
    );
};

export default GalC1;