import { useState } from "react";
import { clubs } from "../data/clubs";
import { useNavigate } from "react-router-dom";
import ClubCard from "../components/ClubCard";
import { TournamentContext } from "../context/TournamentContext";
import { useContext } from "react";


function Home() {
    const [selectedClubs, setSelectedClubs] = useState([]);
    const navigate = useNavigate();
    const { setUserClubs } = useContext(TournamentContext);

    const toggleClub = (club) => {
        const alreadySelected = selectedClubs.some((c) => c.id === club.id);
        if (alreadySelected) {
            setSelectedClubs(selectedClubs.filter((c) => c.id !== club.id));
        }
        else {
            if (selectedClubs.length < 8) {
                setSelectedClubs([...selectedClubs, club]);
            }
        }
    };

    const startTournament = () => {
        setUserClubs(selectedClubs);
        navigate("/tournament");
    };


    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4 max-h-[60vh]">
                {clubs.map((club) => (
                    <ClubCard
                        key={club.id}
                        club={club}
                        selected={selectedClubs.some((c) => c.id === club.id)}
                        onClick={() => toggleClub(club)}
                    />
                ))}
            </div>

            {selectedClubs.length == 8 && (
                <div className="flex justify-center mt-4 w-full">
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 z-10"
                        onClick={startTournament}
                    >
                        Start Tournament
                    </button>
                </div>
            )}
        </>
    )

}
export default Home;