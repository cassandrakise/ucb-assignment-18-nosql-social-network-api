const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  postNewThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controller/thoughtController');

router.route('/').get(getAllThoughts).post(postNewThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
