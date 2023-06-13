const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const Character = require("../api/models/characters.model");

const arrayCharacter = [
    {
      "name": 'Monkey D. Luffy',
      "age": 19,
      "gender": "Male",
      "race": "Human",
      "description": "Monkey D. Luffy is the founder and captain of the Straw Hat Pirates. He desires to find the legendary treasure left behind by the late Gol D. Roger and thereby become the Pirate King.",
      "popularity": 99.0,
      "status": 'Alive'
      //"image": "https://res.cloudinary.com/dwtvuadkp/image/upload/v1685727027/foodProducts/kvf9nuj6sctti1l4vw9h.png"
    },
    {
      "name": 'Roronoa Zoro',
      "age": 21,
      "gender": "Male",
      "race": "Human",
      "description": "Roronoa Zoro is a main combatant of the Straw Hat Pirates, one of their two swordsmen and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy. Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it.",
      "popularity": 98.0,
      "status": 'Alive'
    },
    {
      "name": 'Vinsmoke Sanji',
      "age": 21,
      "gender": "Male",
      "race": "Human",
      "description": "Black Leg Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fifth member of the crew and the fourth to join.",
      "popularity": 98.0,
      "status": 'Alive'
    },
    {
      "name": 'Son Goku',
      "age": 44,
      "gender": "Male",
      "race": "Saiyan",
      "description": "Son Goku, born Kakarot, is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. He is Bardock and Gine's youngest son, the husband of Chi-Chi, and the father of Gohan and Goten.",
      "popularity": 90.0,
      "status": 'Alive'
    },
    {
      "name": 'Vegeta',
      "age": 48,
      "gender": "Male",
      "race": "Saiyan",
      "description": "Vegeta, more specifically Vegeta IV, recognized as Prince Vegeta, is the prince of the fallen Saiyan race and the husband of Bulma, the father of Trunks and Bra, the eldest son of King Vegeta, as well as one of the main characters of the Dragon Ball series.",
      "popularity": 96.0,
      "status": 'Alive'
    },
    {
      "name": 'Freezer',
      "age": 70,
      "gender": "Asexual",
      "race": "Frost Demon",
      "description": "Freezer is the main antagonist of the Dragon Ball series, he is primarily responsible for the Genocide of the Saiyans and serves as the main antagonist of the overarching Freezer Saga and Golden Freezer Saga, as well as a villainous protagonist during the Universe Survival Saga.",
      "popularity": 92.0,
      "status": 'Alive'
    },
    {
      "name": 'Eren Yeager',
      "age": 19,
      "gender": "Male",
      "race": "Human",
      "description": "Eren Yeager is the main protagonist of Attack on Titan. He lived in Shiganshina District with his parents until the fall of Wall Maria, where he impotently witnessed his mother being eaten by a Titan. This event would lead to Eren's intense hatred towards the Titans as he swore to wipe all of them off the face of the Earth.",
      "popularity": 85.0,
      "status": 'Deceased'
    },
    {
      "name": 'Mikasa Ackerman',
      "age": 22,
      "gender": "Female",
      "race": "Human",
      "description": "Mikasa Ackerman is one of the two deuteragonists of the series. After her parents were murdered by human traffickers, Mikasa was rescued by Eren Yeager and lived with him and his parents.",
      "popularity": 75.0,
      "status": 'Alive'
    },
    {
      "name": 'Levi Ackerman',
      "age": 38,
      "gender": "Male",
      "race": "Human",
      "description": "Levi Ackerman often formally referred to as Captain Levi, is the squad captain of the Special Operations Squad within the Survey Corps and is widely known as humanity's strongest soldier.",
      "popularity": 99.0,
      "status": 'Alive'
    },
    {
      "name": 'Tanjiro Kamado',
      "age": 16,
      "gender": "Male",
      "race": "Human",
      "description": "Tanjiro Kamado is the main protagonist of Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.",
      "popularity": 70.0,
      "status": 'Alive'
    },
    {
      "name": 'Nezuko Kamado',
      "age": 14,
      "gender": "Female",
      "race": "Demon",
      "description": "Nezuko Kamado is the deuteragonist of Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
      "popularity": 80.0,
      "status": 'Alive'
    },
    {
      "name": 'Rengoku Kyojuro',
      "age": 20,
      "gender": "Male",
      "race": "Human",
      "description": "Kyojuro Rengoku was a major supporting character of Kimetsu no Yaiba and the deuteragonist of the Mugen Train Arc. He was a Demon Slayer of the Demon Slayer Corps and the late Flame Hashira.",
      "popularity": 99.0,
      "status": 'Deceased'
    }
  ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allCharacters = await Character.find();
    if(allCharacters.length > 0){
        await Character.collection.drop();
        //collection.drop() => Te vacía la colección entera.
        console.log("characters deleted");
    }
})
.catch((error) => console.log("error deleting characters", error))
.then(async () => {
    const CharacterMap = arrayCharacter.map((character) => new Character(character));
    await Character.insertMany(CharacterMap);
    console.log("characters inserted");
})
.catch((error) => console.log("error inserting characters", error))
.finally(() => mongoose.disconnect());