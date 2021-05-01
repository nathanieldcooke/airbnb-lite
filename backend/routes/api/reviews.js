const express = require('express')
const asyncHandler = require('express-async-handler')
// const { default: Spots } = require('../../../frontend/src/components/HistoryFormModal/Spots/Spots')

const { Review } = require('../../db/models')

const router = express.Router()

router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const reviews = await Review.findAllOfUsersReviews(userId)
    return res.json(reviews)
}))

router.post('/', asyncHandler(async (req, res) => {
    const data = req.body
    const postedReview = await Review.postReview(data)
    // console.log(data)
    return res.json(postedReview)

}))

module.exports = router

