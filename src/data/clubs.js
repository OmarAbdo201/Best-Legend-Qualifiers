import fcBarcelonaLogo from '../assets/clubs/fc-barcelona.svg';
import interMilanLogo from '../assets/clubs/inter-milan.svg';
import acMilanLogo from '../assets/clubs/ac-milan.svg';
import manUnitedLogo from '../assets/clubs/manchester-united.svg';
import liverpoolLogo from '../assets/clubs/liverpool-fc.svg';
import psgLogo from '../assets/clubs/psg.svg';
import bayernLogo from '../assets/clubs/bayern.svg';
import arsenalLogo from '../assets/clubs/arsenal.svg';
import manCityLogo from '../assets/clubs/manchester-city.svg';
import tottenhamLogo from '../assets/clubs/tottenham.svg';
import newcastleLogo from '../assets/clubs/newcastle.svg';
import chelseaLogo from '../assets/clubs/chelsea.svg';
import atlticomadridLogo from '../assets/clubs/atltico-madrid.svg';

import messiImg from '../assets/legends/messi.png';
import LautaroImg from '../assets/legends/Lautaro.png';
import NeymarImg from '../assets/legends/Neymar.png';
import pogbaImg from '../assets/legends/pogba.png';
import VirgilImg from '../assets/legends/Virgil.png';
import ibraImg from '../assets/legends/ibra.png';
import lewaImg from '../assets/legends/lewa.png';
import SakaImg from '../assets/legends/Saka.png';
import agueroImg from '../assets/legends/Aguero.png';
import keanImg from '../assets/legends/kean.png';
import PalmerImg from '../assets/legends/Palmer.png';
import isakImg from '../assets/legends/Alexander.png';
import GriezmannImg from '../assets/legends/Griezmann.png';
import YamalImg from '../assets/legends/Yamal.png';
import LukakuImg from '../assets/legends/Lukaku.png';
import LeaoImg from '../assets/legends/Leao.png';
import SanchoImg from '../assets/legends/Sancho.png';
import MattImg from '../assets/legends/Matt.png';
import GomezImg from '../assets/legends/Gomez.png';
import HakimiImg from '../assets/legends/Hakimi.png';
import SaneImg from '../assets/legends/Sane.png';
import MartinelliImg from '../assets/legends/Martinelli.png';
import NkunkuImg from '../assets/legends/Nkunku.png';
import DepayImg from '../assets/legends/Depay.png';
import SonImg from '../assets/legends/Son.png';
import HallandImg from '../assets/legends/Halland.png';

export const clubs = [
    {
        id : "1",
        name: "Barcelona",
        logo : fcBarcelonaLogo,
        legends:[
            { id: "1-1", name: "messi", image: messiImg },
            { id: "1-2", name: "Lamin Yamal", image: YamalImg },
        ] 
    },
    {
        id : "2",
        name: "Inter Milan",
        logo : interMilanLogo,
        legends:[
            { id: "2-1", name: "Lautaro", image: LautaroImg },
            { id: "2-2", name: "Lukaku", image: LukakuImg },
        ]
    },
    {
        id: 3,
        name: "AC Milan",
        logo: acMilanLogo,
        legends: [
            { id: "3-1", name: "Ibrahimovic", image: ibraImg },
            { id: "3-2", name: "Leao", image: LeaoImg },
        ]
    },
    {
        id: 4,
        name: "Manchester United",
        logo: manUnitedLogo,
        legends: [
            { id: "4-1", name: "pogba", image: pogbaImg },
            { id: "4-2", name: "Sancho", image: SanchoImg },
        ]
    },
    {
        id: 5,
        name: "Liverpool",
        logo: liverpoolLogo,
        legends: [
            { id: "5-1", name: "van Dijk", image: VirgilImg },
            { id: "5-2", name: "Gomez", image: GomezImg }
        ]
    },
    {
        id: 6,
        name: "PSG",
        logo: psgLogo,
        legends: [
            { id: "6-1", name: "Neymar", image: NeymarImg },
            { id: "6-2", name: "Hakimi", image: HakimiImg }
        ] 
    },
    {
        id: 7,
        name: "Bayern",
        logo: bayernLogo,
        legends: [
            { id: "7-1", name: "lewa", image: lewaImg },
            { id: "7-2", name: "Sane", image: SaneImg }
        ] 
    },
    {
        id: 8,
        name: "Arsenal",
        logo: arsenalLogo,
        legends:[
            { id: "8-1", name: "Saka", image: SakaImg },
            { id: "8-2", name: "Martinelli", image: MartinelliImg }
        ] 
    },
    {
        id: 9,
        name: "manchester city",
        logo: manCityLogo,
        legends: [
            { id: "9-1", name: "Aguero", image: agueroImg },
            { id: "9-2", name: "Halland", image: HallandImg }
        ] 
    },
    {
        id: 10,
        name: "Tottenham",
        logo: tottenhamLogo,
        legends: [
            { id: "10-1", name: "Kean", image: keanImg },
            { id: "10-2", name: "Son", image: SonImg },
        ] 
    },
    {
        id: 11,
        name: "Atltico Madrid",
        logo: atlticomadridLogo,
        legends: [
            { id: "11-1", name: "Griezmann", image: GriezmannImg },
            { id: "11-2", name: "Depay", image: DepayImg },
        ]
    },
    {
        id: 12,
        name: "Chelsea",
        logo: chelseaLogo,
        legends: [
            { id: "12-1", name: "Palmer", image: PalmerImg },
            { id: "12-2", name: "Nkunku", image: NkunkuImg },
        ]
    },
    {
        id: 13,
        name: "Newcastle",
        logo: newcastleLogo,
        legends: [
            { id: "13-1", name: "Alexander Isak", image: isakImg },
            { id: "13-2", name: "Matt", image: MattImg }
        ]
    },
]