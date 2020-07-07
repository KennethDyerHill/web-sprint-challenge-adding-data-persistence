const express = require('express');

const task = require('./task-model');

const router = express.Router();

router.get('/', (req, res) => {
    task.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
})

router.post('/', (req, res) => {
    const newTask = req.body

    task.post(newTask)
    .then(tasks => {
        res.json(newTask);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to post task' });
    });
})

module.exports = router;