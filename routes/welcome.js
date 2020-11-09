const express = require('express');
const router = express.Router();
const Welcome = require('../models/Welcome');
require('dotenv/config');

const admin_url = process.env.admin_url
const localhost = process.env.backend
const frontend = process.env.frontend



router.get('/', async (req, res) => {
    try {
        const data = await Welcome.find().sort({ date: -1 });

        res.status(200).json(data);
    }
    catch (err) {
        res.status(400).json({
            success: true,
            message: err.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const welcome = new Welcome({
            title1: req.body.title1,
            body1: req.body.body1
        });

        const saved = await welcome.save();
        res.redirect(`http://ximchistka24.uz/${admin_url}`)
        // res.status(200).json(saved);
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

// Edit about//////////////////////////////////////////////////
router.get('/:id', async (req, res) => {
    try {
        const welcome = await Welcome.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    title1: req.body.title1,
                    body1: req.body.body1
                }
            }, { new: true }
        );

        const saved = await welcome.save()
        res.redirect(`http://ximchistka24.uz/${admin_url}`)
        // res.status(200).json(update);
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

router.post('/:id', async (req, res) => {
    try {
        const welcome = await Welcome.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    title1: req.body.title1,
                    body1: req.body.body1,
                }
            }, { new: true }
        );

        const saved = await welcome.save();
        res.redirect(`http://ximchistka24.uz/${admin_url}`)
        // res.status(200).json(saved);
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;
