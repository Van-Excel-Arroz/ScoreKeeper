import './Player.css';

export default function Player({ player, setScore, targetScore, disableAllButtons }) {
	function incScore(playerId) {
		setScore(prevScore =>
			prevScore.map(p => {
				if (playerId === p.id) {
					const newScore = p.score + 1;
					if (newScore === targetScore) {
						disableAllButtons(true);
					}
					return { ...p, score: newScore };
				} else {
					return p;
				}
			})
		);
	}

	const isWinner = player.score === targetScore;

	return (
		<div className="player-card">
			<p className="profile">👤</p>
			<p className="name">Player {player.index}</p>
			<div className="score" style={{ color: isWinner ? 'green' : 'black' }}>
				<p>{player.score}</p>
				<h2>{isWinner ? 'Winner' : 'Score'}</h2>
			</div>
			<button className="inc-btn" onClick={() => incScore(player.id)} disabled={player.isDisabled}>
				+1
			</button>
		</div>
	);
}
