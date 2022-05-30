import "../styles/rightCompo.css";
import "../styles/loading.css";

import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";

import axios from "axios";
import { useParams } from "react-router-dom";


//글쓰기 버튼은 로그인 되어있을때만
//이거 디자인해서 게시판리스트로 쓰고 boardid는 url값에서 얻어오거나 props로 계속 넘겨주기


function Boardlist(props) {

    let boardTitle = props.boardTitle;  //게시판 이름

    let [posts, setPosts] = useState([]);
    let [loading, setLoading] = useState(true);

    let { country } = useParams();

    let history = useHistory();

    let [currentPage, setCurrentPage] = useState(1);
    let postsPerPage = 14;

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;


    useEffect(() => {
        console.log(props.fetchURL + window.location.pathname)
        axios.get(props.fetchURL + window.location.pathname)
            .then((result) => {
                // console.log(result.data);
                result.data.map((time) => {
                    time.createdAt = time.createdAt.replace("T", " ");
                    time.createdAt = time.createdAt.replace("Z", "");
                    time.createdAt = time.createdAt.slice(0, 19);
                })
                result.data.sort((a, b)=>{
                    if(a.createdAt > b.createdAt)   return -1
                    else if (a.createdAt < b.createdAt) return 1
                    else    return 0;
                })
                setPosts(result.data);
                console.log(result.data);

                setLoading(false);
            })
            .catch((result) => {
                console.log(result);
                alert("데이터불러오기 실패")
            })
    }, [country, props.count])


    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }


    return (
        <div className="container18">
            {loading ? (
                <div className="loading_container">
                    <div
                        className="loading"
                        id="loading_text">
                    </div>
                </div>
            ) : (
                <div className="container8">
                    <div className="boxbox">
                    <div className="header8">
                        <p className="title18">{boardTitle}</p>
                        {
                            props.user.isLogin && (props.user.isAuth || (window.location.pathname != '/announcement' && window.location.pathname.split('/')[1] != 'document')) && (window.location.pathname.split('/')[1] != 'myposting') ? <p className="writeBtn8" onClick={() => { history.push(window.location.pathname + '/write') }}>글쓰기</p> : null
                        }
                    </div>
                    <div className="rightNav8">
                        <ul>
                            {
                                currentPosts(posts).map((onePost, i) => {
                                    return (<PostListOne onePost={onePost} key={onePost.id} />)
                                })
                            }

                        </ul>
                    </div>
                    </div>

                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage} currentPage={currentPage} ></Pagination>

                </div>
            )
            }
        </div>
    );
}

// 여기 props에는 n번째 원소하나 오브젝트로 넘길거야
function PostListOne(props) {

    let history = useHistory();

    return (
        <li onClick={() => {
            history.push(window.location.pathname + '/' + props.onePost.id);
        }}>
            <div className="posting8">
                <p className="postingTitle8">{props.onePost.title}</p>
                <div className="writer8">
                    <p>{props.onePost.author}</p>
                    <p>{props.onePost.createdAt}</p>
                </div>
            </div>
        </li>)
}

export { Boardlist, PostListOne };

