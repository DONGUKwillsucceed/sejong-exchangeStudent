

import Header from './components/mainHeader.jsx';
import Login from './components/login.jsx';
import AboutExchangeSchedule from './components/aboutExchangeSchedule';
import SchoolList from './components/schoolList';
import Tel from './components/tel'
import RightNav from "./components/rightCompo"
import MainBoard from "./components/mainBoard.jsx";
import Announce from './components/announce.jsx';
import Review from './components/review.jsx';
import "./styles/Home.css";
import Document from './components/document.jsx';
import Community from './components/Community.jsx';

import Qna from './components/qna.jsx';

import { useState, useEffect } from 'react';

import { Route, Switch, useParams } from 'react-router-dom';
import axios from "axios";
import MyPostings from './components/myPostings.jsx';

import { useMediaQuery } from 'react-responsive';



function App() {

  let [user, setUser] = useState({ isLogin: false });

  const fetchURL = "http://52.79.239.17:8080"

  useEffect(() => {
    let getToken = JSON.parse(localStorage.getItem('token'));
    if (getToken != null) {
      let userid = JSON.parse(localStorage.getItem('userid'));
      axios.post(fetchURL + "/user/refresh", { refreshToken: getToken.refreshToken })
        .then((result) => {
          console.log(result.data);
          getToken.accessToken = result.data.accessToken;
          localStorage.setItem('token', JSON.stringify(getToken));
          axios.get(fetchURL + "/user/" + userid)
            .then((result) => {
              setUser({
                isLogin: true,
                ID: result.data.userID,
                id: result.data.id,
                nickName: result.data.nickName,
                isAuth: result.data.isAuth
              })
            })
            .catch(() => { alert("로그인 정보 다시불러오기 실패") })
        })
        .catch(() => { alert("토큰만료?") })
    }
  }, [])

  let [로딩중, set로딩중] = useState(true);

  let [initAnnouncePosts, setInitAnnouncePosts] = useState([]);
  let [initQnaPosts, setInitQnaPosts] = useState([]);

  useEffect(() => {
    axios.get(fetchURL + '/announcement/init')
      .then((result) => {
        setInitAnnouncePosts(result.data);
      })
      .catch((result) => {
        alert(result.error);
      })
    axios.get(fetchURL + '/qna/init')
      .then((result) => {
        setInitQnaPosts(result.data);
        set로딩중(false);
      })
      .catch((result) => {
        alert(result.error);
      })
  }, [])

  let isPc = useMediaQuery({
    query: "(min-width : 1001px)"
  })

  let isSmall = useMediaQuery({
    query: "(max-width : 1000px) and (min-width: 200px)"
  })

  return (
    <div className="App">



      {isPc ? (

        <div className="container">
          <div className="header">
            <Header user={user} setUser={setUser} fetchURL={fetchURL} />
          </div>


          <div className="mainContainer">
            <div className="mainBoard">
              <Switch>
                <Route exact path="/"><MainBoard /></Route>
                <Route exact path="/aboutschedule"><AboutExchangeSchedule /></Route>
                <Route exact path="/tel"><Tel /></Route>
                <Route exact path="/schoollist"><SchoolList /></Route>

                <Route exact path="/login"><Login user={user} setUser={setUser} fetchURL={fetchURL} /></Route>

                <Route path="/announcement"><Announce user={user} fetchURL={fetchURL} /></Route>
                <Route path="/qna"><Qna user={user} fetchURL={fetchURL} /></Route>

                <Route path="/review"><Review user={user} fetchURL={fetchURL} /></Route>
                <Route path="/community"><Community user={user} fetchURL={fetchURL} /></Route>

                <Route path="/document"><Document user={user} fetchURL={fetchURL} /></Route>

                <Route path={"/myposting/" + user.id} ><MyPostings user={user} fetchURL={fetchURL} /></Route>

              </Switch>
            </div>

            <div className="rightNav2">
              {
                로딩중 ? <div>잠깐만기달려</div> :
                  <RightNav fetchURL={fetchURL} initAnnouncePosts={initAnnouncePosts} initQnaPosts={initQnaPosts} />
              }
            </div>
          </div>
        </div>
      ) : null}


      {
        isSmall ? (
          <div className="container">
            <div className="small-header">
              <Header user={user} setUser={setUser} fetchURL={fetchURL} />
            </div>

            <div className="small-container">
              <div className="small-mainBoard">
                <Switch>
                  <Route exact path="/">
                    {
                      로딩중 ? <div>잠깐만기달려</div> :
                        <RightNav fetchURL={fetchURL} initAnnouncePosts={initAnnouncePosts} initQnaPosts={initQnaPosts} />
                    }
                  </Route>
                  <Route exact path="/aboutschedule"><AboutExchangeSchedule /></Route>
                  <Route exact path="/tel"><Tel /></Route>
                  <Route exact path="/schoollist"><div className="container100"><SchoolList /></div></Route>

                  <Route exact path="/login"><Login user={user} setUser={setUser} fetchURL={fetchURL} /></Route>

                  <Route path="/announcement"><Announce user={user} fetchURL={fetchURL} /></Route>
                  <Route path="/qna"><Qna user={user} fetchURL={fetchURL} /></Route>

                  <Route path="/review"><Review user={user} fetchURL={fetchURL} /></Route>
                  <Route path="/community"><Community user={user} fetchURL={fetchURL} /></Route>

                  <Route path="/document"><Document user={user} fetchURL={fetchURL} /></Route>

                  <Route path={"/myposting/" + user.id} ><MyPostings user={user} fetchURL={fetchURL} /></Route>

                </Switch>
              </div>
            </div>
          </div>
        ) : null
      }


      {/* <div className="mainContainer">
          <div className="mainBoard">
            <Switch>
              <Route exact path="/"><MainBoard /></Route>
              <Route exact path="/aboutschedule"><AboutExchangeSchedule /></Route>
              <Route exact path="/tel"><Tel /></Route>
              <Route exact path="/schoollist"><SchoolList /></Route>

              <Route exact path="/login"><Login user={user} setUser={setUser} fetchURL={fetchURL} /></Route>

              <Route path="/announcement"><Announce user={user} fetchURL={fetchURL} /></Route>
              <Route path="/qna"><Qna user={user} fetchURL={fetchURL} /></Route>

              <Route path="/review"><Review user={user} fetchURL={fetchURL} /></Route>
              <Route path="/community"><Community user={user} fetchURL={fetchURL} /></Route>

              <Route path="/document"><Document user={user} fetchURL={fetchURL} /></Route>

              <Route path={"/myposting/" + user.id} ><MyPostings user={user} fetchURL={fetchURL} /></Route>

            </Switch>
          </div>

          <div className="rightNav2">
            {
              로딩중 ? <div>잠깐만기달려</div> :
                <RightNav fetchURL={fetchURL} initAnnouncePosts={initAnnouncePosts} initQnaPosts={initQnaPosts} />
            }
          </div>
        </div> */}


    </div>
  );
}

export default App;
