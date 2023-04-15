
import Score from "./Score";

const Student = ({props}) => {
    
    console.log(props.scores)
    const dataSetTwo = props.scores.map((dataTwo)=>{
        return(
          <Score props={dataTwo}/>
        )
      })
console.log(dataSetTwo)
  return (
    <div>
        <h3 className="student-style items1">{props.name}</h3>
        <h3 className="student-style bio">{props.bio}</h3>
        {dataSetTwo}
    </div>
  )
}

export default Student