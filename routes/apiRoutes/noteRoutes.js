const router = require('express').Router();
const notes = require('../../db/notes')

router.get("/notes", (req, res) => {
    notes.getNotes()
    .then(notes => res.json(notes));
});

router.post("/notes", (req, res) => {
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
  });

module.exports = router;