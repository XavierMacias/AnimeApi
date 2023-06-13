const Anime = require("../models/animes.model")
const Character = require("../models/characters.model")
const {deleteFile} = require('../../middlewares/delete.file');

//Método GET para animes
const getAnimeByID = async(req, res) => {
    try {
        const {id} = req.params;
        const anime = await Anime.findById(id);
        if(!anime){
           return res.status(404).json({message: 'Not found anime with that ID'}); 
        }
        return res.status(200).json(anime);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getAnimes = async(req, res) => {
    try {
        const anime = await Anime.find().populate("characters", "name age popularity");
        if(!anime){
           return res.status(404).json({message: 'Not found anime'}); 
        }
        return res.status(200).json(anime);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getAnimeCharacters = async(req, res) => {
    try {
        const {id} = req.params;
        if(id === 'all') {
            const character = await Character.find();
            return res.status(200).json(character);
        }
        const anime = await Anime.findById(id).populate("characters", "name age gender race description popularity status image");
        if(!anime){
           return res.status(404).json({message: 'Not found anime with that ID'}); 
        }
        return res.status(200).json(anime.characters);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// Método POST para animes.
const postAnimes =  async (req, res) => {
    try {
        const { name, year, genre, description, rating, characters, image } = req.body;
        const newAnime = new Anime({
            name,
            year,
            genre,
            description,
            rating,
            characters: characters || [],
            image
        });
        if (req.file) {  // save the URL image from cloudinary to tne product image field
            newAnime.image = req.file.path;
        }
        const createdAnime = await newAnime.save();
        return res.status(201).json(createdAnime);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Método DELETE para animes.
const deleteAnime = async (req, res) => {
    try {
        const { id } = req.params;
        //Se busca el cine por id.
        const animeDeleted = await Anime.findByIdAndDelete(id);
        if (!animeDeleted) {
            return res.status(404).json({ message: "Erase action is not possible. Check anime iD." });
        }
        return res.status(200).json(animeDeleted);
    } catch (error) {
        return next(error);
    }
};

//Método PUT para para introducir nuevos characters en el anime.
const putAnimeCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const animeID = req.body._id;

        const duplicateChar = await Anime.find({$and: [{_id: animeID},{characters: {$in: [id]}}]});
        if(duplicateChar.length > 0) {
            return res.status(405).json({ message: "Character already exists." });
        }
        const updatedAnime = await Anime.findByIdAndUpdate(
            animeID,
            { $push: { characters: id } },
            { new: true }
        );
        if (!updatedAnime) {
            return res.status(404).json({ message: "Anime no found." });
        }
        console.log("updated anime -------", updatedAnime);
        return res.status(200).json(updatedAnime);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const putAnime = async (req, res) => {
    try{
        const {id} = req.params;
        const putAnime = new Anime(req.body);
    
        if (req.file) {  // save the URL image from cloudinary to tne product image field
            putAnime.image = req.file.path;
        }
    
        putAnime._id = id;
        const updatedAnime = await Anime.findByIdAndUpdate(id, putAnime, {new: true});
    
        console.log(updatedAnime.image);
        console.log(putAnime.image);
        if(updatedAnime.image !== putAnime.image){ // delete image in cloudinary if new image is in PUT
            deleteFile(updatedAnime.image);
        }
    
        return res.status(200).json(updatedAnime);
    
    } catch (error){
        return res.status(500).json(error)
    }
};
 

module.exports = {getAnimeByID, getAnimes, postAnimes, deleteAnime, putAnimeCharacter, putAnime, getAnimeCharacters};