const notesCtrl = {};

const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.postNote = async(req, res) => {
    const {title, content }= req.body;
    const note = new Note ({
        title: title,
        content: content
    })
    await note.save()
    res.json({message: 'note seccessfully saved'})
}

notesCtrl.deleteNote = (req, res) => {
    const reqId = req.params.id;
    Note.findByIdAndDelete(reqId, (err) => {
        if(err){
            console.log(err);
        } else {
            res.json({message: 'note successfully deleted'})
        }
    })
}

notesCtrl.getNote = (req, res) => {
    const reqId = req.params.id;
    Note.findById(reqId, (err, found) => {
        if(err){
            console.log(err);
        } else {
            res.json(found);
        }
    })
}

notesCtrl.updateNote = (req, res) => {
    const reqId = req.params.id;
    const {title, content} = req.body;
    Note.findById(reqId, (err, found) => {
        if(err){
            console.log(err);
        } else {
            found.content = content;
            found.title = title;
            found.save()
            res.json({message: "successfuly updated"});
        }
    })
}



module.exports = notesCtrl;

