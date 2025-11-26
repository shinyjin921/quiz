const Categories = ({categories,onSelect}) => {  
  return (
    <div id="categories">
      <h2>순 우리말 맞추기</h2>
      <ul>
        {
          categories.map((item,idx)=>{
            return (
              <li key={idx}
                  onClick={()=>{onSelect(item)}}
              >{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Categories