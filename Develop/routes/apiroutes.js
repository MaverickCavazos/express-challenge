const router = require('express').Router();
const newNote = require('../db/notes')

router.get('/api/notes', (req, res) => {
   newNote.getNotes().then((notes) => {
       return res.json(notes);
   }) .catch((err) => res.status(404).json(err))
   
});

/* router.delete ('/api/notes/:id', (req, res) => {
    */
/* }); */

router.post('/api/notes', (req, res) => {
    newNote.addNotes(req.body).then((notes) => {
        return res.json(notes);
    }) .catch((err) => res.status(404).json(err))
});

module.exports = router;