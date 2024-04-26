const User = require("../models/user");

const fetchAllUsers = async (req, res) => {
  // 1. Get all users from DB
  // 2. Send the user back as a response
  const users = await User.find();
  // --------------------------------(1)
  res.json({ users: users });
  // --------------------------------(2)
};

const fetchUser = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the user assoc. w/ ID
  // 3.Send response with that user as the payload

  const userId = req.params.id;
  // --------------------------------(1)
  const user = await User.findById(userId);
  // --------------------------------(2)
  res.json({ user: user });
  // --------------------------------(3)
};

const createUser = async (req, res) => {
  
  const { userName, email, dob, phoneNumber } = req.body;

    // --------------------------------(1)
    const user = await User.create({
        userName: String,
        email: String,
        DOB: Date,
        phoneNumber: Number,
    });
    // --------------------------------(2)
    res.json({ user: user });
    // --------------------------------(3)
  };
  

const updateUser = async (req, res) => {
    // 1. Get id off the url
    // 2. Get the data off the id
    // 3. Find and Update user
    // 4. Retrieve updatedUser and send it as a response
    const userId = req.params.id;
    // --------------------------------(1)
    const { userName,email, dob, phoneNumber } = req.body;
    // --------------------------------(2)
    const comment = await User.findByIdAndUpdate(userId, {
      userName: String,
      email: String,
      DOB: Date,
      phoneNumber: Number,
    });
    // --------------------------------(2)
    const updatedComment = await Comment.findById(noteId);
    res.json({ comment: updatedComment });
  };


const deleteUser = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const userId = req.params.id
  // --------------------------------(1)
  await User.deleteOne({
    id: userId
  })
    // --------------------------------(2)
  res.json({success: "Record has been deleted successfully"})
}

module.exports = {
    fetchAllUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser
}