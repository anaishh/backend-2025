const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:  String,
        filename: String
    },
    {
        timestamps: true, // TODO createdAt, updatedAt
        versionKey: false
    }
)
module.exports = mongoose.model("storages", StorageScheme) // Nombre de la colección 