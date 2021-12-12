const router = require('express').Router();
const { notes } = require('../../Develop/db/db.json')

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
  
      // add animal to json file and animals array in this function
      const note = createNewAnimal(req.body, animals);
      res.json(animal)
    
  });

module.exports = router;