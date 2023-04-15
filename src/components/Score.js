
const Score = ({props}) => {
    
console.log(props)
  return (
    <div>
        <h3 className="student-style items2">Date: {props.date}</h3>
        <h3 className="student-style items3">Score: {props.score}</h3>
    </div>
  )
}

export default Score