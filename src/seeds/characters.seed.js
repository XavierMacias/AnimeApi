const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const Character = require("../api/models/characters.model");

const arrayCharacter = [
  {
    "name": "Monkey D. Luffy",
    "age": 19,
    "gender": "Male",
    "race": "Human",
    "description": "Monkey D. Luffy is the founder and captain of the Straw Hat Pirates. He desires to find the legendary treasure left behind by the late Gol D. Roger and thereby become the Pirate King.",
    "popularity": 99,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686414576/animes/lxhnray23qv1epmynnwx.jpg"
  },
  {
    "name": "Roronoa Zoro",
    "age": 21,
    "gender": "Male",
    "race": "Human",
    "description": "Roronoa Zoro is a main combatant of the Straw Hat Pirates, one of their two swordsmen and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy. Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it.",
    "popularity": 98,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686415377/animes/kx03khi1iwgvwoepauun.jpg"
  },
  {
    "name": "Vinsmoke Sanji",
    "age": 21,
    "gender": "Male",
    "race": "Human",
    "description": "Black Leg Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fifth member of the crew and the fourth to join.",
    "popularity": 98,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686421655/animes/mbzpsk3sjtmva9ielnhr.jpg"
  },
  {
    "name": "Son Goku",
    "age": 44,
    "gender": "Male",
    "race": "Saiyan",
    "description": "Son Goku, born Kakarot, is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. He is Bardock and Gine's youngest son, the husband of Chi-Chi, and the father of Gohan and Goten.",
    "popularity": 90,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686421736/animes/lqur0rwind4tkcddxej9.jpg"
  },
  {
    "name": "Vegeta",
    "age": 48,
    "gender": "Male",
    "race": "Saiyan",
    "description": "Vegeta, more specifically Vegeta IV, recognized as Prince Vegeta, is the prince of the fallen Saiyan race and the husband of Bulma, the father of Trunks and Bra, the eldest son of King Vegeta, as well as one of the main characters of the Dragon Ball series.",
    "popularity": 96,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686421788/animes/xwp0nki2olwvhsawbyal.jpg"
  },
  {
    "name": "Freezer",
    "age": 70,
    "gender": "Asexual",
    "race": "Frost Demon",
    "description": "Freezer is the main antagonist of the Dragon Ball series, he is primarily responsible for the Genocide of the Saiyans and serves as the main antagonist of the overarching Freezer Saga and Golden Freezer Saga, as well as a villainous protagonist during the Universe Survival Saga.",
    "popularity": 92,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686421845/animes/lpvtqyjaenx6r6g8scxa.jpg"
  },
  {
    "name": "Eren Yeager",
    "age": 19,
    "gender": "Male",
    "race": "Human",
    "description": "Eren Yeager is the main protagonist of Attack on Titan. He lived in Shiganshina District with his parents until the fall of Wall Maria, where he impotently witnessed his mother being eaten by a Titan. This event would lead to Eren's intense hatred towards the Titans as he swore to wipe all of them off the face of the Earth.",
    "popularity": 85,
    "status": "Deceased",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686421901/animes/j3bpkg8pwmbt3qapmwar.jpg"
  },
  {
    "name": "Mikasa Ackerman",
    "age": 22,
    "gender": "Female",
    "race": "Human",
    "description": "Mikasa Ackerman is one of the two deuteragonists of the series. After her parents were murdered by human traffickers, Mikasa was rescued by Eren Yeager and lived with him and his parents.",
    "popularity": 75,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686421950/animes/mx5rg11um9odlh1cywnk.jpg"
  },
  {
    "name": "Levi Ackerman",
    "age": 38,
    "gender": "Male",
    "race": "Human",
    "description": "Levi Ackerman often formally referred to as Captain Levi, is the squad captain of the Special Operations Squad within the Survey Corps and is widely known as humanity's strongest soldier.",
    "popularity": 99,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686422011/animes/qobvncnwi5z0mjodvhbm.jpg"
  },
  {
    "name": "Tanjiro Kamado",
    "age": 16,
    "gender": "Male",
    "race": "Human",
    "description": "Tanjiro Kamado is the main protagonist of Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons.",
    "popularity": 70,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686422068/animes/niyqouz0s2uvnxilf23d.jpg"
  },
  {
    "name": "Nezuko Kamado",
    "age": 14,
    "gender": "Female",
    "race": "Demon",
    "description": "Nezuko Kamado is the deuteragonist of Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.",
    "popularity": 80,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686422136/animes/vskbx5qiqgafzadmn1lj.jpg"
  },
  {
    "name": "Rengoku Kyojuro",
    "age": 20,
    "gender": "Male",
    "race": "Human",
    "description": "Kyojuro Rengoku was a major supporting character of Kimetsu no Yaiba and the deuteragonist of the Mugen Train Arc. He was a Demon Slayer of the Demon Slayer Corps and the late Flame Hashira.",
    "popularity": 99,
    "status": "Deceased",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686422189/animes/jef1bchyb1o307nv21fb.jpg"
  },
  {
    "name": "Nami",
    "age": 20,
    "gender": "Female",
    "race": "Human",
    "description": "Cat Burglar Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the third member of the crew and the second to join, doing so during the Orange Town Arc.",
    "popularity": 97,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686479771/animes/svh31wcrvfs9po0qtgcz.jpg"
  },
  {
    "name": "Piccolo",
    "age": 27,
    "gender": "Asexual",
    "race": "Namekian",
    "description": "Piccolo Jr, usually just called Piccolo and also known as Ma Junior, is a Namekian and also the final child and reincarnation of King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami. According to Grand Elder Guru, Piccolo, along with Kami and King Piccolo, are part of the Dragon Clan, who were the original creators of the Dragon Balls.",
    "popularity": 90,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686479980/animes/dpqgw0lqaxglp3wqsvxq.jpg"
  },
  {
    "name": "Armin Arlert",
    "age": 22,
    "gender": "Male",
    "race": "Human",
    "description": "Armin Arlert is the 15th and current commander of the Survey Corps, named so by Hange Zoë before their death. He is also a childhood friend of Eren Yeager and Mikasa Ackerman, and one of the two deuteragonists of the series.",
    "popularity": 95,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686480138/animes/pbz2t4dd7mcpcmsqq8lw.jpg"
  },
  {
    "name": "Inosuke Hashibira",
    "age": 15,
    "gender": "Male",
    "race": "Human",
    "description": "Inosuke Hashibira is one of the main characters of Demon Slayer and along with Zenitsu Agatsuma, a traveling companion of Tanjiro Kamado and Nezuko Kamado.",
    "popularity": 89,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686480349/animes/jxg0kuasbzjheiy6zavx.jpg"
  },
  {
    "name": "Usopp",
    "age": 19,
    "gender": "Male",
    "race": "Human",
    "description": "God Usopp is the sniper of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fourth member of the crew and the third to join, doing so at the end of the Syrup Village Arc.",
    "popularity": 88,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686482076/animes/gt9bl3me0gybhbapedzn.jpg"
  },
  {
    "name": "Son Gohan",
    "age": 24,
    "gender": "Male",
    "race": "Saiyan-Human",
    "description": "Son Gohan is a half-breed Saiyan and one of the most prominent characters in the Dragon Ball series. He is the elder son of Goku and Chi-Chi, the older brother of Goten, the husband of Videl and father to Pan. He is named after Goku's adoptive grandfather, Gohan.",
    "popularity": 91,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686482201/animes/fl58frijchoszssocgri.jpg"
  },
  {
    "name": "Reiner Braun",
    "age": 24,
    "gender": "Male",
    "race": "Human",
    "description": "Reiner Braun is the Vice Captain of the Warrior Unit. He is the illegitimate son of an Eldian and a Marleyan and grew up in Liberio's internment zone. Eventually, he was selected as a child to become one of Marley's Warriors. At the age of ten, he inherited the power of the Armored Titan.",
    "popularity": 99,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686482290/animes/tvxyynsplu3avimlc3ph.jpg"
  },
  {
    "name": "Zenitsu Agatsuma",
    "age": 16,
    "gender": "Male",
    "race": "Human",
    "description": "Zenitsu Agatsuma is one of the main characters of Demon Slayer and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado.",
    "popularity": 60,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686482368/animes/cvbgre5nznmolznmwzzz.jpg"
  },
  {
    "name": "Tony Tony Chopper",
    "age": 17,
    "gender": "Male",
    "race": "Reindeer",
    "description": "Tony Tony Chopper, also known as Cotton Candy Lover Chopper, is the doctor of the Straw Hat Pirates. He is the sixth member of the crew and the fifth to join, doing so at the end of the Drum Island Arc.",
    "popularity": 62,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686482805/animes/xbrbzklc9spqhuht1vmv.jpg"
  },
  {
    "name": "Bulma Brief",
    "age": 47,
    "gender": "Female",
    "race": "Human",
    "description": "Bulma is a brilliant scientist and is Goku's first friend. She used to be the girlfriend of Yamcha, but moved on and, eventually, became the wife of Vegeta, as well as the mother of Trunks and Bra. A technological and scientific genius who can turn her talents to almost any field and understand alien technology near-effortlessly. Her most notable invention is the Dragon Radar.",
    "popularity": 95,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686482997/animes/mkpc4c65qseowcehntvd.jpg"
  },
  {
    "name": "Erwin Smith",
    "age": 37,
    "gender": "Male",
    "race": "Human",
    "description": "Erwin Smith was the 13th commander of the Survey Corps. Discerning, intelligent, and widely respected, Erwin was an able commander. While he cared deeply for his men, he did not hesitate to sacrifice them for the good and prosperity of mankind, and his men proved more than willing to stake their lives at his order.",
    "popularity": 99,
    "status": "Deceased",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686483087/animes/zw14smh6crcdjqobyavr.jpg"
  },
  {
    "name": "Muzan Kibutsuji",
    "age": 1000,
    "gender": "Male",
    "race": "Demon",
    "description": "Muzan Kibutsuji is the main antagonist of Demon Slayer. He is the Demon King, the first of his kind, and the progenitor of all other demons in existence. Muzan is also the leader of the Twelve Kizuki, an organization of the twelve strongest demons in existence that serve directly under him.",
    "popularity": 75,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686483216/animes/rszz8vcya3itkl4oqfxm.jpg"
  },
  {
    "name": "Naruto Uzumaki",
    "age": 17,
    "gender": "Male",
    "race": "Human",
    "description": "Naruto Uzumaki is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage.",
    "popularity": 78,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686492529/animes/tcn0nzsq3xlpm7spctua.jpg"
  },
  {
    "name": "Sasuke Uchiha",
    "age": 17,
    "gender": "Male",
    "race": "Human",
    "description": "Sasuke Uchiha is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi.",
    "popularity": 70,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686492967/animes/eo4xsq2btb9xvsyy8wly.jpg"
  },
  {
    "name": "Sakura Haruno",
    "age": 17,
    "gender": "Female",
    "race": "Human",
    "description": "Sakura Uchiha is a kunoichi of Konohagakure. When assigned to Team 7, Sakura quickly finds herself ill-prepared for the duties of a shinobi. However, after training under the Sannin Tsunade, she overcomes this, and becomes recognised as one of the greatest medical-nin in the world.",
    "popularity": 45,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686493563/animes/d4flmz1ttpy3jylqbedr.jpg"
  },
  {
    "name": "Kakashi Hatake",
    "age": 31,
    "gender": "Male",
    "race": "Human",
    "description": "Kakashi Hatake is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan, he is one of Konoha's most talented ninja. To his students on Team 7, Kakashi emphasises the importance of teamwork; he himself received this lesson, along with the Sharingan, from his childhood friend, Obito Uchiha.",
    "popularity": 90,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686493130/animes/rma34uvidhd2swmtvnuz.jpg"
  },
  {
    "name": "Kurama",
    "age": 1000,
    "gender": "Male",
    "race": "Kitsune",
    "description": "Kurama, more commonly known as the Nine-Tails, is one of the nine tailed beasts. Centuries of being regarded as a mindless monster and sought after as a tool for war caused Kurama to hate humans. ",
    "popularity": 85,
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686493292/animes/tupaw9hlpaed0vmi09fi.jpg"
  },
  {
    "name": "Jiraiya",
    "age": 54,
    "gender": "Male",
    "race": "Human",
    "description": "Jiraiya was one of Konohagakure's Sannin. Famed as a hermit and pervert of stupendous ninja skill, Jiraiya travelled the world in search of knowledge that would help his friends, the various novels he wrote, and, posthumously, the world in its entirety – knowledge that would be passed on to his godson and final student, Naruto Uzumaki.",
    "popularity": 99,
    "status": "Deceased",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686493355/animes/lctngu9m9uogdal5qlze.jpg"
  },
  {
    "name": "Krillin",
    "age": 44,
    "gender": "Male",
    "race": "Human",
    "description": "Krillin is one of the most powerful and talented martial artists on Earth. He is courageous, faithful, and good-natured. Krillin had a brief rivalry with Goku when they first trained under Master Roshi, but they quickly became lifelong best friends.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686564516/animes/y6gjxswjyjh8lknxf35j.jpg"
  },
  {
    "name": "Nico Robin",
    "age": 30,
    "gender": "Female",
    "race": "Human",
    "description": "Nico Robin, also known by her epithet Devil Child, is the archaeologist of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the seventh member of the crew and the sixth to join, doing so at the end of the Arabasta Arc.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686589687/animes/gw8rjaxhh5yrzq1zarrd.jpg"
  },
  {
    "name": "Denji",
    "age": 16,
    "gender": "Male",
    "race": "Human",
    "description": "Denji is the protagonist of the Chainsaw Man series. As a young boy, he inherits his father's debts from the Yakuza. After meeting Pochita, he becomes a Devil Hunter for the Yakuza in an attempt to clear his debt.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686608053/animes/i9taesy5pfdjv1b0hfpg.jpg"
  },
  {
    "name": "Makima",
    "age": 24,
    "gender": "Female",
    "race": "Devil",
    "description": "Makima is the main antagonist of the Public Safety Saga. She is a high-ranking Public Safety Devil Hunter who took Denji in as her human pet.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686608313/animes/d2puoebpwazxggpxcuhl.jpg"
  },
  {
    "name": "Yuji Itadori",
    "age": 15,
    "gender": "Male",
    "race": "Human",
    "description": "Yuji Itadori is the main protagonist of the Jujutsu Kaisen series. He was living a normal life until he encountered Megumi and ate one of Sukuna's fingers. After becoming Sukuna's vessel, Yuji began attending Tokyo Jujutsu High alongside Megumi and Nobara as first-year students.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1686746669/animes/xeiimgnfxnf1sjtcugxz.jpg"
  },
  {
    "name": "Franky",
    "age": 36,
    "gender": "Male",
    "race": "Cyborg",
    "description": "Iron Man Franky is the shipwright of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the crew's eighth member and the seventh to join, doing so at the end of the Post-Enies Lobby Arc.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1689621205/animes/esjwtgrlnchtewckd5bs.png"
  },
  {
    "name": "Brook",
    "age": 90,
    "gender": "Male",
    "race": "Skeleton",
    "description": "Soul King Brook is the musician of the Straw Hat Pirates, one of their two swordsmen and one of the Senior Officers of the Straw Hat Grand Fleet. He is the ninth member of the crew and the eighth to join, doing so at the end of the Thriller Bark Arc.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1689621378/animes/p0d5bh8pto871nfy9msu.png"
  },
  {
    "name": "Jinbe",
    "age": 46,
    "gender": "Male",
    "race": "Gyojin",
    "description": "Knight of the Sea Jinbe is the helmsman of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the tenth member of the crew and the ninth to join, doing so during the Wano Country Arc.",
    "status": "Alive",
    "image": "https://res.cloudinary.com/dslkwmh63/image/upload/v1689621516/animes/zl6givs5fosndiguohxk.jpg"
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