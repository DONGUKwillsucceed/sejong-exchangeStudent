import "../styles/mainCompo.css";
// import exchangStudent from "/exchangeStudent.jpg";

export default function Board() {
    return (
        <div className="mainboard15">
            <img src="/exchangeStudent.jpg" width="100%"/>
            <div className="aboutExchange3">
                <h2 className="title3">해외파견 프로그램</h2>
                <p>
                    우리대학은 해외 자매대학과 교환학생 프로그램을 통해 학생교류
                    및 학점교류를 실시하고 있습니다. 우리대학에서 1년 이상
                    수학한 학생은 우리대학과 학생교환에 관한 협정이 체결된
                    대학에 교환학생으로 파견되어 일정기간(1학기~2학기)동안
                    외국어를 익히고 문화체험의 기회도 누리면서 자연스럽게
                    학점이수도 가능합니다.
                </p>

                {/* <p>
                    ※ 아래 내용은 개괄적인 안내사항으로서, 구체적인 정보는 파견
                    예정 학기의 안내자료 및 국제교류 공지사항을 반드시
                    참고하세요.
                </p> */}
            </div>

            {/* 
            <div className={styles.season}></div> */}
        </div>
    );
}
