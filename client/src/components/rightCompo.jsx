
import { useHistory } from "react-router-dom";
import "../styles/rightCompo.css"

export default function RightNav(props) {

    const fetchURL = props.fetchURL;

    let history = useHistory();

    let initAnnouncePosts=props.initAnnouncePosts;
    let initQnaPosts=props.initQnaPosts;

    return (
        <div>
            <div className="rightCompo8">
                <div className="rightNav8">
                    <div className="title8" onClick={()=>{history.push('/announcement')}}>공지사항</div>
                    <ul id="listSet1">
                       { 
                            initAnnouncePosts.map((onePost, i)=>{
                            return(
                                <li className="list8" onClick={()=>{history.push('/announcement/'+onePost.id);}}>{onePost.title}</li>
                            )
                        })}
                        
                    </ul>
                </div>

                <div className="rightNav8">
                    <div className="title8" onClick={()=>{ history.push('/document')}}>
                        파견학생 서류제출 안내
                    </div>
                    <ul id="listSet2">
                        <li className="list8" onClick={()=>{ history.push('/document/america');  }}>미주</li>
                        <li className="list8" onClick={()=>{ history.push('/document/europe'); }}>유럽</li>
                        <li className="list8" onClick={()=>{ history.push('/document/china'); }}>중국</li>
                        <li className="list8" onClick={()=>{ history.push('/document/asia'); }}>아시아</li>
                    </ul>
                </div>

                <div className="rightNav8">
                    <div className="title8" onClick={()=>{ history.push('/community') }}>커뮤니티</div>
                    <ul id="listSet3">
                        <li className="list8" onClick={()=>{history.push('/community/america')}}>미주</li>
                        <li className="list8" onClick={()=>{history.push('/community/europe')}}>유럽</li>
                        <li className="list8" onClick={()=>{history.push('/community/china')}}>중국</li>
                        <li className="list8" onClick={()=>{history.push('/community/asia')}}>아시아</li>
                    </ul>
                </div>

                <div className="rightNav8">
                    <div className="title8" onClick={()=>{history.push('/qna')}}>Q&A</div>
                    <ul id="listSet4">
                        {
                            initQnaPosts.map((onePost, i)=>{
                                return(
                                    <li className="list8" onClick={()=>{history.push('/qna/' + onePost.id)}}>{onePost.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
