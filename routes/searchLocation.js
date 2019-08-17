//route for user searching their location
//only include required modules for this specific route, all other app setup/initiation work will be done in the main server file
const express = require('express');
var router = express.Router();

//To-Do: replace this with a client side rendered react page
router.get('/', (req, res) => {
	res.render('search.ejs');
});

module.exports = router;