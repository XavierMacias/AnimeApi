const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const Anime = require("../api/models/animes.model");

const arrayAnimes = [
    {
        name: 'One Piece',
        year: 1999,
        genre: ["Adventure", "Fantasy", "Comedy"],
        description: "One Piece follows the adventures of Monkey D. Luffy, a boy who, with his crew of pirates, named the Straw Hat Pirates, explores the Grand Line in search of the world's ultimate treasure known as One Piece in order to become the next Pirate King.",
        races: ["Human","Gyojin","Giant","Mink","Merfolk","Cyborg","Reindeer","Skeleton"],
        rating: 95.0,
        characters: [],
        image: "https://res.cloudinary.com/dslkwmh63/image/upload/v1686414576/animes/lxhnray23qv1epmynnwx.jpg"
    },
    {
        name: 'Dragon Ball',
        year: 1986,
        genre: ["Martial Arts", "Fantasy", "Comedy"],
        description: "Dragon Ball follows the adventures of Son Goku from his childhood through adulthood as he trains in martial arts. He met a teen girl named Bulma, who encourages him to join her quest in exploring the world in search of the seven orbs known as the Dragon Balls, which summon a wish-granting dragon when gathered.",
        races: ["Human","Saiyan","Frost Demon","Namekian","Saiyan-Human"],
        rating: 85.0,
        characters: [],
        image: "https://res.cloudinary.com/dslkwmh63/image/upload/v1689810667/animes/dragon_ball_pkbyjv.jpg"
    },
    {
        name: 'Shingeki no Kyojin',
        year: 2013,
        genre: ["Action", "Dark-Fantasy", "Post-apocalyptic"],
        description: "Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans, Eren Yeager, along with friends Mikasa Ackerman and Armin Arlert, saw how a Colossal Titan breaches the wall of their hometown, Titans destroy the city and eat Eren's mother. Vowing vengeance, Eren joins the elite Survey Corps, a group of soldiers who fight against Titans.",
        races: ["Human","Titan"],
        rating: 99.0,
        characters: [],
        image: "https://res.cloudinary.com/dslkwmh63/image/upload/v1689810901/animes/shingeki_wfik5w.jpg"
    },
    {
        name: 'Kimetsu no Yaiba',
        year: 2019,
        genre: ["Adventure", "Dark-Fantasy", "Action"],
        description: "Kimetsu no Yaiba follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, turned into a demon.",
        races: ["Human","Demon"],
        rating: 75.0,
        characters: [],
        image: "https://res.cloudinary.com/dslkwmh63/image/upload/v1689810920/animes/kimetsu_lwlnpr.jpg"
    },
    {
        name: 'Naruto',
        year: 2002,
        genre: ["Adventure","Fantasy","Martial Arts"],
        description: "Naruto tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
        races: ["Human","Kitsune"],
        rating: 80.0,
        characters: [],
        image: "https://res.cloudinary.com/dslkwmh63/image/upload/v1689811040/animes/naruto_shippuden_y8odku.jpg"
    },
    {
        name: 'Chainsaw Man',
        year: 2022,
        genre: ["Action","Comedy","Dark-Fantasy","Horror"],
        description: "Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on fighting against devils whenever they become a threat to Japan.",
        races: ["Human","Devil"],
        rating: 95.0,
        characters: [],
        image: "https://res.cloudinary.com/dslkwmh63/image/upload/v1689811034/animes/chainsawman_yhzcts.png"
    }
];


mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allAnimes = await Anime.find();
    if(allAnimes.length > 0){
        await Anime.collection.drop();
        console.log("Animes deleted");
    }
})
.catch((error) => console.log("error deleting animes", error))
.then(async () => {
    const AnimeMap = arrayAnimes.map((anime) => new Anime(anime));
    await Anime.insertMany(AnimeMap);
    console.log("animes inserted");
})
.catch((error) => console.log("error inserting animes", error))
.finally(() => mongoose.disconnect());