const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let queryText = `UPDATE gallery SET "likes"=likes + 1 WHERE "id"=$1;`;
    pool.query(queryText, [galleryId]).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM gallery ORDER BY "id";';
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;