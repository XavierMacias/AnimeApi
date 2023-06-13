const express = require('express');
const {getCharacterByID, getCharacters, postCharacter, deleteCharacter, putCharacter} = require('../controllers/characters.controller');
const upload = require('../../middlewares/upload.file');
const charactersRoutes = express.Router();

charactersRoutes.get('/', getCharacters);
charactersRoutes.get('/id/:id', getCharacterByID);
charactersRoutes.post('/', upload.single('image'), postCharacter);
charactersRoutes.put('/:id', upload.single('image'), putCharacter);
charactersRoutes.delete('/:id',deleteCharacter);

module.exports = charactersRoutes;