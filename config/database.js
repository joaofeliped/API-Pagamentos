const mongoose = require('mongoose');

const url = process.env.MONGOLAB_URI || 'mongodb://localhost/db_finance';
module.exports = mongoose.connect(url);

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."