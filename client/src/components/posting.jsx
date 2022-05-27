// import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams, useRouteMatch } from 'react-router-dom';
import styles from "../styles/posting.css";
import axios from 'axios';
import '../styles/loading.css'


function Posting(props) {

    let [loading, setLoading] = useState(true);
    let [newComment, setNewComment] = useState('');
    let history = useHistory();
    let { postId } = useParams();

    useEffect(() => {
        axios.get(props.fetchURL + window.location.pathname)
            .then((result) => {
                props.setTitle(result.data.title);
                props.setAuthor(result.data.author);
                result.data.createdAt = result.data.createdAt.replace("T", " ");
                result.data.createdAt = result.data.createdAt.replace("Z", "");
                result.data.createdAt = result.data.createdAt.slice(0, 19);
                props.setCreatedAt(result.data.createdAt);
                props.setContext(result.data.context);
                if (window.location.pathname.split('/')[1] === 'myposting') {
                    props.setUser_id(props.user.id);
                } else {
                    props.setUser_id(result.data.user_id);
                }
            })
            .catch((result) => {
                console.log(result);
                alert("게시글 데이터 요청 실패");
            });
        axios.get(props.fetchURL + "/comment/" + postId)
            .then((result) => {
                result.data.map((time) => {
                    time.createdAt = time.createdAt.replace("T", " ");
                    time.createdAt = time.createdAt.replace("Z", "");
                    time.createdAt = time.createdAt.slice(0, 19);
                })
                result.data.sort((a, b) => {
                    if (a.createdAt > b.createdAt) return 1
                    else if (a.createdAt < b.createdAt) return -1
                    else return 0;
                })
                props.setComments(result.data);
                setLoading(false);
            })
            .catch(() => alert("댓글 데이터 요청 실패"));
    }, [postId])

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
                <div className="container17">
                    <div>
                        <div className="header7">
                            <div>
                                <h2>{props.title}</h2>
                            </div>

                            <div className="postInfo7">
                                <div className="userInfo7">
                                    <strong>{props.author}</strong>
                                </div>
                                <div className="date7">
                                    <span>{props.createdAt}</span>
                                    {
                                        //자기꺼면 수정가능
                                        props.user.isLogin && (props.user_id === props.user.id) ?
                                            <span><button className="updateBtn" onClick={() => { history.push(window.location.pathname + '/update') }}>수정</button></span>
                                            : null
                                    }
                                    {
                                        //관리자나, 자기꺼면 삭제가능
                                        props.user.isLogin && (props.user.isAuth || props.user_id === props.user.id) ?
                                            <span><button className="updateBtn" onClick={() => {
                                                let token = JSON.parse(localStorage.getItem('token'))
                                                axios.delete(props.fetchURL + window.location.pathname,
                                                    { headers: { 'Authorization': `Bearer ${token.accessToken}` } })
                                                    .then((result) => {
                                                        console.log('글삭제 완료');
                                                        let tmp = window.location.pathname.split('/').pop();
                                                        history.push(window.location.pathname.replace(tmp, ''));
                                                    })
                                                    .catch(() => { alert('글삭제 실패') })
                                            }}>삭제</button></span>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="context7">
                            <p dangerouslySetInnerHTML={{ __html: props.context }}></p>
                        </div>
                    </div>

                    {
                        props.comments.map((oneComment, i) => {
                            return (<Commentone fetchURL={props.fetchURL} user={props.user} oneComment={oneComment} key={oneComment.id} history={history} />)
                        })
                    }


                    {
                        props.user.isLogin ?
                            <div className="commentSet7">
                                <div className="commentInfor7">
                                    <div className="commentUser7">
                                        <div>
                                            <strong>{props.user.nickName}</strong>
                                        </div>
                                    </div>
                                    <input formMethod='post'
                                        placeholder="댓글을 남겨보세요"
                                        className="commentInput7"
                                        onChange={(e) => { setNewComment(e.target.value) }}
                                    />
                                </div>
                                <div className="commentEtc7"><button className="commentBtn7" onClick={() => {
                                    if (newComment.length == 0) {
                                        alert('댓글을 남겨주세요!');
                                    }
                                    else {
                                        let date = new Date();
                                        let month = date.getMonth() + 1;
                                        let createdAt = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                                        let token = JSON.parse(localStorage.getItem('token'))
                                        axios.post(props.fetchURL + '/comment/' + postId, {
                                            author: props.user.nickName,
                                            context: newComment,
                                            createdAt : createdAt,
                                            updatedAt : createdAt
                                        }, { headers: { 'Authorization': `Bearer ${token.accessToken}` } })
                                            .then((result) => {
                                                console.log('댓글 등록 완료');
                                                //이건 새로고침하는거 새로고침안하면 댓글 안가는것처럼 보여
                                                window.location.reload();
                                            })
                                            .catch(() => {
                                                alert('댓글 등록 실패');
                                            })
                                    }
                                }}>등록</button></div>
                            </div> : null
                    }

                </div>
            )}

        </div>
    );
}


function Commentone(props) {

    return (
        <div className="commentzone7">
            <div className="comment7">
                <div className="userInfo7">
                    <p>
                        <strong>{props.oneComment.author}</strong>
                    </p>
                </div>
                <p> {props.oneComment.context}</p>
                <span className="date7">{props.oneComment.createdAt}</span>
                {
                    props.user.isAuth && <span ><button className="deleteBtn" onClick={() => {
                        let token = JSON.parse(localStorage.getItem('token'))
                        axios.delete(props.fetchURL + '/comment/' + props.oneComment.id,
                            { headers: { 'Authorization': `Bearer ${token.accessToken}` } })
                            .then((result) => {
                                console.log(result.data.title + '댓글 삭제 완료');
                                window.location.reload();
                            })
                            .catch(() => { alert('댓글 삭제 실패') })
                    }}>삭제</button></span>

                }
            </div>
        </div>
    )
}




export { Posting, Commentone };

