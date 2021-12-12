const router = require('express').Router();
const createNewNote = require('../../lib/notes')
const { notes } = require('../../Develop/db/db.json')

router.get('/api/notes', (req, res) => {
    let results = notes;
    results = getAndRenderNotes(req, results)

    res.json(results);
});

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes)
  
      res.json(note)
    
  });

module.exports = router;