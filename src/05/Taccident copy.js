import Taccidentm from "./Taccidentm";
import Taccidentheader from "./Taccidentheader";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tcontent from "./Tcontent";
import './Taccident.css'

const Taccident = () => {
    const apiData = {
        "currentCount": 15,
        "data": [
          {
            "경상자수": "7488",
            "부상신고자수": "701",
            "사고건수": "17544",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "횡단중",
            "사망자수": "883",
            "중상자수": "9649"
          },
          {
            "경상자수": "1475",
            "부상신고자수": "161",
            "사고건수": "3059",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "차도통행중",
            "사망자수": "146",
            "중상자수": "1425"
          },
          {
            "경상자수": "1754",
            "부상신고자수": "202",
            "사고건수": "2872",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "길가장자리구역통행중",
            "사망자수": "80",
            "중상자수": "994"
          },
          {
            "경상자수": "1239",
            "부상신고자수": "121",
            "사고건수": "2188",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "보도통행중",
            "사망자수": "45",
            "중상자수": "1005"
          },
          {
            "경상자수": "13049",
            "부상신고자수": "1743",
            "사고건수": "24652",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "기타",
            "사망자수": "689",
            "중상자수": "10584"
          },
          {
            "경상자수": "6506",
            "부상신고자수": "590",
            "사고건수": "5840",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "정면충돌",
            "사망자수": "259",
            "중상자수": "3991"
          },
          {
            "경상자수": "63749",
            "부상신고자수": "5446",
            "사고건수": "56935",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "측면충돌",
            "사망자수": "555",
            "중상자수": "23105"
          },
          {
            "경상자수": "61766",
            "부상신고자수": "4576",
            "사고건수": "43028",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "추돌",
            "사망자수": "504",
            "중상자수": "15068"
          },
          {
            "경상자수": "60009",
            "부상신고자수": "5793",
            "사고건수": "56378",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "기타",
            "사망자수": "596",
            "중상자수": "21548"
          },
          {
            "경상자수": "2572",
            "부상신고자수": "769",
            "사고건수": "4292",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "공작물충돌",
            "사망자수": "462",
            "중상자수": "2442"
          },
          {
            "경상자수": "369",
            "부상신고자수": "74",
            "사고건수": "673",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "도로이탈",
            "사망자수": "144",
            "중상자수": "457"
          },
          {
            "경상자수": "13",
            "부상신고자수": "5",
            "사고건수": "28",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "주/정차차량 충돌",
            "사망자수": "5",
            "중상자수": "15"
          },
          {
            "경상자수": "809",
            "부상신고자수": "353",
            "사고건수": "1558",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "전도전복",
            "사망자수": "226",
            "중상자수": "886"
          },
          {
            "경상자수": "2577",
            "부상신고자수": "541",
            "사고건수": "4503",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "기타",
            "사망자수": "168",
            "중상자수": "1876"
          },
          {
            "경상자수": "0",
            "부상신고자수": "0",
            "사고건수": "2",
            "사고유형_대분류": "철길건널목",
            "사고유형_중분류": "기타",
            "사망자수": "0",
            "중상자수": "2"
          }
        ],
        "matchCount": 15,
        "page": 1,
        "perPage": 20,
        "totalCount": 15
      } ;

      //자바스크립트 object는 키와 값으로 분리 가능
      let objk = Object.keys(apiData);
      let objv = Object.values(apiData);
      console.log("object 키",objk);
      console.log("object 값",objv);

      //배열의 map, filter
      let newv;
      newv = Object.keys(apiData).map((k) => apiData[k])
      console.log("새로운 배열", newv);
  

      //배열의 filter
      let data;
      data = objk.filter((item) => item=== 'data')
      data= data.map((k)=> apiData[k])
      console.log("filter로 data추출", data)
      

      //오브젝트 키로 접근
      data = apiData.data;
      console.log("오브젝트 키로 data 추출1" , data)
      data = apiData['data'];//[]문자열로 들어가야함
      console.log("오브젝트 키로 data 추출2" , data)

      //대분류를 추출
      let c1 = data.map((item) => item.사고유형_대분류)
      console.log("대분류 추출 1단계",c1);
      c1= new Set(c1);
      console.log("대분류 추출 2단계 set으로 중복제거",c1);
      c1 = [...c1];
      console.log("대분류 추출 3단계 set을 Array로 변환",c1);


      //중분류
      // let c2 = data.map((item) => 
      //     item. 사고유형_대분류 +','+ item.사고유형_중분류).split(','));
      // console.log("중분류 map으로 추출",c2);

      let c2 = data.map((item) => 
            [item. 사고유형_대분류 , item.사고유형_중분류]);
      console.log("중분류 map으로 추출",c2);

      /*
      //배열의 entries
      for(let [k,v] of c2.entries()){
        console.log("k","k","v","v") //위칫값에 해당하는 거를 끌어다가 쓰기
      }

      //배열
      let c11 = data.map((item)=>(item).사고유형_대분류);
      let c21 = data.map((item)=>item.사고유형_대분류);
      console.log("c11","c11");
      console.log("c21","c21");

      let cobj = {};
      for(let [k,v] of c21.entries()){
        console.log("k","k","v","v")
        cobj[v] = c11[k]
      }
      console.log("cobj","cobj");


      //숙제...
      // { 차대사람 : [횡단중,차도통행중....]}으로 나오게
      */






    return (
        <>

        </>
    ) ;
}

export default Taccident ;