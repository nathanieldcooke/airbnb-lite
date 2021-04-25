const express = require('express')
const asyncHandler = require('express-async-handler')

const { Spot } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (_req, res) => {
    const spots = await Spot.getAllSpots();
    return res.json(spots)
}));

module.exports = router