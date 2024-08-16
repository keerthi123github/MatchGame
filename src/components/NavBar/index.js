import './index.css'

const NavBar = props => {
  const {score, displaySecs} = props
  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-card-container">
        <li>
          <p className="score-text">
            Score: <span className="score">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="display-timer">{displaySecs} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
