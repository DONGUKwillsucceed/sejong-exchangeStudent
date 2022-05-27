import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"


export default function Schoolmap(props){

    let [schools, setSchools] = useState([]);
    let history=useHistory();

    let {country} = useParams()

    useEffect(()=>{
        axios.get(props.fetchURL + window.location.pathname)
        .then((result)=>{
            console.log(result);
            setSchools(result.data);
        })
        .catch(()=>{
            alert('학교 데이터 불러오기 실패');
        })
    }, [country])


    return(
        <ul>
           { schools.map((oneSchool, i)=>{
                return (
                    <li onClick={()=>{history.push(window.location.pathname + '/' + oneSchool.id)}}>{oneSchool.schoolName}</li>
                )
            })}
    </ul>
    )

}