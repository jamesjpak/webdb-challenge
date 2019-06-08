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

router.get('/:id', (req, res) => {
    Projects.getProjectById(req.params.id)
    .then(project => {
        if (project) {
            res.status(200).json(project)
        } 
        else {
            res.status(404).json({ message: 'Project not found!' })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
    Projects.addProject(req.body, 'id')
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;