
const Score = ({props}) => {
    
console.log(props)
  return (
    <div>
        <h3>{props.date}</h3>
        <h3>{props.score}</h3>
    </div>
  )
}

export default Score