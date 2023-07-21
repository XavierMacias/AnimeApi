const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animesSchema = new Schema (
    {
        name: {type: String, required: true},
        year: {type: Number, required: true},
        genre: [{type: String}],
        description: {type: String},
        rating: {type: Number, default: 0},
        races: [{type: String}],
        characters: [{type: Schema.Types.ObjectId, ref: 'character'}],
        image: {type: String, required: false}
    }, {
        timestamps: true
    }
)

const Anime = mongoose.model("anime", animesSchema);

module.exports = Anime;