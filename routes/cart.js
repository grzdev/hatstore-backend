const router = require("express").Router();
const cartController = require("../controllers/cartController")
const {verifyToken} = require("../middleware/verifyToken")

router.get("/find:id", cartController.getCart)
router.post("/", cartController.addToCart)
router.delete("/:cartItemId", cartController.deleteCartItem)
router.post("/quantity", cartController.decreaseCartItem)

module.exports = router