export default function GameOver({winner}){
    return(
        <div id="game-over">
            <h2>Game Over...</h2>
            {winner && <p>{winner} Won! The Match </p>}
            {!winner && <p>Draw! The Match</p>}
            <p>
                <button>Re-Start</button>
            </p>
        </div>
    )
}