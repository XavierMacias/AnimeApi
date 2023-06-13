const Character = require('../models/characters.model');
const {deleteFile} = require('../../middlewares/delete.file');

//Metodo Get para Character
const getCharacterByID = async (req, res) =>{
    try {
        const {id} = req.params;
        const character = await Character.findById(id);
        if(!character){
           return res.status(404).json({message: 'Not found character with that ID'}); 
        }
        return res.status(200).json(character);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getCharacters = async (req, res) =>{
    try {
        const character = await Character.find();
        if(!character){
           return res.status(404).json({message: 'Not found characters'}); 
        }
        return res.status(200).json(character);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Metodo POST para Character
const postCharacter = async (req, res) => {
    try {
        const newCharacter = new Character(req.body);
        if (req.file) {  // save the URL image from cloudinary to tne product image field
            newCharacter.image = req.file.path;
        }

        const createCharacter = await newCharacter.save();
        return res.status(201).json(createCharacter);
    } catch (error) {
        return res.status(500).json(error)
    }
}

//Metodo DELETE para Character
const deleteCharacter = async(req, res) => {
    const {id} = req.params;
    try {
        const deleteCharacter = await Character.findByIdAndDelete(id);
        if(!deleteCharacter){
            return res.status(404).json(`Message: ${'ID no reconocido'}`)
        }
        return res.status(200).json(deleteCharacter);
    } catch (error) {
        return res.status(500).json(error)
    }
}

//Metodo PUT para Character
const putCharacter = async (req, res) => {
    try{
        const {id} = req.params;
        const putCharacter = new Character(req.body);
    
        if (req.file) {  // save the URL image from cloudinary to tne product image field
            putCharacter.image = req.file.path;
        }
    
        putCharacter._id = id;
        const updatedCharacter = await Character.findByIdAndUpdate(id, putCharacter, {new: true});
    
        console.log(updatedCharacter.image);
        console.log(putCharacter.image);
        if(updatedCharacter.image !== putCharacter.image){ // delete image in cloudinary if new image is in PUT
            deleteFile(updatedCharacter.image);
        }
    
        return res.status(200).json(updatedCharacter)
    
    } catch (error){
        return res.status(500).json(error)
    }
};

module.exports = {getCharacterByID, getCharacters, postCharacter, deleteCharacter, putCharacter}