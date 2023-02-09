const GalCard = ({ selData }) => {
    let keys = ["galTitle", "galPhotographyLocation", "galPhotographer","galPhotographyMonth","galSearchKeyword" ]
    let dTag;
    let imgurl = selData.galWebImageUrl;
    let img = <img src={imgurl} className='img'/> 
    if (Object.keys(selData).length > 0) {
        dTag = keys.map((k) =>
            <li key={k}>
                <span className="sp1">{selData[k]}</span>
            </li>
        );
    }

/* 리턴 안 div카드 안에 이렇게도 넣을 수 있다.
    <ul>
        <li><img src={selData.galWebImageUrl}></img></li>
        <li>{selData.galTitle}</li>
        <li>{selData.galPhotographyMonth.substr(0, 4)}.
            {selData.galPhotographyMonth.substr(2, 2)}.</li>
        <li>{selData.galPhotographer}</li>
        <li>{selData.galSearchKeyword}</li>
    </ul>
*/
    return (
        <>
            <div className="card">
                {imgurl && img}
                {dTag}
            </div>
        </>
    );
};

export default GalCard;