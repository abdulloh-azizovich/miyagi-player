import { v4 as uuidv4 } from "uuid";
function chillHop() {
    return [
        {
            name: "Патрон",
            cover:
                "https://text-pesni.com/public/img/songs/565705049/1.jpg",
            artist: "Miyagi & Andy Panda",
            audio: "https://dl1.mp3party.net/download/9960534",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Tantra",
            cover:
                "https://freshpic.art/img/2020-07/30/ir39qj25emi7ofx6y4q8l8rb3.jpg",
            artist: "Miyagi & Andy Panda",
            audio: "https://cdn7.sefon.pro/download/CRl8u0Jd72DuNVCkLKNTew/1619314240/191/MiyaGi%20&%20Andy%20Panda%20-%20Tantra.mp3",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Medicine",
            cover:
                "https://text-pesni.com/public/img/songs/565692547/1.jpg",
            artist: "Miyagi & Andy Panda",
            audio: "https://cdn4.sefon.pro/download/Rb3bQLb5lS9LzK5youm0fw/1619313119/191/MiyaGi%20&%20Andy%20Panda%20-%20Medicine.mp3",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Nightfall",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Reflection",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Under the City Stars",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default chillHop;
