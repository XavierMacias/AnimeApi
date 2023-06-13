const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema (
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, required: true, default: "Asexual", enum: ["Male", "Female", "Asexual"]},
        race: {type: String, required: true},
        description: {type: String},
        popularity: {type: Number},
        status: {type: String, required: true, default: "Alive", enum: ["Alive", "Deceased", "Unknown"]},
        image: {type: String, required: false}
    }, {
        timestamps: true
    }
)

const Character = mongoose.model("character", characterSchema);

module.exports = Character;