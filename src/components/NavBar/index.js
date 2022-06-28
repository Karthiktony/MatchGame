import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <nav className="navbar-container">
      <img
        className="website-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <ul className="score-timer-container">
        <li>
          <p className="score-text">
            Score: <span className="score"> {score}</span>
          </p>
        </li>
        <li>
          <img
            alt="timer"
            className="timer-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
        </li>
        <li>
          <p className="score">{timer} Sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
