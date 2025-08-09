import { useState, useContext } from "react";
import { TournamentContext } from "../context/TournamentContext";

function Tournament() {
    const { userClubs } = useContext(TournamentContext);


    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }


    const [rounds, setRounds] = useState(() => {
        const shuffledClubs = shuffleArray(userClubs);

        const firstRound = [];
        for (let i = 0; i < shuffledClubs.length; i += 2) {
            firstRound.push([shuffledClubs[i], shuffledClubs[i + 1]]);
        }
        return [firstRound];
    });

    const [winnersList, setWinnersList] = useState([
        Array(Math.ceil(userClubs.length / 2)).fill(null),
    ]);

    function handleNext() {
        const lastWinners = winnersList[winnersList.length - 1];
        const nextRound = [];

        for (let i = 0; i < lastWinners.length; i += 2) {
            nextRound.push([lastWinners[i], lastWinners[i + 1]]);
        }

        setRounds((prev) => [...prev, nextRound]);
        setWinnersList((prev) => [...prev, Array(nextRound.length).fill(null)]);
    }

    return (
        <div className="bracket p-4 flex flex-row items-start justify-center gap-12 overflow-auto w-full">
            {rounds.map((round, roundIndex) => (
                <div key={roundIndex} className="round mb-8 flex flex-col items-center" data-round={roundIndex}>
                    <h2 className="text-lg font-bold mb-2">Round {roundIndex + 1}</h2>
                    {round.map((match, matchIndex) => {
                        const winner = winnersList[roundIndex][matchIndex];

                        return (
                            <div key={matchIndex} className="match flex gap-6 items-center justify-center mb-3">
                                {/* Player 1 */}
                                <img
                                    width={70}
                                    height={70}
                                    src={match[0]?.legend.image}
                                    alt={match[0]?.legend.name}
                                    className={
                                        winner === match[0]
                                            ? "border-4 border-blue-500 rounded-lg"
                                            : winner === match[1]
                                                ? "opacity-40 grayscale"
                                                : ""
                                    }
                                    onClick={() => {
                                        const updatedWinners = [...winnersList];
                                        updatedWinners[roundIndex][matchIndex] = match[0];
                                        setWinnersList(updatedWinners);
                                    }}
                                />

                                <span className="font-bold">VS</span>

                                {/* Player 2 */}
                                <img
                                    width={70}
                                    height={70}
                                    src={match[1]?.legend.image}
                                    alt={match[1]?.legend.name}
                                    className={
                                        winner === match[1]
                                            ? "border-4 border-blue-500 rounded-lg"
                                            : winner === match[0]
                                                ? "opacity-40 grayscale"
                                                : ""
                                    }
                                    onClick={() => {
                                        const updatedWinners = [...winnersList];
                                        updatedWinners[roundIndex][matchIndex] = match[1];
                                        setWinnersList(updatedWinners);
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            ))}

            {/* Next button */}
            {winnersList[winnersList.length - 1].every((w) => w !== null) &&
                winnersList[winnersList.length - 1].length > 1 && (
                    <button
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                        onClick={handleNext}
                    >
                        Next Round
                    </button>
                )}

            {/* Winner */}
            {winnersList[winnersList.length - 1].length === 1 &&
                winnersList[winnersList.length - 1][0] && (
                    <div className="mt-8 text-center">
                        <h3 className="text-xl font-bold mb-2">🏆 Super Legend</h3>
                        <img
                            src={winnersList[winnersList.length - 1][0].legend.image}
                            alt="winner"
                            className="w-28 h-28 object-contain mx-auto mt-2"
                        />
                        <p className="mt-2 font-bold">
                            {winnersList[winnersList.length - 1][0].legend.name}
                        </p>
                    </div>
                )}
        </div>
    );
}

export default Tournament;
