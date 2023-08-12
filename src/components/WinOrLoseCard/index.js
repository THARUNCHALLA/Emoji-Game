// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {user123, Back12} = props
  console.log(user123)
  const Back = () => {
    Back12(user123)
  }
  let check
  if (user123 === 12) {
    check = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="image123"
      />
    )
  } else {
    check = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="image123"
      />
    )
  }
  let checked
  if (user123 !== 12) {
    checked = <h1 className="ThaRun">You Lose</h1>
  } else {
    checked = <h1 className="ThaRun">You Won</h1>
  }

  let Top12
  if (user123 === 12) {
    Top12 = (
      <div>
        <p className="para">Best Score</p>
        <p className="spam12">{user123}/12</p>
      </div>
    )
  } else {
    Top12 = (
      <div>
        <p className="para">Score</p>
        <p className="spam12">{user123}/12</p>
      </div>
    )
  }
  return (
    <li className="list">
      <div className="lastContainer">
        {checked}
        <div className="finalContainer">
          {Top12}
          <button type="button" className="btn" onClick={Back}>
            Play Again
          </button>
        </div>
      </div>
      {check}
    </li>
  )
}
export default WinOrLoseCard
