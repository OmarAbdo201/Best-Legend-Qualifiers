import './ClubCard.css';
function ClubCard({ selected, club, onClick }) {
    return (
        <>
            <div
                onClick={onClick}
                className={`cursor-pointer p-2 rounded-xl shadow-md transition-all duration-200 text-center flex flex-col justify-center items-center
                ${selected ? "bg-blue-200 border-2 border-blue-600 scale-75" : "bg-white hover:shadow-lg"}`}
            >
                <img
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                    src={club.logo}
                    alt={club.name}
                    className="mb-2"
                />
                <h3 className="text-center font-semibold text-lg">{club.name}</h3>
            </div>
        </>
    )
}
export default ClubCard;