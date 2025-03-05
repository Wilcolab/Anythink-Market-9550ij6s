/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Get all comments.
 * @name GET /
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object containing all comments
 */

/**
 * Delete a comment by ID.
 * @name DELETE /:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} req.params.id - The ID of the comment to delete
 * @returns {JSON} - A JSON object indicating success
 */

module.exports = router;

router.get("/", (req, res) => {
  Comment.find()
    .then(comments => {
      res.json({ comments });
    })
    .catch(err => {
      console.log(err);
    });
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.id);
        res.json({ success: true });
    } catch (err) {
        console.log(err);
    }
});
