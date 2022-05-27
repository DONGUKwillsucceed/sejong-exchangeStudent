
import "../styles/smallHeader.css";
import { useHistory } from 'react-router-dom';
import { useState } from "react";

export default function Smallheader(props) {

    let history = useHistory();

    let [userModal, setUserModal] = useState(false);

    return (
        <div className="smallheader">
            <div className="logoFnt" onClick={()=>{
                history.push('/');
            }}>
                세종대학교
                <br />
                교환학생
            </div>

            <div className="headNav4">
                <nav className="nav4">
                    <ul className="ul4">
                            <li className="list14 small" onClick={()=>{
                                history.push('/aboutschedule')
                            }}>선발 일정</li>
                            <li className="list24 small" onClick={()=>{
                                history.push('/schoollist')
                            }}>자매교 명단</li>
                            <li className="list34 small" onClick={()=>{
                                history.push('/review')
                            }}>교환학생후기</li>
                        <li className="list44 small" onClick={()=>{
                            history.push('/tel')
                        }}>연락처</li>
                    </ul>
                </nav>

                {/* <div className="leftCompo4"> */}
                    {
                        props.user.isLogin ? 
                        <div >
                                <div className="userName4 small" onClick={() => setUserModal(!userModal)}>{props.user.nickName}</div>
                                {
                                    userModal ?
                                        <div className="userModal">
                                            <button className="logoutBtn" onClick={() => {
                                                props.setUser({isLogin:false})
                                                localStorage.removeItem('userid');
                                                localStorage.removeItem('token')
                                            }}>로그아웃</button>
                                            <button className="myPostingsBtn" onClick={() => {
                                                history.push('/myposting/' + props.user.id);
                                            }}>내가 쓴글 모아보기</button>
                                        </div> : null
                                }

                        </div>
                        : <button className="loginBtn4" onClick={()=>{
                            history.push('/login');
                        }}>로그인</button>
                    }
                </div>
            {/* </div> */}
        </div>
    );
}
