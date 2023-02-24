import { useEffect, useState } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({tDt}) => {

    //console.log('BoxofficeList',tDt)

    const [mvlist,setMvlist] = useState();
    const [mvcd,setcd] = useState();
    //const []
    const showdetail = (cd)=>{
        setcd(cd)
    }

    //맨처음 랜더링시;
    useEffect(()=>{
        if(!tDt) return;
        const apikey = 'f5eef3421c602c6cb7ea224104795888';
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`;
        //console.log(url)
        //이렇게 쓰기도 한다
        //url = url + `key=${apikey}&`;
        //url = url + `targetDt=${apikey}&`;
        fetch(url)
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data.boxOfficeResult.dailyBoxOfficeList)
            let temp = data.boxOfficeResult.dailyBoxOfficeList;
            //콜백 함수 안에 div로 묶어준다면 {}는 반드시 return써서 반환해줘야한다.
            //아니면 {}지워준다.
            temp = temp.map((item) => {
                return(
                 <div className="mvrow" key = {item.movieCd} onClick={()=>showdetail(item.movieCd)}>
                     <span className="mvcol0">{item.rank}</span>
                     <span className="mvcol1">{item.movieNm}</span>
                     <span className="mvcol2">{parseInt(item.audiCnt).toLocaleString('kr-ko')}</span>
                 </div>)
            });
            setMvlist(temp);
        })
      
        .catch((err) => console.log(err))    
    },[tDt])

    useEffect(()=>{

    },[mvlist])
    return(
        <div>
            <div className="mvcontent">
                <div className="mvlist">
                    <span className="mvcol3">순위</span>
                    <span className="mvcol4">영화명</span>
                    <span className="mvcol5">관객수</span>
                </div>
                {mvlist}
            </div>
            <div>
                {/* {tDt && mvlist} */}
            </div>
            <div className="mvdetail">
                {mvcd && <BoxofficeDetail mvcd={mvcd}/>}
            </div>
            
        </div>
    );
}
export default BoxofficeList;