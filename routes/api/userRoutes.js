const router = require("express").Router();

//import functions
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUserById,
    addFriend,
    deleteFriend

} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;