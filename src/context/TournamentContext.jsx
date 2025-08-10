import { createContext, useEffect, useState } from "react";

const TournamentContext = createContext();

function TournamentProvider({ children }) {
    const [userClubs, setUserClubs] = useState(() => {
        const savedClubs = localStorage.getItem("userClubs");
        return savedClubs ? JSON.parse(savedClubs) : [];
    });

    useEffect(() => {
        localStorage.setItem("userClubs", JSON.stringify(userClubs));
    }, [userClubs]);


    return (
        <TournamentContext.Provider value={{ userClubs, setUserClubs }}>
            {children}
        </TournamentContext.Provider>
    );
}

export { TournamentContext };
export default TournamentProvider;
