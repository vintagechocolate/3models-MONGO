const Comment = require("../models/comment");

const fetchAllComments = async (req, res) => {
  // 1. Get all comments from DB
  // 2. Send the comment back as a response
  const comments = await Comment.find();
  // --------------------------------(1)
  res.json({ comments: comments });
  // --------------------------------(2)
};

const fetchComment = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the comment assoc. w/ ID
  // 3.Send response with that comment as the payload
  const commentId = req.params.id;
  // --------------------------------(1)
  const comment = await Comment.findById(commentId);
  // --------------------------------(2)
  res.json({ comment: comment });
  // --------------------------------(3)
};

const createComment = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create comment
  // 3. Respond with new copy of a comment
  console.log(`BODY: ${req.body}`);
  const body = req.body.body;
  // --------------------------------(1)
  const comment = await Comment.create({
    body: body,
  });
  // --------------------------------(2)
  res.json({ comment: comment });
  // --------------------------------(3)
};

const updateComment = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update comment
  // 4. Retrieve updatedComment and send it as a response
  const commentId = req.params.id;
  // --------------------------------(1)
  const { body, } = req.body;
  // --------------------------------(2)
  const comment = await Comment.findByIdAndUpdate(commentId, {
    body: body,
  });
  // --------------------------------(2)
  const updatedComment = await Comment.findById(noteId);
  res.json({ comment: updatedComment });
};


const deleteComment = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const commentId = req.params.id
  // --------------------------------(1)
  await Comment.deleteOne({
    id: commentId
  })
    // --------------------------------(2)
  res.json({success: "Record has been deleted successfully"})
}

module.exports = {
    fetchAllComments,
    fetchComment,
    createComment,
    updateComment,
    deleteComment
}