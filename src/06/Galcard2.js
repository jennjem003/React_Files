const GalCard2 =({cardItem}) =>{
     return(
        <>
        <div className="concard">
            <div><img scr = {cardItem.WebImageUrl}/></div>
            <div>{cardItem.Title}</div>
            <div className="conkw"></div>
        </div>
        </>
     );
}
export default GalCard2;