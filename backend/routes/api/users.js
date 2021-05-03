const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Review, StayedAtHistory } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        }), 
    handleValidationErrors,
];

// Sign up ---> POST /api/users/
router.post('/demo', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);


    await StayedAtHistory.bulkCreate([
        {spotId: 5, userId: user.id},
        {spotId: 3, userId: user.id},
        {spotId: 1, userId: user.id},
        {spotId: 15, userId: user.id},
        {spotId: 2, userId: user.id},
        {spotId: 4, userId: user.id},
        {spotId: 10, userId: user.id}
    ])

    await Review.bulkCreate([
        { cleanliness: 5, communication: 4, checkIn: 5, accuracy: 3, location: 3, value: 3, reviewContent: 'Similique hic necessitatibus qui rem ad nihil asperiores. Ex minima sapiente ea mollitia libero laboriosam voluptatem aliquam et. Reiciendis provident expedita dicta sit quidem. Molestiae dolores alias corporis rerum nostrum necessitatibus veritatis officia. Dignissimos numquam vel omnis quidemvur ', spotId: 5, userId: user.id},
        {cleanliness: 3, communication: 4, checkIn: 5, accuracy: 4, location: 3, value: 3, reviewContent: 'Aut eaque enim. Sint quos consequuntur ea quaerat reiciendis impedit dolor rem. Voluptas quae fuga eos repudiandae mollitia odit voluptas sit asperiores. Ex et dolore beatae. Quos veritatis saepe ab libero aut quisquam tempora voluptatem', spotId: 3, userId: user.id},
        {cleanliness: 3, communication: 5, checkIn: 4, accuracy: 3, location: 3, value: 3, reviewContent: 'Quia placeat placeat qui. Nostrum cum accusamus odio est aut quod quia temporibus sint. Est quae rerum veniam voluptatum. Laboriosam ab rem et fugit quaerat. Placeat et quaerat natus illum qui aut molestias. Nisi consequuntur sit et facilis perspiciatis expedita quaerat. Et ', spotId: 1, userId: user.id},
        {cleanliness: 3, communication: 3, checkIn: 3, accuracy: 3, location: 5, value: 3, reviewContent: 'Libero deserunt ipsam.', spotId: 15, userId: user.id},
        {cleanliness: 5, communication: 5, checkIn: 3, accuracy: 5, location: 5, value: 4, reviewContent: 'Qui sit laborum vero fugiat. Et repellendus sint aut ad enim laudantium porro. Est commodi aut reiciendis quibusdam et nihil asperiores ', spotId: 2, userId: user.id},
        {cleanliness: 5, communication: 3, checkIn: 3, accuracy: 5, location: 4, value: 3, reviewContent: 'Earum commodi velit sed sint omnis qui beatae. Rem et ipsa tenetur aut minus sunt sed aut. Suscipit modi delectus temporibus. Natus harum rerum ipsum ratione.', spotId: 4, userId: user.id},
        {cleanliness: 3, communication: 4, checkIn: 4, accuracy: 3, location: 4, value: 4, reviewContent: 'Incidunt ea cumque dignissimos voluptatibus provident esse et sed. Minima aliquam ullam aliquid tempora et et tempora accusantium possimus. Culpa est dolore fugiat quam recusandae tenetur distinctio amet.', spotId: 10, userId: user.id}
    ])

    return res.json({ user });
}));

module.exports = router;