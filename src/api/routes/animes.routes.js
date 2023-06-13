const express = require('express');
const {getAnimeByID, getAnimes, postAnimes, deleteAnime, putAnimeCharacter, putAnime, getAnimeCharacters} = require('../controllers/animes.controller');
const upload = require('../../middlewares/upload.file');
const animesRoutes = express.Router();

animesRoutes.get('/', getAnimes);
animesRoutes.get('/id/:id', getAnimeByID);
animesRoutes.get('/characters/:id', getAnimeCharacters);
animesRoutes.post('/', upload.single('image'), postAnimes);
animesRoutes.put('/id/:id', putAnimeCharacter);
animesRoutes.delete('/:id', deleteAnime);
animesRoutes.put('/:id', upload.single('image'), putAnime);

module.exports = animesRoutes;