const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const pins = fs.createReadStream(path.resolve(__dirname, 'pins.json'));

router.get('/', (req, res) => {
  pins.pipe(res);
});

module.exports = router;