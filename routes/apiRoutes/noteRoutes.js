const router = require('express').Router();
const createNewNote = require('../../lib/notes');
const { notes } = require('../../Develop/db/db.json')

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes)
    res.json(note)
  });

module.exports = router;