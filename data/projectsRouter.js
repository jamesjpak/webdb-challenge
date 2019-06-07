const express = require('express');
const router = express.Router();

const Projects = require('./projectsModel');

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})



module.exports = router;