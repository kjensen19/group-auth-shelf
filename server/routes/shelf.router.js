const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const sqlQuery = `
      SELECT * FROM "item"
    `

    pool.query(sqlQuery)
      .then(dbRes => {
        // console.log(dbRes)
        res.send(dbRes.rows)
      })
      .catch(dbErr => {
        console.log('GET ERROR:', dbErr)
        res.sendStatus(500)
      })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  console.log('POST this shizz:', req.body);
  const description = req.body.itemName;
  const image_url = req.body.newItem
  const user_id = req.body.userId;

  const queryText = `
    INSERT INTO "item" (description, image_url, user_id)
      VALUES ($1, $2, $3)
  `;
  pool.query(queryText, [description, image_url, user_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Item Add failed:', err);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  if (req.body.itemUserId===req.user.id) {
    const itemId = req.params.id;
    const sqlQuery = `DELETE FROM item WHERE id = $1;`;
    pool.query(sqlQuery,[itemId])
      .then(dbRes=> {
        console.log(dbRes);
        res.sendStatus(201);
      })
      .catch(dbErr => {
        console.log('DELETE ERROR: ', dbErr);
        res.sendStatus(500);
      })
  }
  
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
