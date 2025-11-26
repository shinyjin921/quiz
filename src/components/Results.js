const Results = ({onReStart}) => {
  return (
    <div id="result">
      <p>고생하셨습니다</p>
      <button onClick={onReStart}>다시시작</button>
    </div>
  )
}

export default Results