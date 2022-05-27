import { Boardlist } from "./boardList";
import { useEffect, useState } from "react";
import {Posting} from "./posting";
import MyEditor from './myEditor';
import MyEditorUpdate from './myEditorUpdate';
import Schoolmap from "./schoolMap";

import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Modal2 from "./modal2";

export default function Document(props) {

    let [comments, setComments] = useState([{}]);

    let match = useRouteMatch();
    let postId = useParams();

    //한 게시물에 대한 get요청해서 받은 정보저장할 것들
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [context, setContext] = useState('');
    let [createdAt, setCreatedAt] = useState('');
    let [user_id, setUser_id] = useState('');

    let posts = [];

    const fetchURL = props.fetchURL;

    return (
            <Switch>

                <Route path={`${match.path}/:country/:school/:postId/update`}>
                    <MyEditorUpdate fetchURL={fetchURL} user={props.user} titleData={title} postData={context}/>
                </Route>

                <Route path={'*/write'}>
                    <MyEditor fetchURL={fetchURL} user={props.user}/>
                </Route>

                <Route path={`${match.path}/:country/:school/:postId`}>
                    <Posting fetchURL={fetchURL} user={props.user} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor}createdAt={createdAt} setCreatedAt={setCreatedAt} context={context} setContext={setContext} comments={comments} setComments={setComments} setUser_id={setUser_id} user_id={user_id}/>
                </Route>

                <Route path={`${match.path}/:country/:school`}>
                    <Boardlist user={props.user} boardTitle={"파견학생 서류 제출"} fetchURL={fetchURL} />
                </Route>

                <Route path={`${match.path}/:country`}>
                    <Schoolmap fetchURL={fetchURL} />
                </Route>

                <Route path={match.path}>
                    <Modal2 boardTitle={"파견학생 서류 제출"} />
                </Route>


            </Switch>
    )
}