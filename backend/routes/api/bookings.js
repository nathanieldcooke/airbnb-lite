const express = require('express')
const asyncHandler = require('express-async-handler')

const { Booking } = require('../../db/models')

const router = express.Router()

router.get('/:userId', asyncHandler(async (req, res, next) => {
    const userId = req.params.userId
    const bookings = await Booking.getBookings(userId);
    // console.log(bookings)
    return res.json(bookings);
}))

router.post('/', asyncHandler(async (req, res, next) => {
    const bookingData = req.body;
    await Booking.addBooking(bookingData);
}))

router.delete('/:id', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    await Booking.deleteBooking(id)
    return res.json({ id })
}))


module.exports = router;