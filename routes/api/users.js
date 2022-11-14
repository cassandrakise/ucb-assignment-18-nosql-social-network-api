const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controller/userController');

router.route('/').get(getAllUsers).post(postNewUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;
