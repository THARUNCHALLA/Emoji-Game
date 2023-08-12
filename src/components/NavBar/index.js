// Write your code here.
import './index.css'

const NavBar = props => {
  const {user, Top1, checking} = props

  let ans
  if (checking) {
    ans = (
      <>
        <p className="heading">Score: {user}</p>
        <p className="heading">Top Score: {Top1}</p>
      </>
    )
  }

  return (
    <div className="NavContainer">
      <div className="NavContainer1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="navImage"
        />
        <h1 className="span">Emoji Game</h1>
      </div>
      <div className="NavSecContainer">{ans}</div>
    </div>
  )
}
export default NavBar
