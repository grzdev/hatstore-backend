const router = require("express").Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getAllProducts)
router.get("/:id", productController.getProduct)
router.post("/", productController.createProduct)
router.get("/search/:key", productController.searchProduct)
router.delete("/delete/:id", productController.deleteProduct)
router.put("/edit/:id", productController.editProduct)

module.exports = router