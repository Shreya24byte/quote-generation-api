const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Step2: writing schema
const quotesSchema = new Schema({
    quote: String,
    author : String
},
{collection: 'quotesCollection'});

//3: export schem
module.exports = mongoose.model("quotesCollection", quotesSchema);