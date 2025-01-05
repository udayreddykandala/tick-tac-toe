export default function GameOver({winner,onRestart}){
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner},Congratulations!!! you won!!</p>}
            {!winner && <p>Oops!!!It's a draw match </p>}
            <p>
                <button onClick={onRestart}>Rematch</button>
            </p>
        </div>
    )
}