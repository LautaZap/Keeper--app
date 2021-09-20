const { Router } = require('express');
const router = Router();

const { getNotes, postNote, deleteNote, updateNote, getNote } = require('../controllers/notes.controller.js');

router.route('/')
    .get(getNotes)
    .post(postNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;