
import gold from "../images/first.png";
import silver from "../images/sec.png";
import bronze from "../images/threed.png";

const Results = ({onReStart,score}) => {
  let scoreImg = "";

if(score == '100'|| score =='80'){
  scoreImg = gold;
}else if(score == '60'|| score =='40'){
  scoreImg = silver;
}else if(score == '20'|| score =='0'){
  scoreImg = bronze;
}

  return (
    <div id="result">
      <p className="yeon-sung-regular">고생하셨습니다</p>
      <span className="score">{score}</span>
      <button onClick={onReStart}>재시작</button>
      <img className="left"src={scoreImg}></img>
      <img className="right" src={scoreImg}></img>
    </div>
  )
}

export default Results