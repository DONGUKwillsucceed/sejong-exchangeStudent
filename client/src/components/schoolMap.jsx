import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
    GoogleMap,
    InfoWindow,
    LoadScript,
    Marker,
} from "@react-google-maps/api";

export default function Schoolmap(props) {
    let [schools, setSchools] = useState([]);
    let [lats, setLats] = useState(0);
    let [lngs, setLngs] = useState(0);
    let history = useHistory();

    let { country } = useParams();

    const containerStyle = {
        width: "100%",
        height: "calc(100vh - 200px)",
    };

    useEffect(() => {
        axios
            .get(props.fetchURL + window.location.pathname)
            .then((result) => {
                setSchools(result.data);
                setLats(result.data[0].latitude);
                setLngs(result.data[0].longitude);
            })
            .catch(() => {
                alert("학교 데이터 불러오기 실패");
            });
    }, [country]);

    let center = {
        lat: lats,
        lng: lngs,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBrbTaxoATW8jVJD6DUywUGnOSYEBfRxnA">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4}>
                {schools.map((oneSchool, i) => {
                    const position = {
                        lat: oneSchool.latitude,
                        lng: oneSchool.longitude,
                    };
                    return (
                        <Marker
                            onClick={() => {
                                history.push(
                                    window.location.pathname +
                                        "/" +
                                        oneSchool.id
                                );
                            }}
                            position={position}
                            label={oneSchool.schoolName}>
                            {oneSchool.schoolName}
                        </Marker>
                    );
                })}
            </GoogleMap>
        </LoadScript>
    );
}

{
    /* <ul>
            {schools.map((oneSchool, i) => {
                console.log(oneSchool);
                return (
                    <li
                        onClick={() => {
                            history.push(
                                window.location.pathname + "/" + oneSchool.id
                            );
                        }}>
                        {oneSchool.schoolName}
                    </li>
                );
            })}
        </ul> */
}
