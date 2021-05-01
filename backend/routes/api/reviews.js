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
    return res.json(postedReview)

}))

router.put('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedReview = await Review.updateReview(updateData, id)
    return res.json(updatedReview)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id
    await Review.deleteReview(id)
    return res.json({ id })
}))

module.exports = router

