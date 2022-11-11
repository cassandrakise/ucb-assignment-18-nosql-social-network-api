const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  postNewThought,
  updateThought,
  deleteThought,
} = require('../../controller/thoughtController');

router.route('/').get(getAllThoughts).post(postNewThought)

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post()

module.exports = router;
