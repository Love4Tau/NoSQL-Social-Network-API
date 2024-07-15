const router = require("express").Router();

//import functions
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUserById,
    addFriend,
    deleteFriend

} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUserById);

router.route("/:userId/friends/:friendId").add(addFriend).delete(deleteFriend);

module.exports = router;