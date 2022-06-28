import './index.css'

const GameOver = props => {
  const {score, playAgain} = props

  return (
    <div className="score-card">
      <img
        className="trophy-image"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="text">Your Score</p>
      <p className="result-score">{score}</p>
      <button type="button" className="reset-button" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-image"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
