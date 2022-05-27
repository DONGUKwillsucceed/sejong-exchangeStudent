import "../styles/aboutExchangeSchedule.css";

export default function AboutExchangeSchedule() {
    return (
        <div className="container1">
            <div className="aboutExchange">
                <h2 className="title1">정규학기</h2>
                <h5>- 프로그램 종류</h5>
                <div className="table1">
                    <table className="tableInfor">
                        <colgroup>
                            <col style={{ width: "14%" }}></col>
                            <col style={{ width: "8%" }}></col>
                            <col style={{ width: "14%" }}></col>
                            <col style={{ width: "20%" }}></col>
                            <col style={{ width: "14%" }}></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th rowSpan="2"></th>
                                <th colSpan="3">교환학생</th>
                                <th rowSpan="2">방문학생</th>
                                <th rowSpan="2" className="last">
                                    복수학위
                                </th>
                            </tr>
                            <tr>
                                <th>일반</th>
                                <th>지역전문가</th>
                                <th>
                                    Global Excellence
                                    <br />
                                    Scholarship Program
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>본교 등록금</td>
                                <td>납부</td>
                                <td>국제교류장학금 50% 제공</td>
                                <td>면제</td>
                                <td>국제교류장학금 70% 제공</td>
                                <td>국제교류장학금 70% 제공</td>
                            </tr>
                            <tr>
                                <td>상대교 등록금</td>
                                <td>면제</td>
                                <td>면제</td>
                                <td>면제</td>
                                <td>납부</td>
                                <td>납부</td>
                            </tr>
                            <tr>
                                <td>생활비</td>
                                <td></td>
                                <td></td>
                                <td>200만원 지원</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    상대교 3학년에 편입하여 세종대와 상대교 모두
                                    학위 취득
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="aboutExchange">
                <h5>- 일정</h5>
                <div className="table1">
                    <table className="tableInfor">
                        <colgroup>
                            <col style={{ width: "33%" }}></col>
                            <col style={{ width: "33%" }}></col>
                            <col style={{ width: "34%" }}></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th></th>
                                <th>봄학기 파견</th>
                                <th>가을학기 파견</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>설명회</td>
                                <td>3월 중</td>
                                <td>9월 중</td>
                            </tr>
                            <tr>
                                <td>접수</td>
                                <td>5월 중</td>
                                <td>11월 중</td>
                            </tr>
                            <tr>
                                <td>면접</td>
                                <td>6월 중</td>
                                <td>12월 중</td>
                            </tr>
                            <tr>
                                <td>발표</td>
                                <td>7월 말</td>
                                <td>1월 말</td>
                            </tr>
                            <tr>
                                <td>오리엔테이션</td>
                                <td>8월 말</td>
                                <td>2월 말</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="aboutExchange">
                <h5>- 지원자격</h5>
                <p>1. 본교 재학생 및 휴학생(1학년 1학기 재학생 지원 가능)</p>
                <p>※ 편입생의 경우 본교 1학기 재학 중인 자도 지원 가능</p>
                <p>※ 휴학생 지원 가능. 단, 파견학기에는 등록해야 함</p>
                <p>※ 마지막 학기(졸업직전 학기)는 반드시 수학을 해야 함</p>
                <p>
                    2. 평점평균(GPA) 3.0 이상인 자 (단, 중화권을 포함한 아시아
                    대학은 2.5 이상인 자)
                </p>
                <p>
                    3. 지원 대학별 어학조건을 충족하는 자(대부분의 유럽 대학이
                    700점 이상, 아시아 대학이 600점 이상의 TOEIC 점수를 요구함.)
                </p>
                <p>4. 학칙에 의해 징계 받은 사실이 없는 자</p>
                <p>
                    5. 해외여행에 결격사유(비자발급조건 등)가 없으며, 면접
                    시까지 여권 발급이 가능한 자
                </p>
                <p>
                    6. 일본 파견 학생의 경우, 파견 전 교내 일본어 교육에
                    참여하여 일정 수준 달성이 가능한 자
                </p>
                <h5>- 학점인정</h5>
                <p>1. 최소 6학점 이수, 최대 18학점 이수</p>
                <p>
                    2. 해외 교류 학점은 모두 P/NP로 인정됨(복수학위의 프로그램일
                    경우 예외)
                </p>
                <p>
                    3. 수학 후 수업계획서 등 증빙자료를 바탕으로 학과장 승인
                    하에 최대 18학점까지 전공학점(전공필수 및 전공선택 모두
                    가능)으로 인정될 수 있음. 전공학점 이외는 교양학점으로
                    인정됨.
                </p>
            </div>
            <div className="aboutExchange">
                <h2 className="title1">계절학기</h2>
                <div style={{ fontSize: "13px" }}>
                    하계 또는 동계학기 중 단기(4주~8주)기간 해외 자매교에
                    파견되어 어학연수 후 교양학점으로 인정 받는 제도로서,
                    국제교류장학금을 받을 수 있어 보다 저렴한 비용으로
                    어학연수(문화체험)과 학점을 취득할 수 있다. 또한 해외 파견
                    프로그램에 관심이 있지만, 공인 어학점수가 없거나 장기 해외
                    파견이 어려운 학생들이 부담 없이 지원 가능하며 향후 정규학기
                    파견의 발판으로 삼을 수 있다.
                </div>
                <h5>- 프로그램 종류</h5>
                <div className="table1">
                    <table>
                        <colgroup>
                            <col style={{ width: "16%" }}></col>
                            <col style={{ width: "42%" }}></col>
                            <col style={{ width: "42%" }}></col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th></th>
                                <th>단기어학연수</th>
                                <th>집중어학과정</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>특징</td>
                                <td>
                                    향후 동일 대학의 정규학기 해외파견학생
                                    지원시 가산점 부여
                                </td>
                                <td>계절학기 수업 + 단기어학연수</td>
                            </tr>
                            <tr>
                                <td>지역</td>
                                <td>미국</td>
                                <td>말레이시아, 중국</td>
                            </tr>
                            <tr>
                                <td>지원자격</td>
                                <td>1학년~4학년 1학기 재학생</td>
                                <td>1학년~3학년 1학기 재학생</td>
                            </tr>
                            <tr>
                                <td>학점인정</td>
                                <td colSpan="2">
                                    계절학기 6학점 인정, 4년간 총 24학점
                                    이내에서만 인정
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="2">장학혜택</td>
                                <td colSpan="2">
                                    모든 장학금은 등록금 범위 내에서, 다음
                                    정규학기 등록금 고지서에서 차감
                                </td>
                            </tr>
                            <tr>
                                <td>150/200만원</td>
                                <td>해당 프로그램 비용 면제</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h5>- 공지 일정</h5>
                <p>- 여름학기: 매년 4월 중순</p>
                <p>- 겨울학기: 매년 10월 중순</p>
            </div>
        </div>
    );
}
