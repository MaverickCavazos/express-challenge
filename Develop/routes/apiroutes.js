const router = require('express').Router();
const newNote = require('../db/notes')

router.get('/notes', (req, res) => {
    newNote.getNotes().then((notes) => {
        console.log('here')
        console.log(notes)
        return res.json(notes);
    }).catch((err) => res.status(404).json(err))

});



/* router.delete ('/api/notes/:id', (req, res) => {
    */
/* }); */

router.post('/notes', (req, res) => {
    newNote.addNotes(req.body).then((notes) => {
        return res.json(notes);
    }).catch((err) => res.status(404).json(err))
});

module.exports = router;