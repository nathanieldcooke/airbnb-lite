const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const bookingsRouter = require('./bookings.js')
const reviewsRouter = require('./reviews.js')
const stayedAtHistoryRouter = require('./stayedAtHistory.js')
const { Reviews, StayedAtHistory } = require('../../db/models')

router.use('/session', sessionRouter); // /api/session

router.use('/users', usersRouter); // /api/users

router.use('/spots', spotsRouter);

router.use('/bookings', bookingsRouter);

router.use('/reviews', reviewsRouter);

router.use('/stayedAtHistory', stayedAtHistoryRouter)

// router.post('/test', function(req,res) {  // /api/test
//     res.json({ requestBody: req.body });
// });

// router.get('api/seed-demo-user/:id', asyncHandler(async (req, res, next) => {
//     const userId = req.params.id 
//     await StayedAtHistory.bulkCreate([
//         (5, userId, current_timestamp, current_timestamp),
//         (3, userId, current_timestamp, current_timestamp),
//         (1, userId, current_timestamp, current_timestamp),
//         (15, userId, current_timestamp, current_timestamp),
//         (2, userId, current_timestamp, current_timestamp),
//         (4, userId, current_timestamp, current_timestamp),
//         (10, userId, current_timestamp, current_timestamp)
//     ])

//     await Reviews.bulkCreate([
//         (5, 4, 5, 3, 3, 3, 'Similique hic necessitatibus qui rem ad nihil asperiores. Ex minima sapiente ea mollitia libero laboriosam voluptatem aliquam et. Reiciendis provident expedita dicta sit quidem. Molestiae dolores alias corporis rerum nostrum necessitatibus veritatis officia. Dignissimos numquam vel omnis quidem voluptas consequuntur maiores. Corporis qui voluptas. Laborum repellat ea aspernatur animi impedit nemo nihil molestiae sit. Occaecati perferendis ut ut ex in molestiae eveniet nobis. Odio doloremque blan...', 5, userId, current_timestamp, current_timestamp),
//         (3, 4, 5, 4, 3, 3, 'Aut eaque enim. Sint quos consequuntur ea quaerat reiciendis impedit dolor rem. Voluptas quae fuga eos repudiandae mollitia odit voluptas sit asperiores. Ex et dolore beatae. Quos veritatis saepe ab libero aut quisquam tempora voluptatem. Repellat optio mollitia illum et ea sunt a. Consequatur non aliquam quam inventore voluptas delectus voluptatem blanditiis sed. Incidunt consequatur impedit voluptatibus unde mollitia unde inventore. Et consequatur nisi magni qui voluptatem voluptatibus. Eum qu...', 3, userId, current_timestamp, current_timestamp),
//         (3, 5, 4, 3, 3, 3, 'Quia placeat placeat qui. Nostrum cum accusamus odio est aut quod quia temporibus sint. Est quae rerum veniam voluptatum. Laboriosam ab rem et fugit quaerat. Placeat et quaerat natus illum qui aut molestias. Nisi consequuntur sit et facilis perspiciatis expedita quaerat. Et quod asperiores laboriosam fugit unde sint est quos id.', 1, userId, current_timestamp, current_timestamp),
//         (3, 3, 3, 3, 5, 3, 'Libero deserunt ipsam.', 15, 111, current_timestamp, current_timestamp),
//         (5, 5, 3, 5, 5, 4, 'Qui sit laborum vero fugiat. Et repellendus sint aut ad enim laudantium porro. Est commodi aut reiciendis quibusdam et nihil asperiores hic sequi. Animi eveniet saepe ex quidem iste voluptates. Qui ex velit illum porro labore voluptates nostrum beatae. Assumenda a aliquam est nemo totam eos sit.', 2, userId, current_timestamp, current_timestamp),
//         (5, 3, 3, 5, 4, 3, 'Earum commodi velit sed sint omnis qui beatae. Rem et ipsa tenetur aut minus sunt sed aut. Suscipit modi delectus temporibus. Natus harum rerum ipsum ratione.', 4, userId, current_timestamp, current_timestamp),
//         (3, 4, 4, 3, 4, 4, 'Incidunt ea cumque dignissimos voluptatibus provident esse et sed. Minima aliquam ullam aliquid tempora et et tempora accusantium possimus. Culpa est dolore fugiat quam recusandae tenetur distinctio amet.', 10, userId, current_timestamp, current_timestamp)
//     ])
// }))

module.exports = router;

/////////////// TESTING USER AUTH MIDDLEWARE. Delete later.  ///////////////

// const { User } = require('../../db/models');
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );