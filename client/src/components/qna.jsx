import { Boardlist } from "./boardList";
import { useEffect, useState } from "react";
import axios from "axios";
import {Posting} from "./posting";
import MyEditor from './myEditor';
import MyEditorUpdate from './myEditorUpdate';

import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";


export default function Qna(props) {

    let [comments, setComments] = useState([{}]);

    let match = useRouteMatch();
    let postId = useParams();

    //한 게시물에 대한 get요청해서 받은 정보저장할 것들
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [context, setContext] = useState('');
    let [createdAt, setCreatedAt] = useState('');
    let [user_id, setUser_id] = useState('');

    let [count, setCount] = useState(0);

    const fetchURL = props.fetchURL;

    return (
            <Switch>

                <Route path={`${match.path}/:postId/update`}>
                    <MyEditorUpdate fetchURL={fetchURL} user={props.user} titleData={title} postData={context} count={count} setCount={setCount} />
                </Route>

                <Route path={'*/write'}>
                    <MyEditor fetchURL={fetchURL} user={props.user} count={count} setCount={setCount}/>
                </Route>


                <Route path={`${match.path}/:postId`}>
                    <Posting fetchURL={fetchURL} user={props.user} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} createdAt={createdAt}setCreatedAt={setCreatedAt} context={context} setContext={setContext} comments={comments} setComments={setComments} setUser_id={setUser_id} user_id={user_id} initQnaPosts={props.initQnaPosts} initAnnouncePosts={[]} 오른쪽다시={props.오른쪽다시} set오른쪽다시={props.set오른쪽다시} />
                </Route>

                <Route path={match.path}>
                    <Boardlist fetchURL={fetchURL} user={props.user} boardTitle={"Q&A"} count={count}/>
                </Route>


            </Switch>
    )
}

