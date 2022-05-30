import { Boardlist } from "./boardList";
import { useState } from "react";
import {Posting} from "./posting";
import MyEditor from './myEditor';
import MyEditorUpdate from './myEditorUpdate';

import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Modal2 from "./modal2";


export default function Review(props) {

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
    
    let posts = [];

    const fetchURL = props.fetchURL;

    return (
            <Switch>

                <Route path={`${match.path}/:country/:postId/update`}>
                    <MyEditorUpdate fetchURL={fetchURL} user={props.user} titleData={title} postData={context} setCount={setCount} count={count}/>
                </Route>

                <Route path={'*/write'}>
                    <MyEditor fetchURL={fetchURL} user={props.user}  setCount={setCount} count={count}/>
                </Route>

                <Route path={`${match.path}/:country/:postId`}>
                    <Posting fetchURL={fetchURL} user={props.user} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor}createdAt={createdAt} setCreatedAt={setCreatedAt} context={context} setContext={setContext} comments={comments} setComments={setComments} setUser_id={setUser_id} user_id={user_id}/>
                </Route>

                <Route path={`${match.path}/:country`}>
                    <Boardlist user={props.user} boardTitle={"교환학생 후기"} fetchURL={fetchURL} count={count} />
                </Route>

                <Route path={match.path}>
                    <Modal2 boardTitle={"교환학생 후기"} />
                </Route>


            </Switch>
    )
}


