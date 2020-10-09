const mongoose = require('mongoose');

const CepSchema = new mongoose.Schema({
    city: String,
    cep: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('CEP', CepSchema);
