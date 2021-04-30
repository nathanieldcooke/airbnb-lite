const express = require('express')
const asyncHandler = require('express-async-handler')

const { Booking } = require('../../db/models')

const router = express.Router()

router.get('/:userId', asyncHandler(async (req, res, next) => {
    const userId = req.params.userId
    const bookings = await Booking.getBookings(userId);
    return res.json(bookings);
}))

router.post('/', asyncHandler(async (req, res, next) => {
    const bookingData = req.body;
    let newBooking = await Booking.addBooking(bookingData);
    return res.json({ newBooking })
}))

router.put('/:id', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const bookingData = req.body;
    const updatedBooking = await Booking.updateBooking(bookingData, id)
    return res.json({ updatedBooking })
})) 

router.delete('/:id', asyncHandler(async (req, res, next) => {
    const id = req.params.id
    await Booking.deleteBooking(id)
    return res.json({ id })
}))


module.exports = router;