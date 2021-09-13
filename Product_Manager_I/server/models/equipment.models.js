const mongoose = require("mongoose");

const EquipmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must type in equipment"],
        minlength: [3, "Must be at least 3 characters long"],
    },
    price: {
        type: Number,
        required: [true, "Must include price"],
        min: [3, "Must include valid price"],
    },
    description: {
        type: String,
        required: [true, "Must include description"],
        minlength: [10, "Description too short"],
    }

},{ timestamps: true }); // adds createdAt and updatedAt


module.exports = mongoose.model("Equipment", EquipmentSchema);