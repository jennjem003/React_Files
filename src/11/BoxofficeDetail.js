import { useState, useEffect } from "react"

const BoxofficeDetail = ({ mvcd }) => {

    const [mTag, setmTag] = useState();

    console.log(mvcd)

    const getdata = async () => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${mvcd}';
        url = url + `movieCd=${mvcd}`

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data)

            //object
            let temp = data.movieInfoResult.movieInfo;
            const showitem = {
                'movieNm': '영화명',
                'openDt': '개봉일',
                'prdtStatNm': '제작상태',
                'typeNm': '영화형태',
                'directors': '감독'
            }
            if (mvcd) {
                let tag = [];
                for (let [k, v] of Object.entries(showitem)) {
                    if (k === 'directors') {
                        tag.push(<div className="dtdiv" key={k}>
                            <span className="dtsp1">{k}</span>
                            <span className="dtsp2">{temp[v][0].peopleNm}</span>
                        </div>)
                    }
                    if (k === 'directors') {
                        t = t + <li>{v}{temp[k][0].peopleNm}</li>
                    }
                    else {
                        t = t + <li>{v}{temp[k]}</li>
                    }
                }
                let ttag =
                    <div>
                        <span>영화명</span>
                        <span>{temp.movieNm}</span>
                    </div>
                ttag =

                    console.log(temp)
            }
        }
        catch (err) {

        }

    }

    useEffect(() => {
        getdata();
    }, [mvcd])

    return (
        <>
            {mvcd && mTag}
        </>
    )
}
export default BoxofficeDetail