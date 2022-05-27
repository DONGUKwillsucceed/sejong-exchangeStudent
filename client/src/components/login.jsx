
import '../styles/Login.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//로그인 버튼 누르면 로그인 세션 가지고 history.goback()하도록

export default function Login(props) {

    let history = useHistory();
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    useEffect(()=>{
        if(props.user.isLogin == true) {
            history.push('/');
        }
    }, [])

    return (
        <div className="login">
            <img src='/login_logo.jpg' width="150px" height="40px" className="logo2" alt="세종대학교 로고"></img>
            <div className="loginText">
                <div>서비스 이용을 끝낸 후에는 개인정보보호를 위하여 꼭 <span className="yellowText">로그아웃</span>을 해주시기 바랍니다<br /></div>
                <div>아이디는 학생은 <span className="yellowText">학번</span>, 교수/직원은 <span className="yellowText">포털 아이디(이메일아이디)</span> 또는 <span className="yellowText">직번</span>입니다.</div>
            </div>
            <div className="loginBox">
                <div className="inputBox2">
                    <p>학번/아이디</p>
                    <input type="text" onChange={(e) => { setId(e.target.value); }}></input>
                </div>

                <div className="inputBox2">
                    <p>비밀번호</p>
                    <input type="password" onChange={(e) => { setPw(e.target.value) }}></input>
                </div>


                <div className="findAccount">
                    <a href="https://portal.sejong.ac.kr/jsp/inquiry/nmconf.jsp">아이디 찾기</a>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <a href="https://portal.sejong.ac.kr/jsp/inquiry/idconf.jsp">비밀번호 찾기</a>
                </div>


                <button className="loginButton2" type="submit" onClick={() => {
                    axios.post(props.fetchURL + "/signin", { userID: id, password: pw })
                        .then((result) => {
                            console.log(result.data);
                            props.setUser({
                                isLogin: true,
                                ID: result.data.userID,
                                id: result.data.id,
                                nickName: result.data.nickName,
                                isAuth: result.data.isAuth
                            });
                            localStorage.setItem("token", JSON.stringify(result.data.token));
                            localStorage.setItem("userid", JSON.stringify(result.data.id));
                            history.goBack();
                        })
                        .catch((result) => {
                            if(result.response.status === 401){
                                console.log(result.response.data.message)
                                alert("아이디와 비밀번호를 확인해주세요");
                            }
                            else{
                                console.log('로그인 실패');
                            }
                        });
                }}>로그인</button>
            </div>

        </div>

    )
}