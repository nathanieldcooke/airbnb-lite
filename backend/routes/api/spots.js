const express = require('express')
const asyncHandler = require('express-async-handler')

const { Spot } = require('../../db/models')

const router = express.Router()

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findSpot(spotId);
    return res.json(spot)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    // const spots = await Spot.getAllSpots();
    const order = req.params.id;
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
    const [newLink, data] = order.split('::')

    if (newLink === 'check-in') { console.log('Check-In worked!!! ', data) }

    else if (newLink === 'check-out') { console.log('Check-Out worked!!!', data) }
    
    else if (newLink === 'guests') { console.log('Guests worked!!!', data) }
}));

module.exports = router