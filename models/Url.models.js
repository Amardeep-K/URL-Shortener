const mongoose = require('mongoose')
const urlSchema= mongoose.Schema(
    {
        shortID: {
            type: String,
            required: true,
            unique:true
        },
        redirectUR: {
            type:String,
            required: true,
            unique:true
        }

    }
)