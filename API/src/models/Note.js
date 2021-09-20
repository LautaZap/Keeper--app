const {
    Schema,
    model
} = require('mongoose');

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String
}, {
    timestamps: true
})

module.exports = model('Notes', noteSchema);