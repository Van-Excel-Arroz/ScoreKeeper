import { v4 as uuid } from 'uuid';
import Player from './Player';
import './App.css';
import { useState } from 'react';

export default function App({ numPlayers = 5, target = 3 }) {
	const initialScores = [];
	for (let i = 0; i < numPlayers; i++) {
		initialScores.push({ id: uuid(), score: 0, index: i + 1, isDisabled: false });
	}

	const [scores, setScores] = useState(initialScores);
	const [allDisabled, setAllDisabled] = useState(false);

	function resetScores() {
		setScores(initialScores);
	}

	function disableAllButtons(disable) {
		setAllDisabled(disable);
		setScores(currentScores => currentScores.map(player => ({ ...player, isDisabled: disable })));
	}

	return (
		<div className="score-keeper">
			<h1>Score Keeper</h1>
			<h2>Target Score: {target}</h2>
			<button className="reset-score" onClick={resetScores}>
				Reset Score
			</button>
			<div className="score-keeper-grid">
				{scores.map(player => (
					<Player
						key={player.id}
						player={player}
						setScore={setScores}
						targetScore={target}
						disableAllButtons={disableAllButtons}
					/>
				))}
			</div>
		</div>
	);
}
