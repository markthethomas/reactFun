const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/all', (req, res) => {
    fs.readFile(path.resolve(__dirname, 'pins.json'), (err, data) => {
      return res.json(JSON.parse(data))
    });
});

module.exports = router;