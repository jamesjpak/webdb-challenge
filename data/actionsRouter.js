const express = require('express');
const router = express.Router();

const Actions = require('./actionsModel');

router.get('/', (req, res) => {
    Actions.getActions()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
    Actions.addActionById(req.body, 'id')
    .then(action => {
        res.status(201).json(action)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;