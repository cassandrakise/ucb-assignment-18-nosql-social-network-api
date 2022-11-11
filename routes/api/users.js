const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
  addFriend,
} = require('../../controller/userController');

router.route('/').get(getAllUsers).post(postNewUser)

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').put(addFriend);

module.exports = router;
