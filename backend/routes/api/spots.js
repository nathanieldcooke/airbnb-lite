const express = require('express')
const asyncHandler = require('express-async-handler')

const { Spot } = require('../../db/models')

const router = express.Router()

router.get('/:id', asyncHandler(async (req, res) => {
    // const spots = await Spot.getAllSpots();
    const order = req.params.id;
    console.log('THis is Order: ',order)
    if (order === 'top-rated') {
        const spots = await Spot.orderByTop();
        return res.json(spots)
    }
    if (order === 'bring-children') {
        const spots = await Spot.getChildFriendly();
        return res.json(spots)
    } 
    if (order === 'bring-infants') {
        const spots = await Spot.getInfantsFriendly();
        return res.json(spots)
    }
    if (order === 'budget') {
        const spots = await Spot.orderByBudget();
        return res.json(spots)
    }
    console.log('Spots!!!!!!!: ', spots)
}));

module.exports = router