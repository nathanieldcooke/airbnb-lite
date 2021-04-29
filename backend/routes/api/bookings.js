const express = require('express')
const asyncHandler = require('express-async-handler')

const { Booking } = require('../../db/models')

const router = express.Router()

router.post('/', asyncHandler(async (req, res, next) => {
    const bookingData = req.body;
    await Booking.addBooking(bookingData)
}))

module.exports = router;