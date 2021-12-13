const router = require('express').Router();
const fs = require("fs");
const path = require("path")
const { notes } = require('../../db/db.json')
const { createNewNote } = require('../../lib/notes')

router.get("/notes", (req, res) => {
    let results = notes
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes)
    res.json(note)
  });

module.exports = router;