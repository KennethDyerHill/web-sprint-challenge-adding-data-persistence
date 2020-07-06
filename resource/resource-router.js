const express = require('express');

const resource = require('/resource-model');

const router = express.Router();

router.get('/', (req, res) => {

    resource.get()

    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.post('/', (req, res) => {

    const newResource = req.body

    resource.post(newResource)

    .then(resource => {
        res.json(newResource);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to post project' });
    });
});

module.exports = router;