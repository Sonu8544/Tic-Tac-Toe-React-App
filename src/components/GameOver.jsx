export default function GameOver({winner, onRestart}){
    return(
        <div id="game-over">
            <h2>Game Over...</h2>
            {winner && <p>{winner} Won! The Match </p>}
            {!winner && <p>Draw! The Match</p>}
            <p>
                <button onClick={onRestart} >Re-Start</button>
            </p>
        </div>
    )
}