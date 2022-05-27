import "../styles/aboutExchangeSchedule.css";
import "../styles/tel.css"
export default function tel(){
    return(
        <div className="container1">
            <div className="aboutExchange">
                <h2 className="title1">연락처</h2>
            </div>
            <div className="pContainer">
                <div className="infor1">
                    <strong><p>파견학생 정보공유 카페 <a href="http://cafe.naver.com/sejongexchange" target='_blank' className="font_color">cafe.naver.com/sejongexchange</a></p></strong>
                    <p>선배들의 수학보고서, 후기 등 자세한 정보를 알고 싶다면 카페에 가입하세요.</p>
                    <p>실명과 정확한 학번을 제시하고 닉네임을 실명으로 변경해야 가입승인 됩니다. 예비/정규교환학생 등급의 닉네임이 실명이 아니면 경고 후 강퇴처리 됩니다.</p>
                </div>
                <div className="infor1">
                    <strong><p>외국 교환학생 페이스북 그룹 <a href="http://www.facebook.com/groups/sejongexchange" target='_blank' className="font_color">www.facebook.com/groups/sejongexchange</a></p></strong>
                    <p>세종대에서 공부하고 있는 외국인 교환학생과 친구가 되어주세요.</p>
                </div>
                <div className="infor1">
                    <strong><p>세종대학교 국제교류센터 Office of International Affairs, Sejong University</p></strong>
                    <div className="affairs">
                        <p>[Homepage] <a href="http://oia.sejong.ac.kr"target='_blank' className="font_color">http://oia.sejong.ac.kr</a></p>
                        <div className="affairs_tag">
                            <p>[Email]</p>
                            <div className="font_color" id="affairs1">http://oia.sejong.ac.kr</div>
                        </div>
                        <div className="affairs_tag">
                            <p>[Homepage]</p>
                            <div className="font_color" id="affair2">02-3408-3659</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}