const express = require('express')
const asyncHandler = require('express-async-handler')
// const { default: Spots } = require('../../../frontend/src/components/HistoryFormModal/Spots/Spots')

const { StayedAtHistory } = require('../../db/models')

const router = express.Router()

router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const spotsStayedAt = await StayedAtHistory.findAllOfUsersVisitedSpots(userId)
    return res.json(spotsStayedAt)
}))

module.exports = router