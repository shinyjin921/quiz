const Categories = ({categories,onSelect}) => {  
  return (
    <div id="categories">
      <h2 className="yeon-sung-regular">순 우리말 <br />맞추기</h2>
      <ul>
        {
          categories.map((item,idx)=>{
            return (
              <li key={idx}
                  onClick={()=>{onSelect(item)}}
              >시작하기</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Categories