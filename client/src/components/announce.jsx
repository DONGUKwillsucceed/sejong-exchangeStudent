import { Boardlist } from "./boardList";
import { useEffect, useState } from "react";
import axios from "axios";
import {Posting} from "./posting";
import MyEditor from './myEditor';
import MyEditorUpdate from './myEditorUpdate';

import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";


export default function Announce(props) {

    let [comments, setComments] = useState([{}]);

    let match = useRouteMatch();
    let postId = useParams();

    //한 게시물에 대한 get요청해서 받은 정보저장할 것들
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [context, setContext] = useState('');
    let [createdAt, setCreatedAt] = useState('');
    let [user_id, setUser_id] = useState('');

    const fetchURL = props.fetchURL;

    return (
            <Switch>

                <Route path={`${match.path}/:postId/update`}>
                    <MyEditorUpdate fetchURL={fetchURL} user={props.user} titleData={title} postData={context}/>
                </Route>

                <Route path={'*/write'}>
                    <MyEditor fetchURL={fetchURL} user={props.user}/>
                </Route>


                <Route path={`${match.path}/:postId`}>
                    <Posting fetchURL={fetchURL} user={props.user} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} createdAt={createdAt}setCreatedAt={setCreatedAt} context={context} setContext={setContext} comments={comments} setComments={setComments} setUser_id={setUser_id} user_id={user_id}/>
                </Route>

                <Route path={match.path}>
                    <Boardlist fetchURL={fetchURL} user={props.user} boardTitle={"공지사항"} />
                </Route>


            </Switch>
    )
}




// return 안에 이거ㅓ  원래거
{/* <Boardlist boardTitle={"공지사항"} posts={posts}/> */ }

//근데 이거 게시판별로도 만들필요없을지도? props이용 진짜 잘만하면.. 게시판별로 나눌 필요도 없을것같음

