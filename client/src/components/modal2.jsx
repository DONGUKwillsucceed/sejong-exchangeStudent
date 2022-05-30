import "../styles/aboutExchangeSchedule.css";
import "../styles/modal.css";
import { useHistory } from "react-router-dom";

export default function Modal2(props){

    let history = useHistory();

    return(
        <div className="container1">
            <div className="aboutExchange">
                <h2 className="title1">{props.boardTitle}</h2>
            </div>
            <div className="modalContainer">
                <div className="component5">
            <div className="container5">
                <div className="section5">
                    <div className="part5" onClick={()=>{
                        history.push(window.location.pathname + '/america')
                        }}>
                        <div className="country5">미주</div>
                    </div>
                    <div className="part5" onClick={()=>{
                        history.push(window.location.pathname + '/europe')
                        }}>
                        <div className="country5">유럽</div>
                    </div>
                </div>
                <div className="section5">
                    <div className="part5" onClick={()=>{
                        history.push(window.location.pathname + '/china')
                        }}>
                        <div className="country5">중국</div>
                    </div>
                    <div className="part5" onClick={()=>{
                        history.push(window.location.pathname + '/asia')
                        }}>
                        <div className="country5">아시아</div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )

}